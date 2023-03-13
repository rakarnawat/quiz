import React, { useRef } from 'react';
import "./DDInstructions.css";

export default function DDInstructions(){
    const inputRef = useRef(null)
    return(
        <div className='ddMainContainer'>
            <div className='ddTitleContainer'>
            <h1 className='ddTitleText'>
                INSTRUCTIONS
            </h1>
            </div>
            <div className='ddInstructionContainer'>
            <p className='ddInstructionText'>
                This section provides you with some information from an experiment.  There are various conclusions drawn from the experiment.  Your task will be to review the experiment and then evaluate various assumptions from which decisions were made.  Additionally, you will evaluate the logic and appropriateness of those assumptions.
            <br/><br/>
                Although the experiment involves testing the effectiveness of using an oil additive, you do not need to know anything about engines, automobiles, or automotive oil in order to perform this exercise.  You may find it helpful to use a calculator.
            <br/><br/>
                There are 3 sections in this Critical Thinking exercise.  Each section requires you to perform a slightly different task.
            <br/><br/>
                To go to the Experiment Description, please click on the button below.
            </p>
            <form id='form' className='ddinputForm' action='/DDDescriptions' >
                <input ref={inputRef} className='ddinputText' required pattern="[b,B]{1}[0-9]{8}" type="text" placeholder='Please enter your B-Number'/>
                <div className='ddStartQuizButton'>
                <input className='ddStartQuizText' type="submit" value="Start Quiz"></input>
                </div>
            </form>
            </div>
        </div>
    )
}