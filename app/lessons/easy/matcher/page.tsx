'use client';

import Article from '@/lib/get-article';

export default function MatcherArticle() {
  return (
    <div className="py-5 max-w-full">
      <Article contentTitle="Matcher" route="/matcher/test">
        確認テストへ進む
      </Article>
    </div>
  );
}
