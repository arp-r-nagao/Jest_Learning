'use client';
import {easy} from './easy';
import {cardContent, openModal, modalContent} from './easyContents';
import {normal} from './normal';

export default function LessonPage() {
  // 各レッスンの概要を表示
  const easyContent = easy({cardContent, openModal, modalContent});
  const normalContent = normal();

  return (
    <div className="lessons">
      <div className="md:grid md:grid-cols-2 md:items-stretch">
        <div className="my-5 md:mx-5">{easyContent}</div>
        <div className="my-5 md:mx-5"> {normalContent}</div>
      </div>
    </div>
  );
}
