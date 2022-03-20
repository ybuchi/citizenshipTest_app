import React from "react";
import QuestionCard from "./QuestionCard";
import questionsData from "./data/questions"

function QuestionsContainer() {

    const questionCard = questionsData.map((question) => <QuestionCard 
                                                            key={question.id}
                                                            question={question}/>)

    return(
        <>
            <h1>This is a question</h1>

                {questionCard}

        </>
    )
}

export default QuestionsContainer;