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
      <h1>US Citizenship Test</h1>
      <p># of Correct Answers: {testPerformance.correctAnswers}</p>
      <p># of Incorrect Answers: {testPerformance.incorrectAnswers}</p>
      <p>Questions to Review: {testPerformance.questionsToReview.map((questionId) => <span>| {questionId} |</span>)}</p>
      <QuestionsContainer testPerformance = {testPerformance} setTestPerformance={setTestPerformance}/>
    </div>
  );
}

export default App;
