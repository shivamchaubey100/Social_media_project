import React, { useEffect, useState } from "react";
import AnimatedTextInput from "../AnimatedTextInput/AnimatedTextInput";
import './Signup.css'

export default function Signup({ darkMode, handleSubmit }) {

    const [show, setShow] = useState(false);
    const [equal, setEqual] = useState(true);
    
    function checkEqual(){
        const password = document.getElementsByName('password')[0].value;
        const confirm = document.getElementsByName('confirm')[0].value;

        setEqual(password == confirm);
    }

    return (
        <div className={ darkMode ? "signup darkMode" : "signup"}>
            <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                <div className={ darkMode ? "signup-title dark" : "signup-title"}>
                    Sign Up
                </div>
                
                <div className="inputs">
                    <>
                        <AnimatedTextInput defaultValue="" placeholder="Roll No." name="roll" id="roll" type="text" maxLength="7" darkMode={ darkMode } />

                        <AnimatedTextInput defaultValue="" placeholder="Username" name="username" id="username" type="text" autoComplete="name" darkMode={ darkMode } />

                        <AnimatedTextInput defaultValue="" placeholder="Password" name="password" id="password" type="password" autoComplete="new-password" darkMode={ darkMode } show={ show } setShow={ setShow } />

                        <AnimatedTextInput defaultValue="" placeholder="Confirm Password" name="confirm" id="confirm" type="password" autoComplete="new-password" darkMode={ darkMode } show={ show } setShow={ setShow }
                        onChange={ checkEqual } className={ equal ? "" : "error"} />
                    </>
                </div>

                <div className="submit-div">
                    <button type="submit" className={ darkMode ? "submit dark" : "submit"}>Sign Up</button>
                </div>

                <hr />
                
                <div className="text-div">
                    <p className="text">Already have an Account?</p>
                    <a>Log In</a>
                </div>
            </form>
        </div>
    )
}