'use client';
import {easyLessonSummary, normalLessonSummary} from '@/lib/card-contents';
import {easy} from './easy';
import {openModal, modalContent} from '../../lib/lesson-summary-modal';
import {normal} from './normal';

export default function LessonsPage() {
  // 各レッスンの概要を表示
  const easyContent = easy({easyLessonSummary, openModal, modalContent});
  const normalContent = normal({normalLessonSummary, openModal, modalContent});

  return (
    <div className="lessons">
      <div className="md:grid md:grid-cols-2 md:items-stretch">
        <div className="my-5 md:mx-5">{easyContent}</div>
        <div className="my-5 md:mx-5"> {normalContent}</div>
      </div>
    </div>
  );
}
