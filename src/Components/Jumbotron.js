import React from "react";

function Jumbotron({ testPerformance }){

    const mappedQuestions = testPerformance.questionsToReview.map((questionId) => <span>| {questionId} |</span>)
    return(
        <div className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg jumbo">
            <h1 className = "text-3xl font-bold underline">US Citizenship Test Prep</h1>
            <span className="results"><strong>Correct Answers: </strong>{testPerformance.correctAnswers}</span>
            <span className="results"><strong>Incorrect Answers: </strong>{testPerformance.incorrectAnswers}</span>
            <span className="results">
                <strong>Questions to Review: </strong>
                 {mappedQuestions}</span>
        </div>
    )
}

export default Jumbotron;