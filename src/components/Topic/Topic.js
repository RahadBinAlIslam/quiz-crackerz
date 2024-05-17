import React from "react";
import "./Topic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import StartButton from "../StartButton/StartButton";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="topic">
      <img src={logo} alt=""></img>
      <div className="topic-details">
        <h5>{name}</h5>
        <StartButton>
          <Link to="/questions">
            <button>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </StartButton>
      </div>
    </div>
  );
};

export default Topic;
