import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
export default function WorkExperience() {
    return (
        <div><div // Work Experience
            className={styles.layer}
        >
            <div className={styles.workContainer}>
                <h1 className={styles.workTitle}>Work Experience</h1>
                <div className={styles.workCompany}>
                    <Suspense
                        fallback={<div className={styles['loading-image']}></div>}
                    >
                        <Image
                            src='/qm.jpeg'
                            alt='QuoteMediaLogo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>
                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>
                            QuoteMedia, Inc. - Intermediate Front End Developer
                        </h1>
                        <h2 className={styles.workDate}>August 2022 - March 2023</h2>
                        <p className={styles.workDescription}>
                            Developed responsive web applications using VueJS and
                            customized finacial web widgets (Qmods).
                        </p>
                    </div>
                </div>
                <div className={styles.workCompany}>
                    <Suspense
                        fallback={<div className={styles['loading-image']}></div>}
                    >
                        <Image
                            src='/speakHablaLogo.jpeg'
                            alt='speakHablaLogo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>

                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>
                            SpeakHabla - Junior Full Stack Developer
                        </h1>
                        <h2 className={styles.workDate}>
                            April 2022 - September 2022
                        </h2>
                        <p className={styles.workDescription}>
                            Developed BELA (Business English Level Assessment), a website
                            english level assesment built using ReactJS and Firebase.
                        </p>
                    </div>
                </div>
                <div className={styles.workCompany}>
                    <Suspense
                        fallback={<div className={styles['loading-image']}></div>}
                    >
                        <Image
                            src='/ibm-logo.jpeg'
                            alt='IBM_logo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>
                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>
                            IBM/SLiDE - Junior Front End Developer
                        </h1>
                        <h2 className={styles.workDate}>
                            September 2021 - December 2021
                        </h2>
                        <p className={styles.workDescription}>
                            Developed a progressive web application using ReactJS in
                            partnership with NBIFC. Assisted with user testing and
                            provided ongoing maintenance for multiple Wordpress sites for
                            SLiDE clients.
                        </p>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
