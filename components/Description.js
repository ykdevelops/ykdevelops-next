import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/Description.module.css'
export default function Description() {
    return (
        <div //Intro - image
            className={homeStyles.layer}
        >

            <div className={homeStyles.leftHalf}>

                <Suspense
                    fallback={<div className={homeStyles.loaderImage}></div>}
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
            <div className={homeStyles.rightHalf}>

                <div className={homeStyles.textContainer}>
                    <h3 className={styles.descriptionText}>
                        Whether it's crafting innovative websites or diving into cutting-edge AI research, I am driven by a relentless pursuit of creativity.
                    </h3>
                </div>
            </div>
        </div>
    )
}
