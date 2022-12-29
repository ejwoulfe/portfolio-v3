import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./simple-slider.scss";
import { bdoProfitProject } from "./project-objects/bdoprofit";
import { favoriteMoviesProject } from "./project-objects/favorite-movies";
import { ffxivccProject } from "./project-objects/ffxivcc";
import { lolChampionsProject } from "./project-objects/lol-champions";
import youtube from "../../assets/icons/svg/youtube.svg";
import desktop from "../../assets/icons/svg/desktop.svg";
import github from "../../assets/icons/svg/github.svg";

import { Project } from "../../interfaces/project";
import { useState } from "react";

export default function SimpleSlider() {
  const [currentProject, setCurrentProject] = useState<Project>(ffxivccProject);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const projectsArr = [ffxivccProject, lolChampionsProject, bdoProfitProject, favoriteMoviesProject];

  function createProjectsContainer(projects: Array<Project>) {
    return projects.map((project, index) => {
      return (
        <div>
          <img src={project.image} alt="project" />
        </div>
      );
    });
  }
  function createProjectContainer(project: Project) {
    return (
      <div>
        <h3>{project.name}</h3>
        <ul className="project-links">
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=" + project.videoURL);
            }}>
            <img src={youtube} alt="youtube icon" />
            <span>Demo</span>
          </li>
          <li
            onClick={() => {
              window.open(project.liveURL);
            }}>
            <img src={desktop} alt="website icon" />
            <span>Website</span>
          </li>

          <li
            onClick={() => {
              window.open(project.githubURL);
            }}>
            <img src={github} alt="github icon" />
            <span>GitHub</span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div>{createProjectContainer(currentProject)}</div>
      <Slider {...settings}>{createProjectsContainer(projectsArr)}</Slider>
    </div>
  );
}
