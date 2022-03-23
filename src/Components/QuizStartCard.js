import React from "react";

function QuizStartCard({ setQuizStart }) {

    function handleSetQuizStart () {
        setQuizStart((quizStart) => !quizStart)
    }
    return(
        <>
        <h1>This is the Quiz Start Card</h1>
        <button onClick={handleSetQuizStart}>Start Quiz</button>
        </>
    )
    
}

export default QuizStartCard;