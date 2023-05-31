/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Carlos Alan Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

import React from "react";
import "../styles/HomePages.css";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import logo from '../images/Quizzy.png'

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className="full-page"> 
      <Card
        horizontal
        imgSrc={logo}
        alt="Quizzy Logo"
        style={{ width: "1000px", height: "500px" }}
      >
        <div className="text">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>Welcome to the Quizzy App!</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>Test your knowledge and have fun!</p>
        </p>
        </div>
        <Button className="home-page__start-button" onClick={handleNavigate}>Start Quiz</Button>
      </Card>
    </div>
  );
};

export default HomePage;

