'use client';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '@/lib/microcms';
import {marked} from 'marked';

type Article = {
  title: string;
  content: string;
};

type ArticleResponse = {
  contents: Article[];
};

type Props = {
  contentTitle: string;
};

export default function Article({contentTitle}: Props) {
  const {data, isPending, error} = useQuery({
    queryKey: ['articles'],
    queryFn: async (): Promise<ArticleResponse> => {
      const url = 'article';
      const data = await fetchData(url);
      return data;
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content</div>;
  }
  const target = data.contents.find((item) => item.title === contentTitle);
  const title = marked(target?.title || '');
  const contentData = marked(target?.content || '');

  return (
    <article className="Matcher prose">
      <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
      <div dangerouslySetInnerHTML={{__html: contentData}} />
    </article>
  );
}
