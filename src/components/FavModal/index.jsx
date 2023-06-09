import { useDispatch, useSelector } from "react-redux";
import { toggleModalState } from "../../redux/features/modal/modalSlice";
import FavList from "../FavList";

export default function FavModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.favModal.modalIsOpen);

  function closeModal(e) {
    if (e.target.closest(".close-btn") || !e.target.closest(".fav-modal")) {
      dispatch(toggleModalState());
    }
  }
  return (
    <div
      className={`modal-back ${isOpen ? "modal-back--open" : ""}`}
      onClick={(e) => closeModal(e)}
    >
      <div className="fav-modal">
        <button className="close-btn">
          <span className="close-line"></span>
        </button>
        <h2 className="fav-modal__title">Liked tours</h2>
        <div className="fav-modal_content">
          <FavList />
        </div>
      </div>
    </div>
  );
}
