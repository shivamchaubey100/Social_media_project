import React, { useEffect, useState } from "react";
import AnimatedTextInput from "../AnimatedTextInput/AnimatedTextInput";

export default function Signup({ darkMode, handleSubmit, userCount, setUserCount }) {

    
    return (
        <div className={ darkMode ? "signup darkMode" : "signup"}>
            <form className="signup-form" onSubmit={(e) => {
                setUserCount(userCount + 1);
                handleSubmit(e);
                }}>
                <div className={ darkMode ? "signup-title dark" : "signup-title"}>
                    Sign Up
                </div>
                
                <div className="inputs">
                    <>
                        <AnimatedTextInput defaultValue="" placeholder="Roll No." name="roll" id="roll" type="text" maxLength="7" darkMode={ darkMode } />
                        <br />
                        <AnimatedTextInput defaultValue="" placeholder="Username" name="username" id="username" type="text" autoComplete="name" darkMode={ darkMode } />
                        <br />
                        <AnimatedTextInput defaultValue="" placeholder="Password" name="password" id="password" type="password" autoComplete="new-password" darkMode={ darkMode } />
                        <br />
                        <AnimatedTextInput defaultValue="" placeholder="Confirm Password" name="confirm" id="confirm" type="password" autoComplete="new-password" darkMode={ darkMode } />
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