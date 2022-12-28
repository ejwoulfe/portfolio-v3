import "./projects.scss";
import youtube from "../../assets/icons/svg/youtube.svg";
import desktop from "../../assets/icons/svg/desktop.svg";
import github from "../../assets/icons/svg/github.svg";
import { bdoProfitProject } from "./project-objects/bdoprofit";
import { favoriteMoviesProject } from "./project-objects/favorite-movies";
import { ffxivccProject } from "./project-objects/ffxivcc";
import { lolChampionsProject } from "./project-objects/lol-champions";
import SimpleSlider from "../slider/simple-slider";
import { Project } from "../../interfaces/project";
import { useState } from "react";
import Slider from "react-slick";

export default function Projects() {
  const projectsArr = [ffxivccProject, lolChampionsProject, bdoProfitProject, favoriteMoviesProject];
  const [currentProject, setCurrentProject] = useState<Project>(ffxivccProject);

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
    <section className="projects">
      <h2>Projects</h2>
      <div>{createProjectContainer(currentProject)}</div>
      <SimpleSlider props={{ projectsArr, setCurrentProject }} />
    </section>
  );
}
