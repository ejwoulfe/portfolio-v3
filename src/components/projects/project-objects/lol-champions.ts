import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/lol-champions.png";
import html5 from "../../../assets/icons/svg/html5.svg";
import css3 from "../../../assets/icons/svg/css3.svg";
import javascript from "../../../assets/icons/svg/javascript.svg";
import react from "../../../assets/icons/svg/react.svg";
import sass from "../../../assets/icons/svg/sass.svg";
import bootstrap from "../../../assets/icons/svg/bootstrap.svg";

export const lolChampionsProject: Project = new PersonalProject(
  "LoL Champions",
  projectImage,
  {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Bootstrap: bootstrap,
  },
  "https://lol-champions.netlify.app/",
  "https://github.com/ejwoulfe/lol-champions",
  "bQQMlrC5dS8",
  [
    "LoL champions was made to help players of the game, League of Legends, find detailed information on all of its 154 playable champions.",
    "With this website a user can search for a specefic champion, browse a list of all of the champions, see which champions are being played the most in different ranked tiers, and see which ones are available to play free in the current week.",
    "*All information is obtained using AWS API Gateway connecting to the Riot Games Public API.",
  ]
);
