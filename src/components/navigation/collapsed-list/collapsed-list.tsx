import "./collapsed-list.scss";
import { listItems } from "../list-items";
import { useState } from "react";

export default function CollapsedList() {
  const [expanded, setExpanded] = useState<Boolean>(false);

  return (
    <div className="expanded-container">
      <button
        onClick={() => {
          setExpanded((prevValue) => !prevValue);
        }}>
        Expand
      </button>
      {expanded ? (
        <ul>
          {listItems.map((item, index) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
}
