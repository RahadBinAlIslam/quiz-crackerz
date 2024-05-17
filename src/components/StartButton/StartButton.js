import React from "react";
import "./StartButton.css";

const StartButton = (props) => {
  const { children } = props;
  return (
    <div className="start-button">
      <h5>Start Practice</h5>
      {children}
    </div>
  );
};

export default StartButton;
