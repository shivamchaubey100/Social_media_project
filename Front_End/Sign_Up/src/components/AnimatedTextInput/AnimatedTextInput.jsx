import React, { useState } from "react";
import './AnimatedTextInput.css';

import eye from './../../assets/eye-solid.svg';
import eyeSlash from './../../assets/eye-slash-solid.svg';

import eyeDark from './../../assets/eye-solid-dark.svg';
import eyeSlashDark from './../../assets/eye-slash-solid-dark.svg';


export default function AnimatedTextInput({ placeholder, id, type, darkMode, name, ...rootAttributes }) {
    const [show, setShow] = useState(false)

    if ( type == "password") {
        return (
            <>
                <input type={ show ? "text" : "password" } name={ name } id={ id } className={darkMode ? "dark" : ""} {...rootAttributes} required></input>
                <label htmlFor={ id } className={darkMode ? "dark" : ""} >{ placeholder }</label>
                <div onClick={() => setShow(!show)} className="eye">
                    <img src={ show ? eye : eyeSlash } alt="" className={ darkMode ? "dark" : ""} />
                    <img src={ show ? eyeDark : eyeSlashDark} alt="" className={ darkMode ? "" : "dark"} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <input type={ type } name={ name } id={ id } className={darkMode ? "dark" : ""} {...rootAttributes} required />
                <label htmlFor={ id } className={darkMode ? "dark" : ""} >{ placeholder }</label>
            </>
        )
    }
}