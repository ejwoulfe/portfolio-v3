import "./collapsed-list.scss";
import { listItems } from "../list-items";
import { useState } from "react";
import bars from "../../../assets/icons/svg/bars.svg";
import xMark from "../../../assets/icons/svg/xmark.svg";

export default function CollapsedList() {
  const [expanded, setExpanded] = useState<Boolean>(false);

  return (
    <div className="expanded-container">
      {expanded ? (
        <button
          onClick={() => {
            setExpanded((prevValue) => !prevValue);
          }}>
          <img src={xMark} alt="close menu icon" />
        </button>
      ) : (
        <button
          onClick={() => {
            setExpanded((prevValue) => !prevValue);
          }}>
          <img src={bars} alt="open menu icon" />
        </button>
      )}

      {expanded ? (
        <ul data-testid="page-nav-list">
          {listItems.map((item, index) => {
            return (
              <li key={"list-item-" + index}>
                <button>{item.name}</button>
                <img src={require("../../../assets/icons/svg/" + item.icon + ".svg")} alt={item.name + "icon"} />{" "}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
