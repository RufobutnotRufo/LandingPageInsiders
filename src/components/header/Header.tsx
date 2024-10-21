// import Logo from "../header/Logo.svg";
import './Header.scss';
const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="header-inner">
        
        <div className="header-logo">
          <img className="header-logo-svg" alt="logo" />
        </div>

        <div className="header-nav-menu">
          <ul className="header-nav-menu-items">
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">Home</a>
            </li>
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">About</a>
            </li>
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">Services</a>
            </li>
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">Projects</a>
            </li>
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">Testimonials</a>
            </li>
            <li className="header-nav-menu-item">
              <a className="header-nav-menu-link">Contact Us</a>
            </li>
            <li className="header-nav-menu-item">
              <button className="header-nav-menu-link-btn">Download CV</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
