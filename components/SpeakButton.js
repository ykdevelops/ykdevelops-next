import React, { useEffect, useState, Suspense } from 'react';
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
            const text = Array.from(elements).map((el) => el.textContent).join(' ');

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
        <div className="speak-button">
            <div>{playing ? 'Click to Pause' : 'Click to Play'}</div>
            <button className="speak-button__button" onClick={playing ? pauseSpeech : playSpeech}>
                {playing ? (

                    <Suspense fallback={<div className={styles.loaderImage}></div>}>
                        <Image
                            src="/playpause.svg"
                            alt="Pause Icon" width={24} height={24}
                            className={styles.listenIcon}
                        />
                    </Suspense>
                ) : (

                    <Suspense fallback={<div className={styles.loaderImage}></div>}>
                        <Image
                            src="/play.svg"
                            alt="Play Icon" width={24} height={24}
                            className={styles.listenIcon}
                        />
                    </Suspense>
                )}
            </button>

            <style jsx>{`
        .speak-button {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          z-index: 1000;
        }

        .speak-button__button {
          border: none;
          background-color: transparent;
          padding-top: 1px;
          display: flex;
          align-items: center;
        }
      `}</style>
        </div>
    );
};

export default SpeakButton;
