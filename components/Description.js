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
                        src='/portfolio-descriptionImage2.png'
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
                        I specialize in Web Developement, with a heavy focus on creating exceptional user experiences across various devices.
                    </p>
                </div>
            </div>
        </div>
    )
}
