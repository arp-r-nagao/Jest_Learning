'use client';
import {Button} from '@/app/components/ui/button';
import {judgment} from '@/app/lessons/easy/matcher/test/judgment';
import {useEffect, useState} from 'react';
import {Question} from './question-format';
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

type Props = {
  test: PropsItem[];
  setJudge: React.Dispatch<React.SetStateAction<boolean | null | undefined>>;
  setTestNum: React.Dispatch<React.SetStateAction<number>>;
  judge: boolean | null | undefined;
  testNum: number;
};

export const TestPage = ({test, setJudge, setTestNum, judge, testNum}: Props) => {
  const [userAnswer, setUserAnswer] = useState<string>('');
  const result = judgment({test: test[testNum], userAnswer});

  // 値再入力時は判定をリセット
  useEffect(() => {
    setJudge(null);
  }, [userAnswer]);

  const button = () => {
    // 判定ボタンクリックで判定を行う
    const handleClick = () => {
      setJudge(result);
    };

    // 次へボタンで次の問題へ進む(正解時のみ)
    const next = () => {
      setJudge(null);
      if (testNum < test.length && judge === true) {
        setTestNum(testNum + 1);
      }
    };

    if (judge === true) {
      return (
        <Button buttonFn={next} style="btn-outline btn-secondary">
          次へ
        </Button>
      );
    } else {
      return <Button buttonFn={handleClick}>判定</Button>;
    }
  };

  const resultMessage = () => {
    if (judge === null) {
      return '';
    } else if (judge === true) {
      return '正解！素晴らしい！';
    } else if (judge === false) {
      return '不正解！もう一度挑戦してみよう！';
    }
  };

  return (
    <div className="Matcher_test">
      <div className="max-w-full">
        <h1 className="border-l-8 border-secondary pl-3 bg-neutral text-white px-2 w-3/5 mb-1 md:mb-2">確認テスト</h1>
        <p className="mb-5 md:mb-8">各問題の要件を満たせるように、適切な記述を入力してください。</p>
        <Question test={test[testNum]} onChangeAnswer={(val) => setUserAnswer(val)} key={testNum} />
      </div>
      <div className="flex justify-end">
        <p className={`mr-3 my-auto font-bold ${judge ? 'text-red-600' : 'text-primary'}`}>{resultMessage()}</p>
        {button()}
      </div>
      <div className="flex justify-center mt-5 md:mt-8">
        <Step length={test.length} target={testNum} />
      </div>
    </div>
  );
};
