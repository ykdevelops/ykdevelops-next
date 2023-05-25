import React, { Suspense } from "react";
import Image from "next/image";
import styles from "../styles/LaptopHome.module.css";

const Intro: React.FC = () => {
  return (
    <div>
      <div //Intro - image
        className={styles.layer}
      >
        <div className={styles.leftHalf}>
          <Suspense fallback={<div className={styles.loaderImage}></div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/aboutImage.png"
              alt="headshot"
              width={600}
              height={600}
            />
          </Suspense>
        </div>
        <div className={styles.rightHalf}>
          <div className={styles.textContainer}>
            <div className={styles.introTitle}>Hello World,</div>
            <div className={styles.introTitle}>I&apos;m Youssef!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
