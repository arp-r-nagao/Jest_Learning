'use client';
import {useEffect, useState} from 'react';
import {TestPage} from '@/lib/test-page-format';
import {asyncTest} from './async';

export default function AsyncTestPage() {
  const [testNum, setTestNum] = useState(0);
  const [judge, setJudge] = useState<boolean | null>();
  const test = asyncTest();

  // 初回レンダリング時はカウントを0にリセット
  useEffect(() => {
    setTestNum(0);
  }, []);

  const currentLesson = 'Async';
  const nextLesson = 'Setup&Teardown';

  return <TestPage test={test} setJudge={setJudge} setTestNum={setTestNum} judge={judge} testNum={testNum} />;
}
