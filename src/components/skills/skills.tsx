import "./skills.scss";
import { frontEndIcons, backEndIcons, toolIcons } from "./modules/skills";

export default function Skills() {
  function createIconRows(iconsArray: Array<string>) {
    return iconsArray.map((iconName, index) => {
      return (
        <li key={"icon-" + index}>
          <img src={require("../../assets/icons/svg/" + iconName + ".svg")} alt={iconName + " icon"} />
          <span>{iconName}</span>
        </li>
      );
    });
  }
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="front-end technologies" data-testid="front-end-test">
          <h3>Front End</h3>
          <ul className="skill-icons">{createIconRows(frontEndIcons)}</ul>
        </div>
        <div className="back-end technologies" data-testid="back-end-test">
          <h3>Back End</h3>
          <ul className="skill-icons">{createIconRows(backEndIcons)}</ul>
        </div>
        <div className="tools technologies" data-testid="tools-test">
          <h3>Tools</h3>
          <ul className="skill-icons">{createIconRows(toolIcons)}</ul>
        </div>
      </div>
    </section>
  );
}
