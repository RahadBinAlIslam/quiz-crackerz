import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Questions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const correct = () => toast("Correct Answer!");
const wrong = () => toast("Wrong Answer!");

const Questions = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;

  const showCorrectAnswer = () => toast(correctAnswer);

  return (
    <div>
      <h3>
        Quiz : {question}{" "}
        <FontAwesomeIcon icon={faEye} onClick={showCorrectAnswer} />
        <ToastContainer />
      </h3>
      <div className="box">
        <input
          type="radio"
          name="topping"
          value={options[0]}
          id={options[0]}
          onClick={() =>
            options[0] === correctAnswer ? { correct } : { wrong }
          }
        />
        <ToastContainer />
        <label htmlFor={options[0]}>{options[0]}</label>
        <input
          type="radio"
          name="topping"
          value={options[1]}
          id={options[1]}
          onClick={() =>
            options[1] === correctAnswer ? { correct } : { wrong }
          }
        />
        <ToastContainer />
        <label htmlFor={options[1]}>{options[1]}</label>
        <input
          type="radio"
          name="topping"
          value={options[2]}
          id={options[2]}
          onClick={() =>
            options[2] === correctAnswer ? { correct } : { wrong }
          }
        />
        <ToastContainer />
        <label htmlFor={options[2]}>{options[2]}</label>
        <input
          type="radio"
          name="topping"
          value={options[3]}
          id={options[3]}
          onClick={() =>
            options[3] === correctAnswer ? () => correct : () => wrong
          }
        />
        <ToastContainer />
        <label htmlFor={options[3]}>{options[3]}</label>
      </div>
    </div>
  );
};

export default Questions;
