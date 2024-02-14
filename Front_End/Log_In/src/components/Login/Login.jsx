import React, { useEffect, useState } from "react";
import AnimatedTextInput from "./../../../../Sign_Up/src/components/AnimatedTextInput/AnimatedTextInput";

export default function Login({ darkMode, handleSubmit }) {

    
    return (
        <div className={ darkMode ? "signup darkMode" : "signup"}>
            <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
                <div className={ darkMode ? "signup-title dark" : "signup-title"}>
                    Log In
                </div>
                
                <div className="inputs">
                    <>
                        <AnimatedTextInput defaultValue="" placeholder="Username" name="username" id="username" type="text" autoComplete="name" darkMode={ darkMode } />
                        <br />
                        <AnimatedTextInput defaultValue="" placeholder="Password" name="password" id="password" type="password" autoComplete="new-password" darkMode={ darkMode } />
                    </>
                </div>

                <div className="submit-div">
                    <button type="submit" className={ darkMode ? "submit dark" : "submit"}>Log In</button>
                </div>

                <hr />
                
                <div className="text-div">
                    <p className="text">New to Instigram?</p>
                    <a>Sign Up</a>
                </div>
            </form>
        </div>
    )
}