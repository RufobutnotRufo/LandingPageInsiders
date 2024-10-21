import "./Header.scss";
import logo from "./Logo.svg";
import { NavMenuTypes } from "../types/Types";
import { useTheme } from "../Context";

const Header: React.FC = () => {
  const { toggleTheme } = useTheme();

  const navItems: NavMenuTypes[] = [
    { name: "Home", link: "#", id: 1 },
    { name: "About", link: "#", id: 2 },
    { name: "Services", link: "#", id: 3 },
    { name: "Projects", link: "#", id: 4 },
    { name: "Testimonials", link: "#", id: 5 },
    { name: "Contact Us", link: "#", id: 6 },
  ];

  return (
    <div className="container">
      <div className="header-inner">
        <div className="header-logo">
        <p className="logo-name"><span className="logo-style">M</span>uhammad</p>
        </div>

        <div className="header-nav-menu">
          <ul className="header-nav-menu-items">
            {navItems.map((item) => (
              <li className="header-nav-menu-item" key={item.id}>
                <a className="header-nav-menu-link" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="header-nav-menu-item">
              <button className="header-nav-menu-link-btn">Download CV</button>
            </li>
            <li className="header-nav-menu-item">
              <button
                className="header-nav-menu-link-btn"
                onClick={toggleTheme}
              >
                Переключить тему
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
