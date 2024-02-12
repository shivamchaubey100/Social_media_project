import React, { useState } from "react";
import AnimatedTextInput from "./AnimatedTextInput";

function Inputs({ action, darkMode }) {

    if (!action) {
        return (
            <>
                <AnimatedTextInput placeholder="Username" id="username" type="text" darkMode={darkMode} />

                <br />
                <AnimatedTextInput placeholder="Password" id="password" type="password" darkMode={darkMode} />
            </>
        )
    }
    else {
        return (
            <>
                <AnimatedTextInput placeholder="Roll No." id="roll" type="text" darkMode={darkMode} />
                <br />
                <AnimatedTextInput placeholder="Username" id="username" type="text" darkMode={darkMode} />
                <br />
                <AnimatedTextInput placeholder="Password" id="password" type="password" darkMode={darkMode} />
            </>
        )
    }
}

export default function Signup({ darkMode }) {

    const [action, setAction] = useState(false);
    
    return (
        <div className={ darkMode ? "signup darkMode" : "signup"}>
            <form action="#" className="signup-form">
                <div className="signup-title">
                    { action ? "Sign Up" : "Log In" }
                </div>
                
                <div className="inputs">
                    <Inputs action={ action } darkMode={ darkMode }></Inputs>
                </div>

                <div className="submit-div">
                    <button type="submit" className="submit">{ action ? "Sign Up" : "Log In" }</button>
                </div>

                <hr />
                
                <div className="text-div">
                    <p className="text">{ action ? "Already have an account?" : "New to Instigram?"}</p>
                    <a onClick={() => {setAction(!action)}}>{ action ? "Log In" : "Sign Up"}</a>
                </div>
            </form>
        </div>
    )
}