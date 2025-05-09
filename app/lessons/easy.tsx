'use client';
import {JSX} from 'react';
import {Button} from '../components/ui/button';
import {CardSecondary} from '../components/ui/card';
import {Modal} from '../components/ui/modal';
import {easyLessonLists} from '@/lib/modal-contents';
import {LessonListProps} from '../../lib/lesson-summary-modal';

type Props = {
  easyLessonSummary: React.ReactNode;
  openModal: () => void;
  modalContent: (easyLessonList: LessonListProps[], level: string) => JSX.Element;
};

export const easy = ({easyLessonSummary, openModal, modalContent}: Props) => {
  const easyContents = easyLessonLists;
  return (
    <div className="easy">
      <CardSecondary
        title="初級編"
        content={easyLessonSummary}
        button={
          <Button style="text-primary w-28" buttonFn={openModal}>
            Start
          </Button>
        }
      />
      <Modal modalContent={modalContent(easyContents, '初級編')} />
    </div>
  );
};
