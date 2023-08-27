import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Description() {
    return (
        <div //Intro - image
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
                        As an experienced web developer, I specialize in architecting and scaling applications using JavaScript frameworks like React and Vue.
                    </p>
                    <p className={styles.introDescription}>
                        My focus is on creating not just functional, but exceptional user experiences that perform seamlessly across various devices.
                    </p>
                </div>
            </div>
        </div>
    )
}
