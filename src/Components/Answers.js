import React from "react";
import RightButton from "./RightButton";
import WrongButton from "./WrongButton";


function Answers({ questionObject }) {
    const mappedAnswers = questionObject.answers.map(answer => <p>{answer}</p>)

    return(
        <>
        {mappedAnswers}
        <div>
            <button>Correct</button>
            <button>Incorrect</button>
        </div>
        
        </>
    )
}

export default Answers;