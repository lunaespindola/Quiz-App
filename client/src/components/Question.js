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