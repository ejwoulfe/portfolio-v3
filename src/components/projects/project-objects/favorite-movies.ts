import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/favorite-movies.png";
import html5 from "../../../assets/icons/svg/html5.svg";
import css3 from "../../../assets/icons/svg/css3.svg";
import javascript from "../../../assets/icons/svg/javascript.svg";
import node from "../../../assets/icons/svg/node.svg";
import react from "../../../assets/icons/svg/react.svg";
import sass from "../../../assets/icons/svg/sass.svg";
import mongodb from "../../../assets/icons/svg/mongodb.svg";

export const favoriteMoviesProject: Project = new PersonalProject(
  "Favorite Movies",
  projectImage,
  {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Node: node,
    MongoDB: mongodb,
  },
  "WIP",
  "https://github.com/ejwoulfe/favorite-movies",
  "75jnHmUn5_0",
  [
    "Favorite Movies allows a user to browse for their favorite movies or actors and gives them a brief description about that person/movie.",
    "The user will then be able to favorite a movie and have a collection of their favorites displayed on their account page.",
  ]
);
