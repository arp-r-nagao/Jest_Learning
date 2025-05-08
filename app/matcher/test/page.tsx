import {Button} from '@/app/components/ui/button';
import {Test} from '@/lib/testFormat';
import {matcherTest} from './matcher';

export default function TestPage() {
  const test = matcherTest();

  return (
    <div className="Matcher_test">
      <div className="max-w-full">
        <h1 className="border-l-8 border-secondary pl-3 bg-neutral text-white px-2 w-3/5">確認テスト</h1>
        <p className="my-5">各問題の要件を満たせるように、適切な記述を入力してください。</p>
        <Test test={test} />
      </div>
      <div className="flex justify-end">
        <Button children="判定" />
      </div>
    </div>
  );
}
