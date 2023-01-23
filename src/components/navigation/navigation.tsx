import resume from "../../assets/icons/svg/resume.svg";
import github from "../../assets/icons/svg/github.svg";
import resumePDF from "../../assets/resume/Edmond_Woulfe_Resume.pdf";
import { listItems } from "./list-items";
import "./navigation.scss";
import CollapsedList from "./collapsed-list/collapsed-list";
import useWindowWidth from "../../hooks/windowResize";
import Width from "../../interfaces/width";
import { scrollIntoView } from "../../helper/scroll-into-view";

export default function Navigation() {
  const windowWidth: Width = useWindowWidth();

  return (
    <nav>
      <div className="logo-and-links">
        <span className="logo">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            EJW4
          </button>
        </span>
        <a href={resumePDF} target="_blank" rel="noreferrer">
          <img src={resume} alt="resume pdf" />
          Resume
        </a>
        <a href="https://github.com/ejwoulfe" target="_blank" rel="noreferrer">
          <img src={github} alt="link to personal github" />
          GitHub
        </a>
      </div>
      {windowWidth.width < 750 ? (
        <CollapsedList></CollapsedList>
      ) : (
        <ul className="nav-list">
          {listItems.map((item, index) => {
            return (
              <li
                key={"list-item-" + index}
                onClick={() => {
                  scrollIntoView(item.className);
                }}>
                <button type="button">{item.name}</button>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
