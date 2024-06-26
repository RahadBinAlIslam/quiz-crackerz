import React from "react";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, id, logo, total } = topic;
  return (
    <div className="topic">
      <img src={logo} alt=""></img>
      <div className="topic-details">
        <h5>{name}</h5>
        <Link to={`/quiz/${id}`}>
          <div className="start-button">
            <h5>Start Practice</h5>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </div>
      <h5>Total Questions: {total}</h5>
    </div>
  );
};

export default Topic;
