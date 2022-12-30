import PersonalProject from "../../../models/project";
import { Project } from "../../../interfaces/project";
import projectImage from "../../../assets/projects/favorite-movies.png";

export const favoriteMoviesProject: Project = new PersonalProject(
  "Favorite Movies",
  projectImage,
  ["html5", "css3", "javascript", "react", "sass", "node", "mongodb"],
  "none",
  "https://github.com/ejwoulfe/favorite-movies",
  "75jnHmUn5_0",
  [
    "Favorite Movies allows a user to browse for their favorite movies or actors and gives them a brief description about that person/movie.",
    "The user will then be able to favorite a movie and have a collection of their favorites displayed on their account page.",
  ]
);
