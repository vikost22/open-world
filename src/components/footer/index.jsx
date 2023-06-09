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
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                About us
              </a>
            </li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                Search
              </a>
            </li>
          </ul>
          <ul className="main-footer__links">
            <li className="main-footer__links-title">HELPFUL LINKS</li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                Tours
              </a>
            </li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                Supports
              </a>
            </li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                Privecy
              </a>
            </li>
          </ul>
          <ul className="main-footer__links">
            <li className="main-footer__links-title">CONTACTS</li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                +491605633778
              </a>
            </li>
            <li className="main-footer__link-item">
              <a href="#" className="main-footer__link">
                openworld@mail.com{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="social-networks">
          <a href="#" className="social-networks__link">
            <img src="./images/icons/footer/twitter-logo.svg" alt="twitt" className="social-networks__icon" />
          </a>
          <a href="#" className="social-networks__link">
            <img src="./images/icons/footer/facebook-logo.svg" alt="facebook" className="social-networks__icon" />
          </a>
          <a href="#" className="social-networks__link">
            <img src="./images/icons/footer/insta-logo.svg" alt="insta" className="social-networks__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
