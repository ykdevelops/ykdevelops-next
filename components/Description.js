import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Description() {
    return (
        <div><div //Intro - image
            className={styles.layer}
        >

            <div className={styles.leftHalf}>

                <Suspense
                    fallback={<div className={styles.loaderImage}></div>}
                >
                    <Image
                        src='/descriptionArt.png'
                        alt='tech logos'
                        width={500}
                        height={500}
                        className={styles.descriptionImage}
                    />
                </Suspense>
            </div>
            <div className={styles.rightHalf}>

                <div className={styles.textContainer}>

                    <p className={styles.introDescription}>
                    </p>
                    <p className={styles.introDescription}>
                        I harness the power of JavaScript frameworks like  <strong>React</strong> and <strong>Vue</strong> to deliver seamless and responsive experiences across various devices.
                    </p>

                </div>
            </div>
        </div></div>
    )
}
