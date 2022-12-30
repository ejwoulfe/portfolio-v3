import "./skills.scss";
import { frontEndIcons, backEndIcons, toolIcons } from "./modules/skills";
import createListIcons from "../../helper/create-list-icons";

export default function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="front-end technologies" data-testid="front-end-test">
          <h3>Front End</h3>
          <ul className="skill-icons">{createListIcons(frontEndIcons)}</ul>
        </div>
        <div className="back-end technologies" data-testid="back-end-test">
          <h3>Back End</h3>
          <ul className="skill-icons">{createListIcons(backEndIcons)}</ul>
        </div>
        <div className="tools technologies" data-testid="tools-test">
          <h3>Tools</h3>
          <ul className="skill-icons">{createListIcons(toolIcons)}</ul>
        </div>
      </div>
    </section>
  );
}
