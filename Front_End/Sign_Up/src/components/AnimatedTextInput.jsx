import React from "react";
import './AnimatedTextInput.css';

export default function AnimatedTextInput({ placeholder, id, type, darkMode, ...rootAttributes }) {
    return (
        <>
            <input type={ type } name={ id } id={ id } className={darkMode ? "dark" : ""} {...rootAttributes} required />
            <label htmlFor={ id } className={darkMode ? "dark" : ""} >{ placeholder }</label>
        </>
    )
}