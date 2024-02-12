import React from "react";

export default function Card({ darkMode, children, ...rootAttributes }) {
    return (
        <div className={ darkMode ? "card darkMode" : "card" } { ...rootAttributes }>
            { children }
        </div>
    )
}