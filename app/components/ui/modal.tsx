type Props = {
  modalContent: React.ReactNode;
};
export const Modal = ({modalContent}: Props) => {
  return (
    <div className="modal">
      <dialog id="lessons" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {modalContent}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-secondary text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
