'use client';
import {Button} from './components/ui/button';
import {Card} from './components/ui/card';

export default function Top() {
  const content = (
    <>
      Jestを使ったテストの基本を
      <br />
      ハンズオンで学んでいきましょう！
    </>
  );
  return (
    <div>
      <Card
        title="初めてのJestハンズオン"
        content={content}
        button={<Button children="学習を始める" style="btn-outline btn-secondary text-white " />}
      />
    </div>
  );
}
