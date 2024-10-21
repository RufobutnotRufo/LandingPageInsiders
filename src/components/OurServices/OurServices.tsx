import "./OurServices.scss";
import svg1 from "./ourServicesSvg/1.svg";
import svg2 from "./ourServicesSvg/2.svg";
import svg3 from "./ourServicesSvg/3.svg";
import svg4 from "./ourServicesSvg/4.svg";

const OurServices: React.FC = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="our-services-inner">
          <h4 className="services-intro">Services</h4>
          <div className="services-intro-text-content">
            <p className="services-intro-text-content-text">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis
              blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
            </p>
          </div>
        </div>

        <div className="our-services-blocks">
          <div className="our-service-block">
            <div>
              <img
                src={svg1}
                alt="our-service-svg"
                className="our-service-svg"
              />
            </div>
            <p className="our-services-blocks-skill-name">UI/UX</p>
            <p className="our-services-blocks-skill-text">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh
            </p>
          </div>

          <div className="our-service-block">
            <div>
              <img
                src={svg2}
                alt="our-service-svg"
                className="our-service-svg"
              />
            </div>
            <p className="our-services-blocks-skill-name">Web Design </p>
            <p className="our-services-blocks-skill-text">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh
            </p>
          </div>

          <div className="our-service-block">
            <div>
              <img
                src={svg3}
                alt="our-service-svg"
                className="our-service-svg"
              />
            </div>
            <p className="our-services-blocks-skill-name">App Design</p>
            <p className="our-services-blocks-skill-text">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh
            </p>
          </div>

          <div className="our-service-block">
            <div className="our-service-block-svg">
              <img
                src={svg4}
                alt="our-service-svg"
                className="our-service-svg"
              />
            </div>
            <p className="our-services-blocks-skill-name">Graphic Design </p>
            <p className="our-services-blocks-skill-text">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
