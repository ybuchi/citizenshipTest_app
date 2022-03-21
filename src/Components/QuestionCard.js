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
            <div className = "col">
                <div className="card card-custom">
                    <header class="card-header card-header-custom" onClick={handleRevealAnswer}>
                        <p>Question #{question.id}</p> 
                        <p><strong>{question.question}</strong></p>
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
            </div>
        </>
    )
}

export default QuestionCard;