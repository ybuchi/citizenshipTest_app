import React from "react";
import Answers from "./Answers";

function QuestionCard({question}) {
    console.log("This is a question: ", question);
    return(
        <>
            <header>Question #{question.id}</header>
            <h3>{question.question}</h3>
            <Answers question={question}/>
        </>
    )
}

export default QuestionCard;