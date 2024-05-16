import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  return (
    <div className="topic">
      <img src={logo} alt=""></img>
      <h2>Name: {name}</h2>
      <h4>Total: {total}</h4>
    </div>
  );
};

export default Topic;
