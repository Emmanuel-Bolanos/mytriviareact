import React from 'react';
import '../trivia.css';

export const Card = ({question, answers, correctAnswer, isCorrect}) => {
  const checkAnswer = (selectedAnswer) => {
    (selectedAnswer === correctAnswer) ? isCorrect(true) : isCorrect(false);
  };

  const allAnswers = () => {
    return [...answers, correctAnswer].sort();
  }

  return (
    <React.Fragment>
      <div className="cardStyle">
        <h2> {question} </h2>
        {allAnswers().map((answer, index) => (
          <button className="answerButton" key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </React.Fragment>
  );
}
