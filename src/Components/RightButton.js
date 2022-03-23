import React from "react";

function RightButton({testPerformance, setTestPerformance}) {
    function handleCorrectAnswer () {
        const newCorrectAnswer = ++testPerformance.correctAnswers;
        setTestPerformance({...testPerformance, "correctAnswers" : newCorrectAnswer});
        console.log(testPerformance);
        // setTestPerformance()
    }
    
    return(
        <div>
            <button type="button" 
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
                    onClick={handleCorrectAnswer}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light">
                        I Got It Right!
            </button>
        </div>
    )
}

export default RightButton;