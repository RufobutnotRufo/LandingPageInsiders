import "./Footer.scss";
import logo from "../header/Logo.svg";
import facebook from "../mainContent/facebook.svg";
import linkedIn from "../mainContent/linkind.svg";
import twitter from "../mainContent/twitter.svg";
import { footerMenuRender } from "../types/Types";
import { footerLinks } from "../types/Types";

const Footer: React.FC = () => {
  const footerMenuRender: footerMenuRender[] = [
    { elem: "Home" },
    { elem: "About" },
    { elem: "Services" },
    { elem: "Projects" },
    { elem: "Testimonials" },
    { elem: "Contact Us" },
  ];

  const links: footerLinks[] = [
    { img: facebook, alt: "Facebook" },
    { img: linkedIn, alt: "LinkedIn" },
    { img: twitter, alt: "Twitter" },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-header">
            <img className="footer-logo" src={logo} alt="Logo" />
          </div>

          <div className="footer-nav-menu">
            <ul className="footer-nav-menu-items">
              {footerMenuRender.map((item, index) => (
                <li className="footer-nav-menu-item" key={index}>
                  {item.elem}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-svg-links">
            <ul className="links">
              {links.map((link, index) => (
                <li className="svg-links" key={index}>
                  <img src={link.img} alt={link.alt} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
