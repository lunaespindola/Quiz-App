import React from "react";
import '../styles/HomePages.css'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate(); 

    const handleNavigate = () => {
        navigate("/register"); // Navega a la página de registro al presionar el botón
    }

    return (
        <div className="home-page">
            <h1 className="home-page__title">Welcome to the Quiz App!</h1>
            <p className="home-page__description">Test your knowledge and have fun!</p>
            <button className="home-page__start-button" onClick={handleNavigate}>Start Quiz</button>
        </div>
    )
}

export default HomePage;


