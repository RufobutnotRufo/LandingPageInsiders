import "./ProjectShow.scss";
import Card from "./Card-1.svg";

const ProjectShow = () => {
  return (
    <section className="projects-show">
      <div className="container">
        <div className="projects-show-inner">
          <div className="user-skills">
            <ul className="user-skills-block">
              <li className="user-skills-block-item">All<a></a></li>
              <li className="user-skills-block-item">UI UX<a></a></li>
              <li className="user-skills-block-item">Website Design<a></a></li>
              <li className="user-skills-block-item">App Design<a></a></li>
              <li className="user-skills-block-item">Graphic Design <a></a></li>
            </ul>
          </div>
          <div className="projects-show-project">
            <div className="project-show-item-svg">
              <a href="@">
                {" "}
                <img className="project-show-svg-link" src={Card}/>
              </a>
            </div>
            <div className="project-show-item-svg">
              <a href="@">
                {" "}
                <img className="project-show-svg-link" src={Card}/>
              </a>
            </div>
            <div className="project-show-item-svg">
              <a href="@">
                {" "}
                <img className="project-show-svg-link" src={Card}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShow;
