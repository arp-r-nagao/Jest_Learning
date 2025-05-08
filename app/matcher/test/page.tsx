'use client';
import {Button} from '@/app/components/ui/button';
import {Test} from '@/lib/testFormat';
import {matcherTest} from './matcher';
import {useEffect, useState} from 'react';
import {useJudgment} from '@/app/hooks/judgment';
import {Step} from '@/app/components/ui/step';

type PropsCode = {
  code: string;
};

export type PropsItem = {
  title: string;
  question: string;
  codes: PropsCode[];
  answer: string;
};

export default function TestPage() {
  const [testNum, setTestNum] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [judge, setJudge] = useState<boolean | null>();
  const test = matcherTest();

  const button = () => {
    // 判定ボタンクリックで判定を行う
    const handleClick = () => {
      const judge = useJudgment({test: test[testNum], userAnswer});
      setJudge(judge);
    };

    // 次へボタンで次の問題へ進む(正解時のみ)
    const next = () => {
      setJudge(null);
      if (testNum < test.length && judge === true) {
        setTestNum(testNum + 1);
      }
    };

    if (judge === true) {
      return <Button children="次へ" buttonFn={next} style="btn-outline btn-secondary" />;
    } else {
      return <Button children="判定" buttonFn={handleClick} />;
    }
  };

  const result = () => {
    if (judge === null) {
      return '';
    } else if (judge === true) {
      return '正解！素晴らしい！';
    } else if (judge === false) {
      return '不正解！もう一度挑戦してみよう！';
    }
  };

  // 初回レンダリング時はカウントを0にリセット
  useEffect(() => {
    setTestNum(0);
  }, []);

  // 再入力時は判定をリセット
  useEffect(() => {
    setJudge(null);
  }, [userAnswer]);

  return (
    <div className="Matcher_test">
      <div className="max-w-full">
        <h1 className="border-l-8 border-secondary pl-3 bg-neutral text-white px-2 w-3/5">確認テスト</h1>
        <p className="my-5">各問題の要件を満たせるように、適切な記述を入力してください。</p>
        <Test test={test[testNum]} onChangeAnswer={(val) => setUserAnswer(val)} key={testNum} />
      </div>
      <div className="flex justify-end">
        <p className={`mr-3 my-auto font-bold ${judge ? 'text-red-600' : 'text-primary'}`}>{result()}</p>
        {button()}
      </div>
      <Step length={test.length} target={testNum} />
    </div>
  );
}
