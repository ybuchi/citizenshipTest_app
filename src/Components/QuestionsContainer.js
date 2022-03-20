import React from "react";
import QuestionCard from "./QuestionCard";
import questionsData from "./data/questions"

function QuestionsContainer({testPerformance, setTestPerformance}) {

    const questionCard = questionsData.map((question) => <QuestionCard 
                                                            key={question.id}
                                                            question={question}
                                                            testPerformance = {testPerformance}
                                                            setTestPerformance={setTestPerformance}
                                                         />)

    return(
        <>
            {questionCard}
        </>
    )
}

export default QuestionsContainer;