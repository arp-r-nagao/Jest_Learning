'use client';
import Link from 'next/link';
import {easyLessonLists} from './modal-contents';
import {usePathname} from 'next/navigation';

export const LessonClearModal = () => {
  // 初級編のリストと現在表示しているページを取得
  const easyLessons = easyLessonLists;
  const pathName = usePathname();
  // 現在のpathから/testを除く
  const currentLink = pathName.match(/^\/lessons\/easy\/[^/]+/)?.toString();
  // 初級編リストから現在のpathと一致するもののタイトルを取得する
  const current = easyLessons.map((lesson) => {
    if (lesson.link === currentLink) {
      return lesson.title;
    }
  });

  // 次のレッスンのインデックス番号を取得
  const nextIndex = easyLessons.findIndex((lesson) => lesson.link === currentLink) + 1;
  const nextLessonTitle = easyLessons[nextIndex].title;
  const nextLessonLink = easyLessons[nextIndex].link;

  return (
    <div className="text-neutral font-bold">
      <p className="text-lg">
        {current}合格🎉
        <br />
        おめでとうございます✨
      </p>
      <p className="mt-5 text-lg md:mt-10">次に進む</p>
      <Link href={nextLessonLink} className="underline ml-3">
        {nextLessonTitle}
      </Link>
    </div>
  );
};
