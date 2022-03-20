import React from "react";

function RightButton({testPerformance, setTestPerformance}) {
    function handleCorrectAnswer () {
        const newCorrectAnswer = ++testPerformance.correctAnswers;
        setTestPerformance({...testPerformance, "correctAnswers" : newCorrectAnswer});
        console.log(testPerformance);
        // setTestPerformance()
    }
    
    return(
            <button type="button" class="btn btn-success" onClick={handleCorrectAnswer}>I Got It Right!</button>
    )
}

export default RightButton;