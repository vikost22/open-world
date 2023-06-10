import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container main-footer__container">
        <div className="main-footer__logo">
          <img
            src="./images/icons/header/header-logo.svg"
            width="26"
            height="28"
            alt="logo"
            className="main-footer__logo-icon"
          />
          <span className="main-footer__logo-name">OpenWorld</span>
        </div>
        <div className="main-footer__footer-links">
          <ul className="main-footer__links">
            <li className="main-footer__links-title">INFORMATION</li>
            <Link className="main-footer__link">About us</Link>
            <Link className="main-footer__link">Search</Link>
          </ul>
          <ul className="main-footer__links">
            <li className="main-footer__links-title">HELPFUL LINKS</li>
            <Link className="main-footer__link">Tours</Link>
            <Link className="main-footer__link">Supports</Link>
            <Link className="main-footer__link">Privecy</Link>
          </ul>
          <ul className="main-footer__links">
            <li className="main-footer__links-title">CONTACTS</li>
            <li className="main-footer__link-item">
              <a href="tel:+491605633778" className="main-footer__link">
                +491605633778
              </a>
            </li>
            <li className="main-footer__link-item">
              <a href="mailto:openworld@mail.com" className="main-footer__link">
                openworld@mail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="social-networks">
          <a href="https://twitter.com/" className="social-networks__link">
            <img
              src="./images/icons/footer/twitter-logo.svg"
              alt="twitt"
              className="social-networks__icon"
            />
          </a>
          <a href="https://www.facebook.com/" className="social-networks__link">
            <img
              src="./images/icons/footer/facebook-logo.svg"
              alt="facebook"
              className="social-networks__icon"
            />
          </a>
          <a href="https://www.instagram.com/" className="social-networks__link">
            <img
              src="./images/icons/footer/insta-logo.svg"
              alt="insta"
              className="social-networks__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
