/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Luna Abril Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

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
