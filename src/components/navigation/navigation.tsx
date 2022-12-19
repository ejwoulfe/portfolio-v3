import resume from "../../assets/icons/svg/resume.svg";
import github from "../../assets/icons/svg/github-white.svg";
import resumePDF from "../../assets/resume/Edmond_Woulfe_Resume.pdf";
import "./navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <div className="logo-and-links">
        <a className="logo" href="/">
          EJW4
        </a>
        <a href={resumePDF} target="_blank" rel="noreferrer">
          <img src={resume} alt="resume pdf" />
        </a>
        <a href="https://github.com/ejwoulfe" target="_blank" rel="noreferrer">
          <img src={github} alt="link to personal github" />
        </a>
      </div>
      <ul className="nav-list">
        <li>Skills</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
