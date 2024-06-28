import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex-justify-start align-baseline">
      <FontAwesomeIcon
        icon={faStar}
        className={`pr-1 ${
          priority > 0 ? "text-yellow-500" : "text-slate-400"
        } `}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={`pr-2 ${
          priority > 1 ? "text-yellow-500" : "text-slate-400"
        } `}
      />
      <FontAwesomeIcon
        icon={faStar}
        className={`pr-3 ${
          priority > 2 ? "text-yellow-500" : "text-slate-400"
        } `}
      />
    </div>
  );
};

export default PriorityDisplay;
