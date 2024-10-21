import "./AboutMeContens.scss";

import skillBar1 from "../aboutMeContent/skillsImg/Rectangle 6 (1).svg";
import skillBar2 from "../aboutMeContent/skillsImg/Rectangle 6 (2).svg";
import skillBar3 from "../aboutMeContent/skillsImg/Rectangle 6 (3).svg";
import skillBar4 from "../aboutMeContent/skillsImg/Rectangle 6 (4).svg";
import skillBarCircle from "../aboutMeContent/skillsImg/Ellipse 9 (1).svg";

import AboutMeSvg from "./person-about-me.svg";
const AboutMeContens: React.FC = () => {
  return (
    <section className="about-me-content">
      <div className="container">
        <div className="about-me-content-inner">
          <div className="person-svg">
            <img className="person-svg" alt="person-svg" src={AboutMeSvg} />
          </div>

          <div className="about-me-content-text">
            <h1 className="about-me-content-text-content">About Me </h1>
            <p className="about-me-content-text">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis nisi ante. Aliquet ornare
              tellus consectetur lacus
            </p>

            <div className="skills-content">
              <ul className="skills-content-menu">
                <li className="about-me-content-text-content-item">
                  <p className="skill-name">UX</p>
                  <div className="skills-factor">
                    <img src={skillBar1} />
                    <span className="skills">
                      <img
                        src={skillBarCircle}
                        className="circle-svg"
                        alt="skill-bar-circle"
                      />
                    </span>
                  </div>
                </li>

                <li className="about-me-content-text-content-item">
                  <p className="skill-name">Website Design</p>
                  <div className="skills-factor">
                    <img src={skillBar2} />
                    <span className="skills">
                      <img
                        src={skillBarCircle}
                        className="circle-svg"
                        alt="skill-bar-circle"
                      />
                    </span>
                  </div>
                </li>

                <li className="about-me-content-text-content-item">
                  <p className="skill-name">App Design </p>
                  <div className="skills-factor">
                    <img src={skillBar3} />
                    <span className="skills">
                      <img
                        src={skillBarCircle}
                        className="circle-svg"
                        alt="skill-bar-circle"
                      />
                    </span>
                  </div>
                </li>

                <li className="about-me-content-text-content-item">
                  <p className="skill-name">Graphic Design </p>
                  <div className="skills-factor">
                    <img src={skillBar4} />
                    <span className="skills">
                      <img
                        src={skillBarCircle}
                        className="circle-svg"
                        alt="skill-bar-circle"
                      />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeContens;
