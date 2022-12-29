import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./simple-slider.scss";
import { bdoProfitProject } from "../projects/project-objects/bdoprofit";
import { favoriteMoviesProject } from "../projects/project-objects/favorite-movies";
import { ffxivccProject } from "../projects/project-objects/ffxivcc";
import { lolChampionsProject } from "../projects/project-objects/lol-champions";
import youtube from "../../assets/icons/svg/youtube.svg";
import desktop from "../../assets/icons/svg/desktop.svg";
import github from "../../assets/icons/svg/github.svg";

import { Project } from "../../interfaces/project";
import { useState } from "react";

export default function SimpleSlider() {
  const projectsArr = [ffxivccProject, lolChampionsProject, bdoProfitProject, favoriteMoviesProject];
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentProjectIndex,
    beforeChange: setNewIndex,
  };

  function setNewIndex(oldIndex: number, newIndex: number) {
    setCurrentProjectIndex(newIndex);
  }

  function createSliderImages(projects: Array<Project>) {
    return projects.map((project, index) => {
      return (
        <div key={"project-image-" + index}>
          <img src={project.image} alt="project" />
        </div>
      );
    });
  }

  function createProjectContainer(currentProject: Project) {
    return (
      <div>
        <h3>{currentProject.name}</h3>
        <ul className="project-links">
          <li
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=" + currentProject.videoURL);
            }}>
            <img src={youtube} alt="youtube icon" />
            <span>Demo</span>
          </li>
          <li
            onClick={() => {
              window.open(currentProject.liveURL);
            }}>
            <img src={desktop} alt="website icon" />
            <span>Website</span>
          </li>

          <li
            onClick={() => {
              window.open(currentProject.githubURL);
            }}>
            <img src={github} alt="github icon" />
            <span>GitHub</span>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="project-info">
      <div>{createProjectContainer(projectsArr[currentProjectIndex])}</div>
      <Slider {...settings}>{createSliderImages(projectsArr)}</Slider>
      <div>{projectsArr[currentProjectIndex].description}</div>
    </div>
  );
}
