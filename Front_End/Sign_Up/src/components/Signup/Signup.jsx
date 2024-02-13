import React, { useState } from "react";
import AnimatedTextInput from "../AnimatedTextInput/AnimatedTextInput";

function Inputs({ signup, darkMode }) {

    if (!signup) {
        return (
            <>
                <AnimatedTextInput placeholder="Username" name="username" id="username" type="text" autoComplete="name" darkMode={ darkMode } />

                <br />
                <AnimatedTextInput placeholder="Password" name="password" id="password" type="password" autoComplete="current-password" darkMode={ darkMode } />
            </>
        )
    }
    else {
        return (
            <>
                <AnimatedTextInput placeholder="Roll No." name="roll" id="roll" type="text" maxLength="7" darkMode={ darkMode } />
                <br />
                <AnimatedTextInput placeholder="Username" name="username" id="username" type="text" autoComplete="name" darkMode={ darkMode } />
                <br />
                <AnimatedTextInput placeholder="Password" name="password" id="password" type="password" autoComplete="new-password" darkMode={ darkMode } />
                <br />
                <AnimatedTextInput placeholder="Confirm Password" name="confirm" id="confirm" type="password" autoComplete="new-password" darkMode={ darkMode } />
            </>
        )
    }
}

export default function Signup({ darkMode }) {

    const [signup, setSignup] = useState(false);
    
    return (
        <div className={ darkMode ? "signup darkMode" : "signup"}>
            <form signup={ signup } className="signup-form" method="POST">
                <div className={ darkMode ? "signup-title dark" : "signup-title"}>
                    { signup ? "Sign Up" : "Log In" }
                </div>
                
                <div className="inputs">
                    <Inputs signup={ signup } darkMode={ darkMode }></Inputs>
                </div>

                <div className="submit-div">
                    <button type="submit" className={ darkMode ? "submit dark" : "submit"}>{ signup ? "Sign Up" : "Log In" }</button>
                </div>

                <hr />
                
                <div className="text-div">
                    <p className="text">{ signup ? "Already have an account?" : "New to Instigram?"}</p>
                    <a onClick={() => {setSignup(!signup)}}>{ signup ? "Log In" : "Sign Up"}</a>
                </div>
            </form>
        </div>
    )
}