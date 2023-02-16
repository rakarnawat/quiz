import React, { useRef } from 'react';
import "../QuestionInstruction/PBQuestionInstructionStyles.css";

export default function PBQuesInstruction(){
    const inputRef = useRef(null)
    return(
        <div className='MainContainer'>
            <div className='TitleStyle'>
            <h1 className='TitleText'>
            PERSONAL BELIEFS QUIZ
            </h1>
            </div>
            <div className='InstructionStyle'>
            <p className='InstructionText'>
            This section contains a number of statements about various issues.  You need to select the extent to which you agree or disagree with each statement.  There are no right or wrong answers in this section.  Read each statement  and respond accurately and candidly.  Using the rating scale given, chose the answer that matches the extent of your agreement.
            <br/><br/>Enter the B-Number and Click on the button below to go to the Personal Beliefs Statements.
            </p>
            <form id='form' className='inputStyle' action='/PBQuiz' >
                <input ref={inputRef} className='inputText' required pattern="[b,B]{1}[0-9]{8}" type="text" placeholder='Please enter your B-Number'/>
                <div className='StartQuizButton'>
                <input className='StartQuizText' type="submit" value="Start Quiz"></input>
                </div>
            </form>
            </div>
        </div>
    )
}