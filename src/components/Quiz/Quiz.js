import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quiz = () => {
  const quizzes = useLoaderData();
  return (
    <div>
      <h2>Quiz of {quizzes.data.name}</h2>
      {quizzes.data.questions.map((quiz) => (
        <Questions key={quiz.id} quiz={quiz}></Questions>
      ))}
    </div>
  );
};

export default Quiz;
