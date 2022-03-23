import './App.css';
import QuestionsContainer from "./Components/QuestionsContainer"
import Jumbotron from './Components/Jumbotron';
import React, { useState } from "react";

function App() {
  const [testPerformance, setTestPerformance] = useState({
    "correctAnswers" : 0,
    "incorrectAnswers" : 0,
    "questionsToReview" : []
  })
 
  return (
    <div className="App">
      <Jumbotron testPerformance={testPerformance}/>
      <QuestionsContainer testPerformance = {testPerformance} setTestPerformance={setTestPerformance}/>
    </div>
  );
}

export default App;
