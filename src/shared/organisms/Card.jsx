import React from 'react';
import '../trivia.css';

export const Card = ({question, answers, correctAnswer, isCorrect}) => {
  const checkAnswer = (selectedAnswer) => {
    (selectedAnswer === correctAnswer) ? isCorrect(true) : isCorrect(false);
  };

  const allAnswers = () => {
    return [...answers, correctAnswer];
  }

  return (
    <React.Fragment>
      <div className="cardStyle">
        <h2> {question} </h2>
        {allAnswers().map((answer, index) => (
          <p key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </p>
        ))}
      </div>
    </React.Fragment>
  );
}
