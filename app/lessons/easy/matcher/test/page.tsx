'use client';
import {matcherTest} from './matcher';
import {useEffect, useState} from 'react';
import {TestPage} from '@/lib/test-page-format';

export default function MatcherTestPage() {
  const [testNum, setTestNum] = useState(0);
  const [judge, setJudge] = useState<boolean | null>();
  const test = matcherTest();

  // 初回レンダリング時はカウントを0にリセット
  useEffect(() => {
    setTestNum(0);
  }, []);

  const currentLesson = 'Matcher';
  const nextLesson = 'Async';

  return <TestPage test={test} setJudge={setJudge} setTestNum={setTestNum} judge={judge} testNum={testNum} />;
}
