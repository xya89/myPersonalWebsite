'use client'
import { useState } from "react";

export function FadeText({ diyStyle, defaultText, hoverText, duration }) {
    const [text, setText] = useState(defaultText);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleMouseEnter = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setText(hoverText);
            setIsFadingOut(false);
        }, duration / 2); // Duration should match the CSS transition duration
    };

    const handleMouseLeave = () => {
        setIsFadingOut(true);
        setTimeout(() => {
            setText(defaultText);
            setIsFadingOut(false);
        }, duration / 2); // Duration should match the CSS transition duration
    };

    return (
        <div
            className={`
            ${diyStyle}
            transition-opacity duration-${duration} ease-in-out transform 
            ${isFadingOut ? 'opacity-0' : 'opacity-100'}
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </div>
    );
}