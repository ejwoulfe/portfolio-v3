import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./simple-slider.scss";
import youtube from "../../assets/icons/svg/youtube.svg";
import desktop from "../../assets/icons/svg/desktop.svg";
import github from "../../assets/icons/svg/github.svg";
import createListIcons from "../../helper/create-list-icons";
import projectsArr from "../projects/project-objects/projects-array";

import { Project } from "../../interfaces/project";
import { useState } from "react";
import useWindowWidth from "../../hooks/windowResize";
import Width from "../../interfaces/width";

export default function SimpleSlider() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const windowWidth: Width = useWindowWidth();

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: currentProjectIndex,
    beforeChange: setNewIndex,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    swipe: false,
    useCSS: true,
    useTransform: true,
  };

  let smallerScreenSettings = {
    ...settings,
    slidesToShow: 1,
  };

  function setNewIndex(oldIndex: number, newIndex: number) {
    setCurrentProjectIndex(newIndex);
  }

  function createSliderImages(projects: Array<Project>) {
    return projects.map((project, index) => {
      return (
        <div key={"project-image-" + index}>
          <img src={project.image} alt={project.name + " project"} />
        </div>
      );
    });
  }

  function createProjectLinks(currentProject: Project) {
    return (
      <ul className="project-links" data-testid="test-project-links">
        <li
          onClick={() => {
            window.open("https://www.youtube.com/watch?v=" + currentProject.videoURL);
          }}>
          <button type="button">
            <img src={youtube} alt="youtube icon" />
            <span>Demo</span>
          </button>
        </li>
        {currentProject.liveURL === "none" ? (
          <li>
            <button disabled type="button">
              <img className="website-not-live" src={desktop} alt="website not live icon" />
              <span>Not Live</span>
            </button>
          </li>
        ) : (
          <li
            onClick={() => {
              window.open(currentProject.liveURL);
            }}>
            <button type="button">
              <img src={desktop} alt="website icon" />
              <span>Website</span>
            </button>
          </li>
        )}

        <li
          onClick={() => {
            window.open(currentProject.githubURL);
          }}>
          <button type="button">
            <img src={github} alt="github icon" />
            <span>GitHub</span>
          </button>
        </li>
      </ul>
    );
  }

  return (
    <div className="project-info">
      <h3>{projectsArr[currentProjectIndex].name}</h3>
      {createProjectLinks(projectsArr[currentProjectIndex])}
      {windowWidth.width < 900 ? (
        <Slider {...smallerScreenSettings}>{createSliderImages(projectsArr)}</Slider>
      ) : (
        <Slider {...settings}>{createSliderImages(projectsArr)}</Slider>
      )}
      <ul className="tech-stack-list" data-testid="test-tech-stack-list">
        {createListIcons(projectsArr[currentProjectIndex].techStack)}
      </ul>
      <div className="project-description">
        <p>{projectsArr[currentProjectIndex].description}</p>
      </div>
    </div>
  );
}
