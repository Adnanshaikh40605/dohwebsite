"use client";
import React, { useState } from "react"

const ToggleText = ({ initialText, toggledText }: any) => {
    const [displayText, setDisplayText] = useState(false);

    const handleClick = () => {
        setDisplayText(!displayText);
    };
    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {displayText ? <span>{toggledText}</span> : <span>{initialText}</span>}
        </div>
    )
}

export default ToggleText
