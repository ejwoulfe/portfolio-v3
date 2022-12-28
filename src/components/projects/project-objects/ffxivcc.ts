import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/ffxivcc.png";
import html5 from "../../../assets/icons/svg/html5.svg";
import css3 from "../../../assets/icons/svg/css3.svg";
import javascript from "../../../assets/icons/svg/javascript.svg";
import node from "../../../assets/icons/svg/node.svg";
import react from "../../../assets/icons/svg/react.svg";
import sass from "../../../assets/icons/svg/sass.svg";
import mysql from "../../../assets/icons/svg/mysql.svg";
import typescript from "../../../assets/icons/svg/typescript.svg";
import redux from "../../../assets/icons/svg/redux.svg";

export const ffxivccProject: Project = new PersonalProject(
  "FFXIV Crafting Calculator",
  projectImage,
  {
    HTML5: html5,
    CSS3: css3,
    JavaScript: javascript,
    React: react,
    Sass: sass,
    Node: node,
    MySQL: mysql,
    TypeScript: typescript,
    ReduxToolKit: redux,
  },
  "none",
  "https://github.com/ejwoulfe/FFXIV-crafting-calculator",
  "jwuS_8I_jLQ",
  [
    "FFXIV Crafting Calculator is a full stack web app that calculates the profit margins of an in-game craft. It will give a list of all the required materials and their quantities that are needed in order to craft a recipe. Then using a third party API it retrieves the current listings of those materials on the marketboard that a user can purchase from. Using an algorithm I created it will grab the cheapest combinations of marketboard listings to meet the materials required quantity. It will gather the totals of all materials and lookup what the current marketboard value is for the recipe and calculate a profit, if it exists.",
  ]
);
