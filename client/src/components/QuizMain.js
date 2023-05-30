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
    

    axios
      .post("http://localhost:5000/api/getQuestions", {
        numQuestions,
      })
      .then(
        (response) => {
          console.log(response.data);
          // Iterate over the array of responses and create an object with the question and the answers
          for (let i = 0; i < response.data.length; i++) {
            const question = response.data[i].Question;
            const options = response.data[i].Options;
            const answer = response.data[i].Answer;
            this.setState((prevState) => ({
              questions: {
                ...prevState.questions,
                [i + 1]: question,
              },
              options: {
                ...prevState.options,
                [i + 1]: options,
              },
              Answers: {
                ...prevState.Answers,
                [i + 1]: answer,
              },
            }));
          }
        },
        (error) => {
          console.log(error);
        }
      );
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
    window.location.href = "/quiz"; // Redirect to the register page
  };

  saveQuiz = () => {
    const score = this.state.score;
    const username = localStorage.getItem("username");
    axios.post("http://localhost:5000/api/Addscores", {
      username,
      score,
    }).then
    ((response) => {
      if (response.data === "User already exists") {
        alert("User already exists");
        return
      }
        else {
        }
        window.location.href = "/home"; // Redirect to the register page

      },
      (error) => {
        console.log(error);
      }
    );
  }

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
            <button className="SaveButton" onClick={this.saveQuiz}>Save</button>
            <button className="RestartButton" onClick={() => this.saveQuiz(localStorage.getItem("username"), score)}>
              Restart
            </button>
          </div>
        )}
      </div>
    );
  }
}
