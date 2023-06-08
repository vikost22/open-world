import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleModalState } from "../../redux/features/modal/modalSlice";

export default function BurgerMenu() {
  const [btnActive, setBtnActive] = useState(false);
  function changeState() {
    setBtnActive(!btnActive);
  }
  const likedTours = useSelector((state) => state.tours.likedTours);
  const dispatch = useDispatch();
  function showFavorites() {
    if (likedTours.length <= 0) return;
    dispatch(toggleModalState());
  }
  return (
    <>
      <button
        style={{ height: 19 + "px" }}
        onClick={changeState}
        className="burger__btn"
      >
        <span
          className={`burger__btn-line ${
            btnActive ? "burger__btn-line--active" : ""
          }`}
        ></span>
      </button>
      <ul className={`burger__list ${btnActive ? "burger__list--active" : ""}`}>
        <li>
          <Link to="/" className="burger__item" onClick={changeState}>
            Home
          </Link>
        </li>
        <li>
          <Link className="burger__item" onClick={changeState}>
            My trips
          </Link>
        </li>
        <li>
          <Link className="burger__item" onClick={showFavorites}>Favorites</Link>
        </li>
        <li>
          <Link className="burger__item" onClick={changeState}>
            Account
          </Link>
        </li>
      </ul>
    </>
  );
}
