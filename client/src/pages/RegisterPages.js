// Libs
import React from "react";
import { useForm } from "../hook/userForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Components
import { Button } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";


// Styles
import "../styles/Register.css";

const RegisterPages = () => {
  const navigate = useNavigate();

  const { username, email, password, numQuestions, onInputChange, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
      numQuestions: "",
    });

  const onRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users", {
      username,
      numQuestions,
    }).then
    ((response) => {
      console.log(response.status)
      },
      (error) => {
        console.log(error);
      }
    );
    axios.post("http://localhost:5000/api/getQuestions", {
        numQuestions,
      })
      .then(
        (response) => {
          console.log(response)

        },
        (error) => {
          console.log(error);
        }
      );
    navigate("/quiz", {
      replace: true,
      sate: {
        logged: true,
        username,
        email,
        password,
        numQuestions,
      },
    });
    onResetForm();
  };

  return (
    <div className="Register-Page">
    <form onSubmit={onRegister} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Your Name" />
        </div>
        <TextInput
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={onInputChange}
          required
          autoComplete="off"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your Email" />
        </div>
        <TextInput type="text"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="You Password" />
        </div>
        <TextInput type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="numQuestions" value="Num Questions (1 - 10)"/>
        </div>
        <TextInput  type="number"
            name="numQuestions"
            id="numQuestions"
            value={numQuestions}
            onChange={onInputChange}
            required
            autoComplete="off"/>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default RegisterPages;
