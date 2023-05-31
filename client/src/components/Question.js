/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Carlos Alan Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

import React from "react";
import '../styles/Question.css'

const Question = (props) => {
    return (
        <div className="Question-Container">
                    <h1>
            {props.question}
        </h1>
        </div>
    )
}

export default Question;