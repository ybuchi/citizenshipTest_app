import React, { useState } from "react";
import Answers from "./Answers";

function QuestionCard({question, testPerformance, setTestPerformance}) {
    console.log("This is a question: ", question);
    const [isRevealed, setIsRevealed] = useState(false);

    const answerRevealClass = isRevealed ? "answer-revealed" : "answer-hidden";
    function handleRevealAnswer(){
        //change the state of the individual question card
        setIsRevealed(!isRevealed)
    }
    return(
        <>
        <div class="card">
            <header class="card-header" onClick={handleRevealAnswer}>
                Question #{question.id} - <strong>{question.question}</strong>
            </header>
            <div class="card-body">
                <Answers 
                    question={question} 
                    isRevealed={isRevealed} 
                    className = {answerRevealClass} 
                    testPerformance = {testPerformance}
                    setTestPerformance={setTestPerformance}
                    questionId={question.id}
                />
            </div>
            
        </div>
        </>
    )
}

export default QuestionCard;