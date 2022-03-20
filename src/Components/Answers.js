import React from "react";
import RightButton from "./RightButton";
import WrongButton from "./WrongButton";


function Answers({question, isRevealed, className, testPerformance, setTestPerformance, questionId}) {

    console.log(question);
    const mappedAnswers = question.answers.map((answer, index)=><li class="answer" id={index}>{answer}</li>)

    return(
        // When we click on a question, display of the "ul" should be "none"
        <ul class={className}>
            {mappedAnswers}
            <RightButton testPerformance={testPerformance} setTestPerformance={setTestPerformance}/>
            <WrongButton testPerformance={testPerformance} setTestPerformance={setTestPerformance} questionId = {questionId}/>
        </ul>
    )
}

export default Answers;