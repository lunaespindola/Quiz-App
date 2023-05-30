import React from "react";
import "../styles/Answer.css";

const Answer = (props) => {
  let answer = Object.keys(props.answer).map((i) => (
    <li
      className={
        props.correctAnswer === props.answer[i]
          ? "correct"
          : props.clickedAnswer === props.answer[i]
          ? "incorrect"
          : ""
      }
      onClick={() => props.checkAnswer(props.answer[i])}  
      key={props.answer[i]} 
    >
      {props.answer[i]}
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
