import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/LaptopHome.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
export default function WorkExperience() {
    return (
        <div><div // Work Experience
            className={styles.layer}
        >
            <div className={styles.workContainer}>
                <div className={styles.workTitle}>Work Experience</div>
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
                        <div className={styles.workCompany}>
                            QuoteMedia, Inc. - Intermediate Front End Developer
                        </div>
                        <div className={styles.workDate}>August 2022 - March 2023</div>
                        <div className={styles.workDescription}>
                            Developed responsive web applications using VueJS and
                            customized finacial web widgets (Qmods).
                        </div>
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
                        <div className={styles.workCompany}>
                            SpeakHabla - Junior Full Stack Developer
                        </div>
                        <div className={styles.workDate}>
                            April 2022 - September 2022
                        </div>
                        <div className={styles.workDescription}>
                            Developed BELA (Business English Level Assessment), a website
                            english level assesment built using ReactJS and Firebase.
                        </div>
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
                        <div className={styles.workCompany}>
                            IBM/SLiDE - Junior Front End Developer
                        </div>
                        <div className={styles.workDate}>
                            September 2021 - December 2021
                        </div>
                        <div className={styles.workDescription}>
                            Developed a progressive web application using ReactJS in
                            partnership with NBIFC. Assisted with user testing and
                            provided ongoing maintenance for multiple Wordpress sites for
                            SLiDE clients.
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
