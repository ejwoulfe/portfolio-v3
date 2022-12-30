import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";

import projectImage from "../../../assets/projects/lol-champions.png";

export const lolChampionsProject: Project = new PersonalProject(
  "LoL Champions",
  projectImage,
  ["html5", "css3", "javascript", "react", "sass", "bootstrap"],
  "https://lol-champions.netlify.app/",
  "https://github.com/ejwoulfe/lol-champions",
  "bQQMlrC5dS8",
  [
    "LoL champions was made to help players of the game, League of Legends, find detailed information on all of its 154 playable champions.",
    "With this website a user can search for a specefic champion, browse a list of all of the champions, see which champions are being played the most in different ranked tiers, and see which ones are available to play free in the current week.",
    "*All information is obtained using AWS API Gateway connecting to the Riot Games Public API.",
  ]
);
