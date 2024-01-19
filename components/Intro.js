import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

const DynamicImage = dynamic(() =>
  import("next/image").then((mod) => mod.default)
);

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
    <div className={styles.layer}>
      <div className={styles.leftHalf}>
        <Suspense
          fallback={
            <DynamicImage
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/introGif-min.png"
              alt="headshot"
              width={500}
              height={500}
              className={styles.contactImage}
            />
          }
        >
          <DynamicImage
            src="https://ykdevelops.s3.us-east-2.amazonaws.com/intro/introGif.gif"
            alt="headshot"
            width={600}
            height={600}
            className={styles.introPic}
          />
        </Suspense>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.textContainer}>
          <h2 className={styles.introJobTitle}>Hello, my name is</h2>
          <h1 className={styles.introJobTitle}>Youssef Khalil</h1>
          <h2 className={styles.introJobTitle}>
            I am a
            <span
              className="txt-rotate"
              data-period="2000"
              data-rotate={JSON.stringify(textArray)}
            >
              {text}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
