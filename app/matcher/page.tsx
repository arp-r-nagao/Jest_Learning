'use client';

import Article from '@/lib/get-article';
import {Button} from '../components/ui/button';

export default function MatcherArticle() {
  return (
    <div className="py-5 max-w-full">
      <Article contentTitle="Matcher" />
      <div className="flex justify-end mt-10">
        <Button children="確認テストへ進む" />
      </div>
    </div>
  );
}
