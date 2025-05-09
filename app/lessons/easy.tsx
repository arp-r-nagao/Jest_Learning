'use client';
import {Button} from '../components/ui/button';
import {CardSecondary} from '../components/ui/card';
import {Modal} from '../components/ui/modal';

type Props = {
  cardContent: React.ReactNode;
  openModal: () => void;
  modalContent: React.ReactNode;
};

export const easy = ({cardContent, openModal, modalContent}: Props) => {
  return (
    <div className="easy">
      <CardSecondary
        title="初級編"
        content={cardContent}
        button={
          <Button style="text-primary w-28" buttonFn={openModal}>
            Start
          </Button>
        }
      />
      <Modal modalContent={modalContent} />
    </div>
  );
};
