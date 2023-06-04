import { useState } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  const [btnActive, setBtnActive] = useState(false);
  function changeState() {
    setBtnActive(!btnActive);
  }
  return (
    <>
      <button
        className={`burger__btn ${btnActive ? "burger__btn--active" : ""}`}
        onClick={changeState}
      ></button>
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
          <Link className="burger__item">Favorites</Link>
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
