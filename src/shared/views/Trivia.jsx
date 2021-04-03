import React, { useEffect, useState } from 'react';
import { Card } from "../organisms/Card"
import '../trivia.css';
import { fetchQuestions } from "../services/triviaService";

const usedQuestions=[];

export const Trivia = () => {
  const [questions, updateQuestions] = useState();
  const [isLoading, updateLoading] = useState(true);
  const [questionNo, updateQuestionNo] = useState(0);
  const [score, updateScore] = useState(0);
  
  useEffect(() => {
    const receiveQuestions = async () => {
      updateQuestions(await fetchQuestions());
      updateLoading(false);
    };
    receiveQuestions();
  }, []);

  const handleCallback = (isCorrect) => {
    console.log(usedQuestions);
    if (!usedQuestions.includes(questionNo)){
      usedQuestions.push(questionNo);
      if (isCorrect) return updateScore(score + 1);
    }
  };
  
  const handleQuestionJump = (step) => {
    if (questionNo < 7 && step === "forth") {
      updateQuestionNo(questionNo + 1);
    }
    if (questionNo > 0 && step === "back") {
      updateQuestionNo(questionNo - 1);
    }
  };

  if(isLoading) return (<p> Loading... </p>);

  // DONE Mix answers: first solution: use a sort to return the solution in a random spot : )
  // DONE un click x pregunta: solved by using an array that stores used questions. Should try to find another way tho

  if (!isLoading) {
    return (
      <React.Fragment>
        <div className="container">
          <p className="counterStyle"> SCORE: {score}/10 </p>
          <Card 
            question={questions[questionNo].question}
            answers={questions[questionNo].incorrect_answers}
            correctAnswer={questions[questionNo].correct_answer}
            isCorrect={handleCallback}
          />
          <div className="buttonNav">
            <button className="buttonStyle" onClick={() => handleQuestionJump("back")}> Previous </button>
            <button className="buttonStyle" onClick={() => handleQuestionJump("forth")}> Next </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
