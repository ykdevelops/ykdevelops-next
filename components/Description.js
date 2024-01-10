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
                        src='https://ykdevelops.s3.us-east-2.amazonaws.com/description/description4.gif'
                        alt='tech logos'
                        width={400}
                        height={400}
                        className={styles.descriptionImage}
                    />
                </Suspense>
            </div>
            <div className={styles.rightHalf}>

                <div className={styles.textContainer}>
                    <h2 className={styles.introDescription}>
                        Whether it's crafting innovative websites, producing captivating music, or diving into cutting-edge AI research, I am driven by a relentless pursuit of creativity.
                    </h2>
                </div>
            </div>
        </div>
    )
}
