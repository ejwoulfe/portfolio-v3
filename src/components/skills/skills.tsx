import "./skills.scss";

export default function Skills() {
  const frontEndIcons: Array<string> = ["html5", "css3", "javascript", "sass", "react", "redux", "bootstrap"];
  const backEndIcons: Array<string> = ["mysql", "node", "express", "mongodb", "php"];
  const toolIcons: Array<string> = ["github", "git", "gitlab", "npm", "figma", "jira", "photoshop", "puppeteer"];

  function createIconRows(iconsArray: Array<string>) {
    return iconsArray.map((iconName, index) => {
      return (
        <li key={"icon-" + index}>
          <img src={require("../../assets/icons/svg/" + iconName + ".svg")} alt={iconName + "icon"} />
          <span>{iconName}</span>
        </li>
      );
    });
  }
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="front-end technologies">
          <h3>Front End</h3>
          <ul className="skill-icons ">{createIconRows(frontEndIcons)}</ul>
        </div>
        <div className="back-end technologies">
          <h3>Back End</h3>
          <ul className="skill-icons">{createIconRows(backEndIcons)}</ul>
        </div>
        <div className="tools technologies">
          <h3>Tools</h3>
          <ul className="skill-icons">{createIconRows(toolIcons)}</ul>
        </div>
      </div>
    </section>
  );
}
