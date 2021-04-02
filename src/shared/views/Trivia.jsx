import React from 'react';
import { Card } from "../organisms/Card"
// url: https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple
import '../trivia.css';

export const Trivia = () => {
  return (
    <React.Fragment>
      <div className="container">
        <p className="counterStyle"> Counter: 0/10 </p>
        <Card />
        <div className="buttonNav">
          <button className="buttonStyle"> Previous </button>
          <button className="buttonStyle"> Answer </button>
          <button className="buttonStyle"> Next </button>
        </div>
      </div>
    </React.Fragment>
  );
}
