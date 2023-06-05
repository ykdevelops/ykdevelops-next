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
        newUtterance.onend = () => {
            setPlaying(false);
        };
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
            const tags = 'p, h1, h2, h3, h4, h5, h6, li';
            const elements = document.querySelectorAll(tags);
            const text = Array.from(elements).map((el) => el.textContent).join(' ');

            utterance.text = text;
            synth.cancel();
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
        <div className={styles.speakButton} onClick={playing ? pauseSpeech : playSpeech}>
            <div className={styles.speakTitle} >{playing ? 'Stop Listening' : 'Listen to Text'}</div>
            <button className="speak-button__button">
                {playing ? (
                    <Suspense fallback={<div className={styles.loaderImage}></div>}>
                        <Image
                            src="/playpause.svg"
                            alt="Pause Icon" width={24} height={24}
                            className={styles.speakIcon}
                        />
                    </Suspense>
                ) : (
                    <Suspense fallback={<div className={styles.loaderImage}></div>}>
                        <Image
                            src="/play.svg"
                            alt="Play Icon" width={24} height={24}
                            className={styles.speakIcon}
                        />
                    </Suspense>
                )}
            </button>

            <style jsx>{`
        .speak-button {

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
