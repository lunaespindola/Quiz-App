import React, { Component } from "react";
import "../styles/QuizMain.css";
import Question from "./Question";
import Answer from "./Answer";

export default class Quiz extends Component {
  state = {
    questions: {
      1: "What is the capital of France?",
      2: "Who is CEO of Tesla?",
      3: "The iPhone was created by which company?",
      4: "How many Harry Potter books are there?",
    },
    answers: {
      1: {
        1: "New York",
        2: "London",
        3: "Paris",
        4: "Dublin",
      },
      2: {
        1: "Jeff Bezos",
        2: "Elon Musk",
        3: "Bill Gates",
        4: "Tony Stark",
      },
      3: {
        1: "Apple",
        2: "Amazon",
        3: "Microsoft",
        4: "Tesla",
      },
      4: {
        1: "1",
        2: "4",
        3: "6",
        4: "7",
      },
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "1",
      4: "4",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    const correctAnswer = correctAnswers[step];

    if (answer === correctAnswer) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswer,
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: correctAnswer,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  render() {
    const { questions, step, answers, clickedAnswer, correctAnswer, score } =
      this.state;

    return (
      <div className="Content">
        {step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer
              answer={answers[step]}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
              checkAnswer={this.checkAnswer}
            />
            <button
              className="NextStep"
              disabled={!clickedAnswer}
              onClick={() => this.nextStep(step)}
            >
              Next
            </button>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
