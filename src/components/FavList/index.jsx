import { useDispatch, useSelector } from "react-redux";
import FavItem from "./favItem.jsx";
import { useEffect } from "react";
import { toggleModalState } from "../../redux/features/modal/modalSlice.js";

export default function FavList() {
  const likedTours = useSelector((state) => state.tours.likedTours);
  const isOpen = useSelector((state) => state.favModal.modalIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    if (likedTours.length <= 0 && isOpen) {
      dispatch(toggleModalState());
    }
  }, [likedTours, dispatch, isOpen]);
  return (
    <ul className="fav-list">
      {likedTours.map((tour) => {
        return <FavItem {...tour} />;
      })}
    </ul>
  );
}
