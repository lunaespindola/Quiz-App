import React, { Component } from "react";
import axios from "axios";
import "../styles/QuizMain.css";
import Question from "./Question";
import Answer from "./Answer";

export default class Quiz extends Component {
  state = {
    questions: {},
    options: {},
    Answers: {},
    correctAnswer: " ",
    clickedAnswer: 0,
    step: 1,
    score: 0,
    isQuizCompleted: false,
  };

  componentDidMount() {
    const numQuestions = localStorage.getItem("numQuestions");

    if (localStorage.getItem("logged") === "true") {
      axios.post("http://localhost:5000/api/getQuestions", {
        numQuestions
        })
        .then(
          (response) => {
            console.log(response.data);
            const { data } = response;
            const updatedQuestions = {};
            const updatedOptions = {};
            const updatedAnswers = {};
            for (let i = 0; i < data.length; i++) {
              const question = data[i].Question;
              const options = data[i].Options;
              const answer = data[i].Answer;
              updatedQuestions[i + 1] = question;
              updatedOptions[i + 1] = options;
              updatedAnswers[i + 1] = answer;
            }
            this.setState({
              questions: updatedQuestions,
              options: updatedOptions,
              Answers: updatedAnswers,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      alert("You must be logged in to play the quiz");
      window.location.href = "/register";
    }
  }

  checkAnswer = (answer) => {
    const { Answers, step } = this.state;
    const correctAnswer = Answers[step];

    if (answer === correctAnswer) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
        correctAnswer: correctAnswer,
        clickedAnswer: answer,
      }));
    } else {
      this.setState({
        correctAnswer: correctAnswer,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = () => {
    const { step, questions } = this.state;
    if (step < Object.keys(questions).length) {
      this.setState((prevState) => ({
        step: prevState.step + 1,
        correctAnswer: " ",
        clickedAnswer: 0,
      }));
    } else {
      this.setState({
        isQuizCompleted: true,
      });
    }
  };

  resetQuiz = () => {
    this.setState({
      questions: {},
      options: {},
      Answers: {},
      correctAnswer: " ",
      clickedAnswer: 0,
      step: 1,
      score: 0,
      isQuizCompleted: false,
    });
    window.location.href = "/quiz"; // Redirect to the quiz page
  };

  saveQuiz = () => {
    const score = this.state.score;
    const username = localStorage.getItem("username");
    localStorage.setItem("logged", false);
    axios
      .post("http://localhost:5000/api/Addscores", {
        username,
        score,
      })
      .then(
        (response) => {
          if (response.data === "User already exists") {
            alert("User already exists");
          } else {
            window.location.href = "/scores"; // Redirect to the scores page
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    const {
      questions,
      step,
      options,
      clickedAnswer,
      score,
      correctAnswer,
      isQuizCompleted,
    } = this.state;

    return (
      <div className="Content">
        {!isQuizCompleted && step <= Object.keys(questions).length ? (
          <>
            <Question question={questions[step]} />
            <Answer
              answer={options[step]}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
              checkAnswer={this.checkAnswer}
            />
            <button
              className="NextStep"
              disabled={!clickedAnswer}
              onClick={this.nextStep}
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
            <div className="buttons">
              <button className="SaveButton" onClick={this.saveQuiz}>
                Save
              </button>
              <button className="RestartButton" onClick={this.resetQuiz}>
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
