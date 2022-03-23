import React, { useState } from "react";
import Answers from "./Answers";
import questionsData from "./data/questions"

function QuestionCard({testPerformance, setTestPerformance}) {
    //Set state equal to the question id
    const [questionID, setQuestionID] = useState(0)
    const [answerIsRevealed, setAnswerIsRevealed] = useState(false)
    let questionObject = questionsData[questionID];

    //Refactor this
    function handleNextQuestion(){
        if(questionsData.length > questionObject.id){
            setQuestionID(questionID + 1)
            if(answerIsRevealed){
                setAnswerIsRevealed(!answerIsRevealed)
            }
        }else if(questionsData.length === questionObject.id){
            alert("Bring us to the results page!")
        }
    }
    function handlePreviousQuestion(){
        if(questionObject.id > 1){
            setQuestionID(questionID - 1)
        }else if(questionObject.id === 1){
            alert("No previous question")
        }
    }

    function handleRevealAnswer(){
        setAnswerIsRevealed(!answerIsRevealed)
    }
    
    return(
        <>
            <h1>Question {questionObject.id} / {questionsData.length}</h1>
            <header className="question">{questionObject.question}</header>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                    onClick={handlePreviousQuestion}>
                        &lt;
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleRevealAnswer}>
                        Reveal Answer
            </button>
            <button onClick={handleNextQuestion}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        &gt;
            </button>

            {answerIsRevealed ? <Answers testPerformance={testPerformance} 
                                         setTestPerformance={setTestPerformance} 
                                         questionObject={questionObject}/> : ""} 
        </>
    )
}

export default QuestionCard;