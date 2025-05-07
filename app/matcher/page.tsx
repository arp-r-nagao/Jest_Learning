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

export default function Matcher() {
  const {data, isPending, error} = useQuery({
    queryKey: ['articles'],
    queryFn: async (): Promise<ArticleResponse> => {
      const url = 'matcher_article';
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

  const title = marked(data?.contents[0].title || '');
  const contentData = marked(data?.contents[0].content || '');

  return (
    <article className="Matcher prose px-10 py-5 max-w-full md:px-20 md:not-[]:py-10">
      <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
      <div dangerouslySetInnerHTML={{__html: contentData}} />
    </article>
  );
}
