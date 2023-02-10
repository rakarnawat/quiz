import React from 'react';
import "../UserAuth/LoginStyles.css";
import Binghamton_University_pic from "../../images/Binghamton-University-pic.jpg"

export default function Login(){
    return(
        <div className='LoginMainComponent'>
            <div className='ImageSlider'>
            <img src={Binghamton_University_pic} alt="Binghamton_University" className='BinghamtonUniversityImage'/>
            </div>
            <div className='UserAuth'>
                <form id='loginForm' action='/SelectionScreen'>
                    <h1 className='headingTitle'>Login</h1>
                    <p className='headText'>Welcome to Leadership Assesment Program</p>
                    <label for='email' className='userName'>User Name</label>
                    <div className='userNameInput'>
                        <input type={'email'} classname='userNameInput' placeholder='xyz@binghamton.edu' id='email' name='email' required pattern='^[a-zA-Z0-9]+@binghamton\.edu$'/>
                    </div>
                    <label for='password' className='password'>Password</label>
                    <div className='passInput'>
                        <input type={'password'} classname='passInput' placeholder='*************' id='password' name='password' required/>
                    </div>
                    <div className='LoginButton'>
                        <input className='LoginText' type="submit" value="Login"></input>
                    </div>
                </form>
                <form id='signupForm' action='/Signup'>
                    <div className='NewUserDiv' type="submit">
                        <input className='NewUserClass' type="submit" value="New User?"></input>
                        <input className='SignupClass' type="submit" value="Signup"></input>
                    </div>
                </form>
                <form id='ForgotPasswordForm' action='/ForgotPassword'>
                    <div type="submit" >
                        <input className='ForgotPasswordClass' type="submit" value="Forgot your password?"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}