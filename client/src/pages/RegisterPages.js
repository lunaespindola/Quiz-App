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

  const { name, email, password, numQuestions, onInputChange, onResetForm } =
    useForm({
      name: "",
      email: "",
      password: "",
      numQuestions: "",
    });

  const onRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users", {
      name,
      numQuestions,
    });
    axios
      .post("http://localhost:5000/api/getQuestions", {
        numQuestions,
      })
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    navigate("/quiz", {
      replace: true,
      sate: {
        logged: true,
        name,
        email,
        password,
        numQuestions,
      },
    });
    onResetForm();
  };

  return (
    <form onSubmit={onRegister} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your Name" />
        </div>
        <TextInput
          type="text"
          name="name"
          id="name"
          value={name}
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
  );
};

export default RegisterPages;
