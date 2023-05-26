import React, { useEffect, useState } from 'react';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';
import { FaPlay, FaPause } from 'react-icons/fa';

const SpeakButton = () => {
    const [synth, setSynth] = useState(null);
    const [utterance, setUtterance] = useState(null);
    const [muted, setMuted] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setSynth(window.speechSynthesis);
        const newUtterance = new SpeechSynthesisUtterance();
        setUtterance(newUtterance);
    }, []);

    const toggleMute = () => {
        if (synth && utterance) {
            setMuted(!muted);
            utterance.volume = muted ? 1 : 0;
        }
    };

    const playSpeech = () => {
        if (synth && utterance) {
            // Get the text from all tags in the order they appear in the HTML
            const tags = 'p, h1, h2, h3, h4, h5, h6, li';
            const elements = document.querySelectorAll(tags);
            const text = Array.from(elements).map(el => el.textContent).join(' ');

            utterance.text = text;

            // Stop any ongoing speech
            synth.cancel();

            // Speak the text
            synth.speak(utterance);

            setPlaying(true);
        }
    };

    const pauseSpeech = () => {
        if (synth) {
            synth.cancel();
            setPlaying(false);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000,
        }}>
            {/* <button onClick={toggleMute}>
                {muted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
            </button> */}
            <button style={{ border: 'none', backgroundColor: 'transparent' }} onClick={playing ? pauseSpeech : playSpeech}>
                {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
            </button>
        </div>
    );
};

export default SpeakButton;
