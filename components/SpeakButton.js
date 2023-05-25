import React, { useEffect, useState } from 'react';

const SpeakButton = () => {
    const [synth, setSynth] = useState(null);

    useEffect(() => {
        setSynth(window.speechSynthesis);
    }, []);

    const readPageAloud = () => {
        if (synth) {
            const utterance = new SpeechSynthesisUtterance();

            // Get the text from all tags in the order they appear in the HTML
            const tags = 'p, h1, h2, h3, h4, h5, h6, li';
            const elements = document.querySelectorAll(tags);
            const text = Array.from(elements).map(el => el.textContent).join(' ');

            utterance.text = text;

            // Stop any ongoing speech
            synth.cancel();

            // Speak the text
            synth.speak(utterance);
        }
    };

    return (
        <button onClick={readPageAloud}>Read Page</button>
    );
};

export default SpeakButton;
