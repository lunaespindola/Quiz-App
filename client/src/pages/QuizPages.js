/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Carlos Alan Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

import React from "react";
import QuizApp from '../components/QuizMain'
import '../styles/QuizPage.css'

const QuizPages = () => {
    return (
        <div className="Quiz-App">
            <div className="Quiz-App-content">
                <QuizApp />
            </div>
        </div>
    )
}

export default QuizPages;