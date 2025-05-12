'use client';
import {useEffect, useState} from 'react';
import {PropsItem} from './judgment';

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

  const editor = [];
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i];

    // editorの場合は前後のコードと並べて表示する
    if (code.code === 'editor') {
      const prev = codes[i - 1];
      const next = codes[i + 1];
      editor.push(
        <div key={i} className="flex items-center my-2">
          {prev && (
            <pre>
              <code>{prev.code}</code>
            </pre>
          )}
          <input type="text" className="input input-accent input-sm text-neutral font-bold" onChange={handleChange} />
          {next && (
            <pre>
              <code>{next.code}</code>
            </pre>
          )}
        </div>
      );
      i += 1;
    } else if (code.code === 'editorStartSentence') {
      // editorStartSentenceの場合は後ろのコードと並べて表示する
      const next = codes[i + 1];
      editor.push(
        <div key={i} className="flex items-center my-2">
          <input
            type="text"
            className="input input-accent input-sm text-neutral font-bold ml-6"
            onChange={handleChange}
          />
          {next && (
            <pre>
              <code>{next.code}</code>
            </pre>
          )}
        </div>
      );
      i += 1;
    } else if (code.code === 'editorEndSentence') {
      // editorStartSentenceの場合は前のコードと並べて表示する
      const prev = codes[i - 1];
      editor.push(
        <div key={i} className="flex items-center my-2">
          {prev && (
            <pre>
              <code>{prev.code}</code>
            </pre>
          )}
          <input type="text" className="input input-accent input-sm text-neutral font-bold" onChange={handleChange} />
        </div>
      );
      i += 1;
    } else {
      editor.push(
        <pre key={i} className="whitespace-pre-wrap">
          <code>{code.code}</code>
        </pre>
      );
    }
  }

  return (
    <div className="mb-4">
      <p className="font-bold text-white text-center bg-gray-600 rounded w-fit px-2 py-0.5 md:mt-12">{title}</p>
      <p className="text-sm text-gray-600 mt-1 md:text-md">{question}</p>
      <div className="mockup-code mt-1 md:mt-3">{editor}</div>
    </div>
  );
};
