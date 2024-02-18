import React from "react";
import './DarkModeSwitch.css';

export default function DarkModeSwitch({ darkMode, ...rootAttributes }) {
    return (
        <div className="main">
            <label className="switch" { ...rootAttributes}>
                <input type="checkbox" name="dark" id="dark" />
                <span className="slider"></span>
            </label>
        </div>
    )
}