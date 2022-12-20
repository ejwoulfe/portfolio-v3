import "./collapsed-list.scss";
import { listItems } from "../list-items";
import { useState } from "react";
import bars from "../../../assets/icons/svg/bars.svg";

export default function CollapsedList() {
  const [expanded, setExpanded] = useState<Boolean>(false);

  return (
    <div className="expanded-container">
      <button
        onClick={() => {
          setExpanded((prevValue) => !prevValue);
        }}>
        <img src={bars} alt="menu icon" />
      </button>
      {expanded ? (
        <ul>
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
