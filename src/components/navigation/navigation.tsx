import resume from "../../assets/icons/svg/resume.svg";
import github from "../../assets/icons/svg/github-white.svg";
import resumePDF from "../../assets/resume/Edmond_Woulfe_Resume.pdf";
import { listItems } from "./list-items";
import "./navigation.scss";
import { useEffect, useState } from "react";
import CollapsedList from "./collapsed-list/collapsed-list";

export default function Navigation() {
  const [windowWidth, setWindowWith] = useState<number>(window.innerWidth);

  let handleResize = () => {
    setWindowWith(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWith(window.innerWidth);
  }, [windowWidth]);

  return (
    <nav>
      <div className="logo-and-links">
        <span className="logo">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>EJW4</button>
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
      {windowWidth < 750 ? (
        <CollapsedList></CollapsedList>
      ) : (
        <div className="nav-list">
          {listItems.map((item, index) => {
            return (
              <li key={"list-item-" + index}>
                <button onClick={() => {}}>{item.name}</button>
              </li>
            );
          })}
        </div>
      )}
    </nav>
  );
}
