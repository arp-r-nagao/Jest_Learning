'use client';
import {JSX} from 'react';
import {Button} from '../components/ui/button';
import {Card} from '../components/ui/card';
import {Modal} from '../components/ui/modal';
import {normalLessonLists} from '@/lib/modal-contents';
import {LessonListProps} from '../../lib/lesson-summary-modal';

type Props = {
  normalLessonSummary: React.ReactNode;
  openModal: () => void;
  modalContent: (easyLessonList: LessonListProps[], level: string) => JSX.Element;
};

export const normal = ({normalLessonSummary, openModal, modalContent}: Props) => {
  const normalContents = normalLessonLists;
  return (
    <div className="easy">
      <Card
        title="中級編"
        content={normalLessonSummary}
        button={
          <Button style="text-primary w-28" buttonFn={openModal}>
            Start
          </Button>
        }
      />
      <Modal modalContent={modalContent(normalContents, '中級編')} />
    </div>
  );
};
