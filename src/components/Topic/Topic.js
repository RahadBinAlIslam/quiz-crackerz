import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="topic">
      <img src={logo} alt=""></img>
      <div className="topic-details">
        <h4>{name}</h4>
        <button>
          <div>
            <h4>Start Practice</h4>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Topic;
