import React from "react";

function WrongButton({testPerformance, setTestPerformance, questionId}) {
    function handleIncorrectAnswer () {
        const newIncorrectAnswer = ++testPerformance.incorrectAnswers;
        setTestPerformance({...testPerformance, "incorrectAnswers" : newIncorrectAnswer, "questionsToReview" : [...testPerformance.questionsToReview, questionId]});
        console.log(testPerformance);
    }
    return(
            <button type="button" class="btn btn-danger" onClick={handleIncorrectAnswer}>I Got It Wrong...</button>
    )
}

export default WrongButton