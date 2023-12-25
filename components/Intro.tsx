import React, { Suspense } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Intro: React.FC = () => {
  return (
    <div //Intro - image
      className={styles.layer}
    >
      <div className={styles.leftHalf}>
        <Suspense fallback={<div className={styles.loaderImage}></div>}>
          <Image
            src="/introImage.png"
            alt="headshot"
            width={600}
            height={600}
            className={styles.introPic}
          />
        </Suspense>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.textContainer}>
          <h1 className={styles.introName}>Youssef Khalil</h1>
          <h1 className={styles.introJobTitle}>Web Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
