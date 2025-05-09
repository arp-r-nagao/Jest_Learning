'use client';
import {useRouter} from 'next/navigation';
import {Button} from './components/ui/button';
import {Card} from './components/ui/card';

export default function Top() {
  const router = useRouter();

  // トップページに表示するコンテンツ
  const content = (
    <>
      Jestを使ったテストの基本を
      <br />
      ハンズオンで学んでいきましょう！
    </>
  );

  // レッスン一覧へ遷移
  const toLessons = () => {
    router.push('/lessons');
  };

  return (
    <div>
      <Card
        title="初めてのJestハンズオン"
        content={content}
        button={
          <Button style="btn-outline btn-secondary text-white" buttonFn={toLessons}>
            学習を始める
          </Button>
        }
      />
    </div>
  );
}
