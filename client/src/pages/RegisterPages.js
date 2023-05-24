// Libs
import React from "react";
import { useForm } from "../hook/userForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import '../styles/Register.css';

const RegisterPages = () => {

    const navigate = useNavigate();


  const { name, email, password, numQuestions, onInputChange, onResetForm } =
    useForm({
      name: "",
      email: "",
      password: "",
      numQuestions: "",
    });

    const onRegister = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/users', {
            name,
            numQuestions,
    })
        axios.post('http://localhost:5000/api/getQuestions', {
            numQuestions
    })
    .then((response) => {
        console.log(response.data);
    }, (error) => {
        console.log(error);
    });
        navigate('/quiz', {
                replace: true, 
                sate: {
                    logged: true,
                    name,
                    email,
                    password,
                    numQuestions
                }
        });
        onResetForm();
    }

  return (
    <div className="container">
      <form onSubmit={onRegister}>
        <h1>Register user</h1>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name" className="label-name">
            Name:
          </label>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="email" className="label-name">
            Email:
          </label>
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="password" className="label-name">
            Password:
          </label>
        </div>

        <div className="form-group">
          <input
            type="number"
            name="numQuestions"
            id="numQuestions"
            value={numQuestions}
            onChange={onInputChange}
            required
            autoComplete="off"
          />
          <label htmlFor="numQuestions" className="label-name">
            Num Questions:
          </label>
        </div>

        <button>Start</button>
      </form>
    </div>
  );
};

export default RegisterPages;
