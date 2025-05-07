'use client';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '@/lib/microcms';
import {marked} from 'marked';
import {Button} from '@/app/components/ui/button';
import {useRouter} from 'next/navigation';

type Article = {
  title: string;
  content: string;
};

type ArticleResponse = {
  contents: Article[];
};

type Props = {
  contentTitle: string;
  children: string;
  route: string;
};

export default function Article({contentTitle, children, route}: Props) {
  const router = useRouter();

  // microCMSから記事を取得
  const {data, isPending, error} = useQuery({
    queryKey: ['articles'],
    queryFn: async (): Promise<ArticleResponse> => {
      const url = 'article';
      const data = await fetchData(url);
      return data;
    },
  });

  // 読み込み中の表示
  if (isPending) {
    return <div>Loading...</div>;
  }

  // エラー時の表示
  if (error) {
    return <div>Error loading content</div>;
  }
  const target = data.contents.find((item) => item.title === contentTitle);
  const title = marked(target?.title || '');
  const contentData = marked(target?.content || '');

  // 確認テストページへ遷移
  const handleClick = () => {
    router.push(route);
  };

  return (
    <div>
      <article className="Matcher prose">
        <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
        <div dangerouslySetInnerHTML={{__html: contentData}} />
      </article>
      <div className="flex justify-end mt-10">
        <Button children={children} buttonFn={handleClick} />
      </div>
    </div>
  );
}
