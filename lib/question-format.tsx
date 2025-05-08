'use client';
import {PropsItem} from '@/app/matcher/test/page';
import {useEffect, useState} from 'react';

export type TestProps = {
  test: PropsItem;
  onChangeAnswer?: (value: string) => void;
};

export const Question = ({test, onChangeAnswer}: TestProps) => {
  const [value, setValue] = useState<string>('');
  const {title, question, codes} = test;

  useEffect(() => {
    setValue('');
  }, [test]);

  // 入力された値を取得して親コンポーネントに返す
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChangeAnswer) {
      onChangeAnswer(newValue);
    }
  };

  const rendered = [];
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i];

    if (code.code === 'editor') {
      const prev = codes[i - 1];
      const next = codes[i + 1];
      rendered.push(
        <div key={i} className="flex items-center my-2">
          {prev && (
            <pre>
              <code>{prev.code}</code>
            </pre>
          )}
          <div>
            <input type="text" className="input input-accent input-sm text-neutral font-bold" onChange={handleChange} />
          </div>
          {next && (
            <pre>
              <code>{next.code}</code>
            </pre>
          )}
        </div>
      );
      i += 1;
    } else if (codes[i + 1]?.code === 'editor' && i !== 0) {
      continue;
    } else {
      rendered.push(
        <pre key={i} className="whitespace-pre-wrap">
          <code>{code.code}</code>
        </pre>
      );
    }
  }

  return (
    <div className="mb-8">
      <p className="font-bold text-white text-center bg-gray-600 rounded w-fit px-2 py-0.5 md:mt-10">{title}</p>
      <p className="text-sm text-gray-600 my-2 md:text-md">{question}</p>
      <div className="mockup-code">{rendered}</div>
    </div>
  );
};
