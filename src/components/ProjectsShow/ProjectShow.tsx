import "./ProjectShow.scss";
import Card from "./Card-1.svg";
import { useState } from "react";

const ProjectShow = () => {
  const skills = [
    { name: "All", link: "#" },
    { name: "UI UX", link: "#" },
    { name: "Website Design", link: "#" },
    { name: "App Design", link: "#" },
    { name: "Graphic Design", link: "#" },
  ];

  const projects = [
    { id: 0, link: "", image: Card, backgroundColor: "red" },
    { id: 1, link: "", image: Card, backgroundColor: "blue" },
    { id: 2, link: "", image: Card, backgroundColor: "green" },
  ];

  const [choicedElem, setChoicedElem] = useState(projects[0]);

  const ChangeModalWindow = (index: number) => {
    if (index >= 0 && index < projects.length) {
      setChoicedElem(projects[index]);
    }
  };

  return (
    <section className="projects-show">
      <div className="container">
        <div className="projects-show-inner">
          <div className="user-skills">
            <ul className="user-skills-block">
              {skills.map((item, index) => (
                <li
                  className="user-skills-block-item"
                  key={index}
                  onClick={() => ChangeModalWindow(index % projects.length)}
                >
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="projects-show-project">
            <div
              className=""
              style={{ backgroundColor: choicedElem.backgroundColor }}
            >
              <a href={choicedElem.link}>
                <img
                  className="project-show-svg-link"
                  src={choicedElem.image}
                  alt="Project"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShow;
