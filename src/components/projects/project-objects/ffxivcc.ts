import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/ffxivcc.png";

export const ffxivccProject: Project = new PersonalProject(
  "FFXIV Crafting Calculator",
  projectImage,

  ["html5", "css3", "javascript", "react", "sass", "node", "mysql", "typescript", "redux"],
  "none",
  "https://github.com/ejwoulfe/FFXIV-crafting-calculator",
  "jwuS_8I_jLQ",
  [
    "FFXIV Crafting Calculator is a full stack web app that calculates the profit margins of an in-game craft. It will give a list of all the required materials and their quantities that are needed in order to craft a recipe. Then using a third party API it retrieves the current listings of those materials on the marketboard that a user can purchase from. Using an algorithm I created it will grab the cheapest combinations of marketboard listings to meet the materials required quantity. It will gather the totals of all materials and lookup what the current marketboard value is for the recipe and calculate a profit, if it exists.",
  ]
);
