import React, { useState } from "react";
import QuizStartCard from "./QuizStartCard";
import QuestionCard from "./QuestionCard";


function QuestionsContainer({testPerformance, setTestPerformance}) {

    //Create a state that we initializeas "". It will then loop through each question and display it.
    const [quizStart, setQuizStart] = useState(false);
    const questionCard = quizStart ? <QuestionCard /> : <QuizStartCard setQuizStart={setQuizStart}/>

    return(
        <>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg place-content-center">
            {questionCard}
        </div>
            
        </>
    )
}

export default QuestionsContainer;