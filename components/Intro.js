import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Intro() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [" Web Developer", " Music Producer", "n A.I Enthusiast"];
  const typingDelay = 1000;
  const deletingDelay = 100;
  const loop = true;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(
        isDeleting ? deletingDelay : typingSpeed
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), typingDelay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <div //Intro - image
      className={styles.layer}
    >
      <div className={styles.leftHalf}>
        <Image
          src="/outro3.gif"
          alt="headshot"
          width={600}
          height={600}
          className={styles.introPic}
        />
      </div>
      <div className={styles.rightHalf}>

        <div className={styles.textContainer}>
          <h1 className={styles.introJobTitle}>Hello, my name is</h1>
          <h1 className={styles.introJobTitle}>Youssef Khalil</h1>
          <h1 className={styles.introJobTitle}>
            I am a
            <span
              className="txt-rotate"
              data-period="2000"
              data-rotate={JSON.stringify(textArray)}
            >
              {text}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Intro;
