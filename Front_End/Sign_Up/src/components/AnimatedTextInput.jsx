import React from "react";
import './AnimatedTextInput.css';

export default function AnimatedTextInput({ placeholder, id, type, darkMode }) {
    return (
        <>
            <input type={ type } name={ id } id={ id } className={darkMode ? "dark" : ""} required />
            <label htmlFor={ id } className={darkMode ? "dark" : ""} >{ placeholder }</label>
        </>
    )
}