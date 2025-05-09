import Link from 'next/link';

export type LessonListProps = {
  title: string;
  link: string;
};

// 詳細モーダルを開くロジック
export const openModal = () => {
  const modal = document.getElementById('lessons') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
};

// モーダルの内容の表示
export const modalContent = (lessonList: LessonListProps[], level: string) => {
  // リストの数分リンクを作成
  const list = () => {
    return lessonList.map((item, index) => {
      const title = item.title;
      const link = item.link;
      return (
        <div className="mb-3 ml-3" key={index}>
          <Link href={link} className="text-neutral underline">
            {title}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="easy-modal font-bold">
      <div className="bg-secondary rounded h-8 flex items-center justify-center mb-2">
        <span className="text-white">{level}</span>
      </div>
      <p className="text-neutral mt-3 text-lg">▼最初から取り組む</p>
      <Link href="/lessons/easy/matcher" className="text-neutral underline ml-3">
        All
      </Link>
      <p className="text-neutral mt-8 text-lg">▼項目を選んで取り組む</p>
      {list()}
    </div>
  );
};
