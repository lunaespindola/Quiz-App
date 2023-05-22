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
