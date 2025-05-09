'use client';
import {Button} from '../components/ui/button';
import {Card} from '../components/ui/card';
import {Modal} from '../components/ui/modal';

export const normal = () => {
  // 中級編の概要
  const content = (
    <>
      <span className="font-bold underline mb-2">慣れてきたらこちらにチャレンジ💪</span>
      <br />
      問題をひたすら解いて、
      <br />
      知識を定着させましょう！
    </>
  );

  // 詳細モーダルの表示
  const openModal = () => {
    const modal = document.getElementById('normal-lessons') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="normal">
      <Card
        title="中級編"
        content={content}
        button={
          <Button style="text-primary w-28" buttonFn={openModal}>
            Start
          </Button>
        }
      />
      <Modal modalContent={content} />
    </div>
  );
};
