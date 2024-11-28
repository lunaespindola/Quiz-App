/*Final Project: Quiz Application with Microservices
  Date: 30/05/2023
  Authors:
            A01750624 Paulina Guadalupe Alva Martinez
            A01751117 Luna Abril Gallegos Espinola
            A01378450 Jorge Alberto Penagos Mendez
            A01750363 Naomi Anciola Calderon */

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePages";
import QuizPages from "../pages/QuizPages";
import DontFound from "../pages/DontFound";
import RegisterPage from "../pages/RegisterPages";
import ScoresPages from "../pages/ScoresPages";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPages />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/scores" element={<ScoresPages />} />
        <Route path="*" element={<DontFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
