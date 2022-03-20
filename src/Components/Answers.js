import React from "react";

function Answers({question}) {
    console.log(question);
    const mappedAnswers = question.answers.map((answer, index)=><li id={index}>{answer}</li>)

    return(
        <ul>
            {mappedAnswers}
        </ul>
        
    )
}

export default Answers;