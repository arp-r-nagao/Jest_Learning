import Link from 'next/link';

// 初級編の概要
export const cardContent = (
  <>
    <span className="font-bold underline mb-2">初めて学習する方はこちらがおすすめ</span>
    <br />
    ドキュメントを読んで理解を深め、
    <br />
    確認テストに挑戦しましょう！
  </>
);

// 詳細モーダルの表示
export const openModal = () => {
  const modal = document.getElementById('normal-lessons') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
};

export const modalContent = (
  <div className="easy-modal font-bold">
    <div className="bg-secondary rounded w-20 h-8 flex items-center justify-center mb-2">
      <span className="text-white">初級編</span>
    </div>
    <p className="text-neutral mt-5 text-lg">最初から取り組む▼</p>
    <Link href="/lessons/easy/matcher" className="text-neutral underline ml-3">
      All
    </Link>
    <p className="text-neutral mt-5 text-lg">項目を選んで取り組む▼</p>
    <div className="my-1 ml-3">
      <Link href="/lessons/easy/matcher" className="text-neutral underline">
        Matcher(マッチャーを使用する)
      </Link>
    </div>
    <div className="mb-1 ml-3">
      <Link href="/lessons/easy/async" className="text-neutral underline">
        Async(非同期コードのテスト)
      </Link>
    </div>
    <div className="mb-1 ml-3">
      <Link href="/lessons/easy/setup&teardown" className="text-neutral underline">
        Setup and Teardown(テストの前後処理)
      </Link>
    </div>
    <div className="mb-1 ml-3">
      <Link href="/lessons/easy/mockfunction" className="text-neutral underline">
        MockFunction(モック関数)
      </Link>
    </div>
  </div>
);
