'use client';

import Article from '@/lib/get-article';

export default function AsyncArticle() {
  return (
    <div className="py-5 max-w-full">
      <Article contentTitle="Async" route="/lessons/easy/async/test">
        確認テストへ進む
      </Article>
    </div>
  );
}
