import React from "react";
import "../styles/Scores.css";

const ScoresPage = () => {
  const scores = [
    { name: "John", score: 80 },
    { name: "Jane", score: 95 },
    { name: "Mike", score: 70 },
  ];

  // Ordenar los scores en orden descendente
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <div className="scores-page">
      <h1 className="scores-page__title">Scores</h1>
      <ul className="scores-page__list">
        {sortedScores.map((score, index) => (
          <li key={index} className="scores-page__item">
            <span className="scores-page__position">{index + 1}.</span> {/* Agregar la posición del score */}
            <span className="scores-page__name">{score.name}</span>
            <span className="scores-page__score">{score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScoresPage;
