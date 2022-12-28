import { techStack } from "../interfaces/project";

export default class PersonalProject {
  name: string;
  image: string;
  techStack: techStack;
  liveURL: string;
  githubURL: string;
  videoURL: string;
  description: Array<string>;

  constructor(
    name: string,
    image: string,
    techStack: techStack,
    liveURL: string,
    githubURL: string,
    videoURL: string,
    description: Array<string>
  ) {
    this.name = name;
    this.image = image;
    this.techStack = techStack;
    this.liveURL = liveURL;
    this.githubURL = githubURL;
    this.videoURL = videoURL;
    this.description = description;
  }
}
