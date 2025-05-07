'use client';
import SimpleMde from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import {useState} from 'react';
import {Button} from '../ui/button';
import {Title} from '../ui/title';

export const MarkdownEditor = () => {
  const [markdownValue, setMarkdownValue] = useState('');

  const onChange = (value: string) => {
    setMarkdownValue(value);
  };

  return (
    <div className="py-5">
      <Title>新規記事作成</Title>
      <div className="mt-5">
        <SimpleMde value={markdownValue} onChange={onChange} />
        <div className="flex justify-end">
          <Button children="保存" />
        </div>
      </div>
    </div>
  );
};
