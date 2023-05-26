import React from "react";
import "../styles/Answer.css";

const Answer = (props) => {
  let answer = Object.keys(props.answer).map((qAnswer) => (
    <li
      className={
        props.correctAnswer ===
          ? "correct"
          : props.clickedAnswer === qAnswer
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(qAnswer)}
      key={qAnswer}
    >
      {props.answer[qAnswer]}
    </li>
  ));

  return (
    <>
      <ul disabled={props.clickedAnswer ? true : false} className="Answers">
        {answer}
      </ul>
    </>
  );
};

export default Answer;
