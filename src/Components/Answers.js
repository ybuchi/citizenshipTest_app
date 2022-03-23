import React, { useState } from "react";
import RightButton from "./RightButton";
import WrongButton from "./WrongButton";


function Answers({ questionObject, testPerformance, setTestPerformance }) {
    const mappedAnswers = questionObject.answers.map(answer => <p className="answer" key={questionObject.answers.indexOf(answer)}>{answer}</p>)
    const {correctAnswers, incorrectAnswers} = testPerformance;
    const [isClicked, setIsClicked] = useState(false)
    function handleCorrectAnswer(){
        if (!isClicked){
            setTestPerformance({...testPerformance, "correctAnswers" : (correctAnswers + 1)})
            setIsClicked(true)
        }else{
            alert("You already submitted this question")
        }
        
    }
    function handleIncorrectAnswer(){
        setTestPerformance({...testPerformance, "incorrectAnswers" : (incorrectAnswers + 1)})
    }
    return(
        <>
        <div className="answers-container">
            {mappedAnswers}
            <div>
                <button onClick={handleCorrectAnswer} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Correct
                </button>
                <button 
                        onClick={handleIncorrectAnswer} 
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Incorrect
                </button>
            </div>
        </div>
        
        </>
    )
}

export default Answers;