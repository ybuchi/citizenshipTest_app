import React, { useState } from "react";
import QuizStartCard from "./QuizStartCard";
import QuestionCard from "./QuestionCard";


function QuestionsContainer({testPerformance, setTestPerformance}) {

    //Create a state that we initializeas "". It will then loop through each question and display it.
    const [quizStart, setQuizStart] = useState(false);
    const questionCard = quizStart ? <QuestionCard testPerformance={testPerformance} setTestPerformance={setTestPerformance} /> : <QuizStartCard setQuizStart={setQuizStart}/>

    return(
        <>
            {questionCard}
        </>
    )
}

export default QuestionsContainer;