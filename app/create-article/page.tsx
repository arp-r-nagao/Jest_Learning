'use client';

import dynamic from 'next/dynamic';
const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/layout/markdown-editor').then((mod) => mod.MarkdownEditor),
  {
    ssr: false,
  }
);

export default function CreateArticle() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
