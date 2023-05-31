/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Carlos Alan Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

// Libs
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

  const { username, numQuestions, onInputChange, onResetForm } =
    useForm({
      username: "",
      numQuestions: "",
    });

  const onRegister = (e) => {
    e.preventDefault();
    axios.post("http://44.204.48.100:5000/api/users", {
      username,
      numQuestions,
    }).then
    ((response) => {
      if (response.data === "User already exists") {
        alert("User already exists");
        return
      }
        else {
          localStorage.setItem("username", username);
          localStorage.setItem("numQuestions", numQuestions);
          localStorage.setItem("logged", true);
        }
        navigate("/quiz", {
          replace: true,
          sate: {
            logged: true,
            username,
            numQuestions,
          },
        });

      },
      (error) => {
        console.log(error);
      }
    );

    onResetForm();
  };

  return (
    <div className="Register-Page">
    <form onSubmit={onRegister} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" style={{ fontSize: '25px' }}/>
        </div>
        <TextInput
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={onInputChange}
          required
          autoComplete="off"
          style={{ fontSize: '25px' }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="numQuestions" value="Num Questions (1 - 10)" style={{ fontSize: '25px' }}/>
        </div>
        <TextInput  
          type="number"
          min="1"
          max="10"
            name="numQuestions"
            id="numQuestions"
            value={numQuestions}
            onChange={onInputChange}
            required
            autoComplete="off"
            style={{ fontSize: '25px' }}/>
            
      </div>
      <Button type="submit" >Submit</Button>
    </form>
    </div>
  );
};

export default RegisterPages;
