import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/bdoprofit.png";

export const bdoProfitProject: Project = new PersonalProject(
  "BDOProfit",
  projectImage,
  ["html5", "css3", "javascript", "bootstrap", "jquery", "php", "mysql", "node"],
  "none",
  "https://github.com/ejwoulfe/BDOProfit",
  "pJPPptodu5g",
  [
    "BDOProfit is used to help players calculate if an in-game craft will be profitable to them if they were to sell it on the in-game marketplace.",
    "Once a player finds a recipe they want to craft, BDOProfit will display which materials, and their quantities, will be required in order to craft that recipe.",
    "The user will then enter in the values of each material and how much the recipe is currently going for on the marketplace.",
    "BDOProfit will then calculate the total costs of materials and the total profits they would make, including taxes, off the marketplace.",
  ]
);
