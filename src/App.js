import logo from './logo.svg';
import './App.css';
import QuestionsContainer from "./Components/QuestionsContainer"
import React, { useState } from "react";

function App() {
  const [testPerformance, setTestPerformance] = useState({
    "correctAnswers" : 0,
    "incorrectAnswers" : 0,
    "questionsToReview" : []
  })
 
  return (
    <div className="App">
      <div className = "container-fluid py-5">
        <h1>US Citizenship Test Prep</h1>
        <span className="results"><strong>Correct Answers: </strong>{testPerformance.correctAnswers}</span>
        <span className="results"><strong>Incorrect Answers: </strong>{testPerformance.incorrectAnswers}</span>
        <span className="results"><strong>Questions to Review: </strong> {testPerformance.questionsToReview.map((questionId) => <span>| {questionId} |</span>)}</span>
      </div>
      
      <QuestionsContainer testPerformance = {testPerformance} setTestPerformance={setTestPerformance}/>
    </div>
  );
}

export default App;
