import "./MainContent.scss";

import Person from "../mainContent/person-svg.svg";
import Twitter from "../mainContent/twitter.svg";
import Facebook from "./facebook.svg";
import linKIdim from "./linkind.svg";

const MainContent: React.FC = () => {
  return (
    <section className="mainContent">
      <div className="container">
        <div className="mainContent-inner">
          <div className="main-content-info">
            <div className="main-content-info-inner">
              <p className="main-content-info-inne-intro">Hi I am</p>
              <p className="main-content-info-inne-introduction">
                Muhammad Bin Jameel
              </p>
              <h1 className="main-content-info-inne-intro-jobs">UI & UX</h1>
              <h4 className="main-content-info-inne-intro-jobs-header">
                Designer
              </h4>
              <p className="introduction-text">
                Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
                blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
                tellus consectetur lacus
              </p>
              <button className="hire-me-btn">Hire Me</button>
            </div>
          </div>

          <div className="mainContent-inner-person-intro-svg">
            <div className="mainContent-inner-person-intro-svg-intro">
              <div className="person-img">
                <img className="person-svg" alt="person-img" src={Person} />
              </div>
              <div className="links-nav-menu">
                <ul className="links-nav">
                  <li>
                    <a>
                      <img src={Facebook} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={Twitter} />
                    </a>
                  </li>
                  <li>
                    <a>
                      <img src={linKIdim} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
