import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Questions.css";

const notify = () => toast("Successfully Completed Today's Exercise!");

const Questions = ({ quiz }) => {
  const { question, options } = quiz;

  return (
    <div>
      <h1>Quiz</h1>
      <p>{question}</p>
      <p>
        <div className="box">
          <input
            type="radio"
            name="topping"
            value={options[0]}
            id={options[0]}
          />
          <label htmlFor={options[0]}>{options[0]}</label>
          <input
            type="radio"
            name="topping"
            value={options[1]}
            id={options[1]}
          />
          <label htmlFor={options[1]}>{options[1]}</label>
          <input
            type="radio"
            name="topping"
            value={options[2]}
            id={options[2]}
          />
          <label htmlFor={options[2]}>{options[2]}</label>
          <input
            type="radio"
            name="topping"
            value={options[3]}
            id={options[3]}
          />
          <label htmlFor={options[3]} onClick={notify}>
            {options[3]}
          </label>
          <ToastContainer />
        </div>
      </p>
    </div>
  );
};

export default Questions;
