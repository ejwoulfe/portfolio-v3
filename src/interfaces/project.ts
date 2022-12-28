export interface techStack {
  [name: string]: string;
}
export interface Project {
  name: string;
  image: string;
  techStack: techStack;
  liveURL: string;
  githubURL: string;
  videoURL: string;
  description: Array<string>;
}
