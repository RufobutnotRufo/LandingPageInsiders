import "./OurServices.scss";
import svg1 from "./ourServicesSvg/1.svg";
import svg2 from "./ourServicesSvg/2.svg";
import svg3 from "./ourServicesSvg/3.svg";
import svg4 from "./ourServicesSvg/4.svg";

interface Service {
  imgSrc: string;
  skillName: string;
  skillText: string;
}

const services: Service[] = [
  {
    imgSrc: svg1,
    skillName: "UI/UX",
    skillText: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
  },
  {
    imgSrc: svg2,
    skillName: "Web Design",
    skillText: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
  },
  {
    imgSrc: svg3,
    skillName: "App Design",
    skillText: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
  },
  {
    imgSrc: svg4,
    skillName: "Graphic Design",
    skillText: "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="our-services">
      <div className="container">
        <div className="our-services-inner">
          <h4 className="services-intro">Services</h4>
          <div className="services-intro-text-content">
            <p className="services-intro-text-content-text">
              Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
            </p>
          </div>
        </div>

        <div className="our-services-blocks">
          {services.map((service, index) => (
            <div className="our-service-block" key={index}>
              <div>
                <img
                  src={service.imgSrc}
                  alt="our-service-svg"
                  className="our-service-svg"
                />
              </div>
              <p className="our-services-blocks-skill-name">{service.skillName}</p>
              <p className="our-services-blocks-skill-text">{service.skillText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
