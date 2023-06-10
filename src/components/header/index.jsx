import SearchForm from "../searchForm";
import { Button } from "../Button";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModalState,
} from "../../redux/features/modal/modalSlice";
export default function Header() {
  const user = localStorage.getItem("user");
  const location = useLocation();
  const likedTours = useSelector((state) => state.tours.likedTours);
  const dispatch = useDispatch();
  function showFavorites() {
    if (likedTours.length <= 0) return;
    dispatch(toggleModalState());
  }
  return (
    <header className="main-header ">
      <div className="container main-header__container">
        <Link to={"/"} className="main-header__logo">
          <img
            src="./images/icons/header/header-logo.svg"
            width="29"
            height="32"
            alt="logo"
            className="main-header__logo-icon"
          />
          <span className="main-header__logo-name">OpenWorld</span>
        </Link>
        {user ? (
          location.pathname !== "/login" &&
          location.pathname !== "/register" &&
          location.pathname !== "/forgot" && (
            <Link to="/login">
              <Button
                text="Log in"
                border="2px solid #FEFEFE"
                color="#ffffff"
                backgroundColor="transparent"
                padding="4px 20px"
              />
            </Link>
          )
        ) : (
          <>
            <div className="main-header__nav">
              <Link
                to="/"
                className="main-header__nav-link main-header__nav-link--accent"
              >
                Home
              </Link>
              <Link to={'/mytrips'} className="main-header__nav-link">
                My trips
              </Link>
            </div>
            <div className="main-header__user-menu user-menu">
              <SearchForm />
              <div className="user-menu__account">
                <Link
                  className="user-menu__account-link"
                  onClick={showFavorites}
                >
                  <img
                    src="./images/icons/header/favorites-icon.svg"
                    className="user-menu__favorites-icon"
                    alt=""
                  />
                  {likedTours.length ? (
                    <span className="favorites-count">{likedTours.length}</span>
                  ) : null}
                </Link>
                <Link className="user-menu__account-link">
                  <img
                    src="./images/icons/header/account-icon.svg"
                    className="user-menu__account-icon"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </>
        )}
        <BurgerMenu />
      </div>
    </header>
  );
}
