import React, { useEffect } from 'react'
import Typed from "typed.js"

const TypingAnimation = () => {
    useEffect(() => {
        const options = {
            strings: ['...'],
            typeSpeed: 50,
        };

        const typed = new Typed('.typing-animation', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <span className="typing-animation"></span>
        </div>
    );
};

export default TypingAnimation;