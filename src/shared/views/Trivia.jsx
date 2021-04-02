import React from 'react';
import { Card } from "../organisms/Card"
// url: https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple
const counterStyle = {
  backgroundColor: "#D9EAF8",
  margin: "50px",
  padding: "30px",
  borderRadius: "15px"
};
const buttonStyle = {
  margin: "10px",
  fontSize: "20px"
};
const buttonNav = {
  position: "relative",
  
};

export const Trivia = () => {
  return (
    <React.Fragment>
      <p style={counterStyle}> Counter: 0/10 </p>
      <Card />
      <div style={buttonNav}>
        <button style={buttonStyle}> Previous </button>
        <button style={buttonStyle}> Answer </button>
        <button style={buttonStyle}> Next </button>
      </div>
    </React.Fragment>
  );
}
