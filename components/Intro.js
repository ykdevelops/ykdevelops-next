import React, { Suspense } from "react";
import Image from "next/image";

import styles from "../styles/Home.module.css";

function Intro() {
  const textArray = ["Intermediate Web Developer", "Third year Computer Science @uOttawa"];

  return (
    <div className={styles.layer}>
      <div className={styles.leftHalf}>
        <Suspense
          fallback={
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/introGif-min.png"
              alt="headshot"
              width={500}
              height={500}
              className={styles.contactImage}
            />
          }
        >
          <Image
            src="https://ykdevelops.s3.us-east-2.amazonaws.com/intro/introArtCompressed.gif"
            alt="headshot"
            width={600}
            height={600}
            className={styles.introPic}
            priority
          />
        </Suspense>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.textContainer}>
         <span className={styles.introName}>Youssef Khalil</span>
          <div className={styles.introDescription}>
            {textArray.map((text, index) => (
              <h2 key={index} className={styles.introDescriptionLine}>
                {text}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
