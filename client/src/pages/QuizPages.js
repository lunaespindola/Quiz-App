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