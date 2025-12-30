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
          <div className={styles.contactIconLinks}>
              <a
                href="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/Youssef_Khalil_2025_Resume+(3).pdf"
                target="_blank"
                rel="noreferrer"
                download
                className={styles.contactIconLink}
              >
                <Suspense fallback={<div className={styles.loaderImage}></div>}>
                  <Image
                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/resumeIcon.png"
                    alt="Resume"
                    width={397}
                    height={512}
                    className={styles.contactIconSmall}
                  />
                </Suspense>
                <span className={styles.contactIconLabel}>Resume</span>
              </a>

              <a
                href="https://linkedin.com/in/ykdevelops"
                target="_blank"
                rel="noreferrer"
                className={styles.contactIconLink}
              >
                <Suspense fallback={<div className={styles.loaderImage}></div>}>
                  <Image
                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/linkedin2.png"
                    alt="linkedin"
                    width={500}
                    height={500}
                    className={styles.contactIconSmall}
                  />
                </Suspense>
                <span className={styles.contactIconLabel}>LinkedIn</span>
              </a>

              <a
                href="https://github.com/ykdevelops"
                target="_blank"
                rel="noreferrer"
                className={styles.contactIconLink}
              >
                <Suspense fallback={<div className={styles.loaderImage}></div>}>
                  <Image
                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/github.png"
                    alt="github"
                    width={500}
                    height={500}
                    className={styles.contactIconSmall}
                  />
                </Suspense>
                <span className={styles.contactIconLabel}>GitHub</span>
              </a>

              <a
                href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg"
                target="_blank"
                rel="noreferrer"
                className={styles.contactIconLink}
              >
                <Suspense fallback={<div className={styles.loaderImage}></div>}>
                  <Image
                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/youtube1.png"
                    alt="youtube"
                    width={500}
                    height={500}
                    className={styles.contactIconSmall}
                  />
                </Suspense>
                <span className={styles.contactIconLabel}>YouTube</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
