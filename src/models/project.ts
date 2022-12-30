export default class PersonalProject {
  name: string;
  image: string;
  techStack: Array<string>;
  liveURL: string;
  githubURL: string;
  videoURL: string;
  description: Array<string>;

  constructor(
    name: string,
    image: string,
    techStack: Array<string>,
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
