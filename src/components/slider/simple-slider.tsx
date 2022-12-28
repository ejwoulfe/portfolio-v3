import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./simple-slider.scss";

import { Project } from "../../interfaces/project";

interface SimpleSliderProps {
  projectsArr: Array<Project>;
  setCurrentProject: React.Dispatch<React.SetStateAction<Project>>;
}
export default function SimpleSlider(data: { props: SimpleSliderProps }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function createProjectsContainer(projects: Array<Project>) {
    return projects.map((project, index) => {
      return (
        <div>
          <img src={project.image} alt="project" />
        </div>
      );
    });
  }

  return <Slider {...settings}>{createProjectsContainer(data.props.projectsArr)}</Slider>;
}
