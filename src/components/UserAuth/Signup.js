import React, { useRef } from 'react';
import "../UserAuth/SignupStyles.css";
import Binghamton_University_pic from "../../images/Binghamton-University-pic.jpg"
import './PasswordValidation'

export default function Signup(){
    const inputRef = useRef(null)
    return(
        <div className='LoginMainComponent'>
            <div className='ImageSlider'>
            <img src={Binghamton_University_pic} alt="Binghamton_University" className='BinghamtonUniversityImage'/>
            </div>
            <div className='UserAuth'>
                <form id='loginForm' action='/SelectionScreen'>
                    <h1 className='headingTitle'>Signup</h1>
                    <p className='headText'>Welcome to Leadership Assesment Program</p>
                    <label className='BNumber'>B-Number</label>
                    <div className='BNumberInputText'>
                    <input ref={inputRef} required pattern="[b,B]{1}[0-9]{8}" type="text" placeholder='Please enter your B-Number'/>
                    </div>
                    <label for='email' className='userName1'>User Name</label>
                    <div className='userNameInput1'>
                        <input type={'email'} classname='userNameInput1' placeholder='xyz@binghamton.edu' id='email' name='email' required pattern='^[a-zA-Z0-9]+@binghamton\.edu$'/>
                    </div>
                    <label for='password' className='password1'>Password</label>
                    <div className='passInput1'>
                        <input type={'password'} classname='passInput1' placeholder='*************' id='password' name='password' required/>
                    </div>
                    <label for='password' className='confirmPassword'>Confirm Password</label>
                    <div className='confirmPassInput'>
                        <input type={'password'} classname='confirmPassInput' placeholder='*************' id='confirmPassword' name='confirmPassword' required/>
                    </div>
                    <div className='LoginButton1'>
                        <input className='LoginText1' type="submit" value="Login"></input>
                    </div>
                </form>
                <form id='LoginForm' action='/'>
                    <div className='LoginDiv' type="submit">
                        <input className='AlreadyMemberClass' type="submit" value="Already a Member?"></input>
                        <input className='LoginClass' type="submit" value="Login"></input>
                    </div>
                </form>
                
            </div>
        </div>
    )
}