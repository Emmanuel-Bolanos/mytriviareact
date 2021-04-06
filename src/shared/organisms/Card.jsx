import React from 'react';
import '../trivia.css';

const randInt = max => Math.floor(Math.floor(max)*Math.random(max));

export const Card = ({question, questionNo, answers, correctAnswer, isCorrect}) => {
  const checkAnswer = (selectedAnswer) => {
    (selectedAnswer === correctAnswer) ? isCorrect(true) : isCorrect(false);
  };

  const allAnswers = () => {
    const randomAnswers = [...answers];
    randomAnswers.splice(randInt([randomAnswers].length), 0, correctAnswer);
    return randomAnswers;
  }

  return (
    <React.Fragment>
      <div className="cardStyle">
        <h2> Question {questionNo} </h2>
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
