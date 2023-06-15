import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleModalState } from "../../redux/features/modal/modalSlice";

export default function BurgerMenu() {
  const user = localStorage.getItem("user");
  const [btnActive, setBtnActive] = useState(false);
  const menuRef = useRef(null);

  function changeState() {
    setBtnActive(!btnActive);
  }

  function handleLogout() {
    localStorage.setItem("user", "");
    setBtnActive(!btnActive);
  }

  const likedTours = useSelector((state) => state.tours.likedTours);
  const dispatch = useDispatch();

  function showFavorites() {
    if (likedTours.length <= 0) return;
    dispatch(toggleModalState());
  }

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setBtnActive(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        style={{ height: 19 + "px" }}
        onClick={(event) => {
          event.stopPropagation();
          changeState();
        }}
        className="burger__btn">
        <span
          className={`burger__btn-line ${
            btnActive ? "burger__btn-line--active" : ""
          }`}></span>
      </button>
      <ul
        ref={menuRef}
        className={`burger__list ${btnActive ? "burger__list--active" : ""}`}>
        <li ref={menuRef}>
          <Link to="/" className="burger__item" onClick={changeState}>
            Home
          </Link>
        </li>
        <li ref={menuRef}>
          <Link className="burger__item" onClick={changeState}>
            My trips
          </Link>
        </li>
        <li ref={menuRef}>
          <Link className="burger__item" onClick={showFavorites}>
            Favorites
          </Link>
        </li>
        <li ref={menuRef}>
          <Link className="burger__item" onClick={changeState}>
            Account
          </Link>
        </li>
        <li ref={menuRef}>
          {user ? (
            <Link className="burger__item" onClick={handleLogout}>
              Log out
            </Link>
          ) : (
            <Link className="burger__item" to="/login" onClick={changeState}>
              Log in
            </Link>
          )}
        </li>
      </ul>
    </>
  );
}
