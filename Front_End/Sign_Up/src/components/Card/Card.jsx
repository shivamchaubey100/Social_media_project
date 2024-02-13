import React from "react";
import './Card.css';

export default function Card({ darkMode, children, ...rootAttributes }) {
    return (
        <div className={ darkMode ? "card darkMode" : "card" } { ...rootAttributes }>
            { children }
        </div>
    )
}