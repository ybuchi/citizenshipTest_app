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
        <div className = "container">
            <div className = "row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {questionCard}
            </div>
        </div>
            
        </>
    )
}

export default QuestionsContainer;