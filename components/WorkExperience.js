import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function WorkExperience() {

    return (
        <div className={styles.layer}>
            <div className={styles.workContainer}>
                <div className={styles.containerTitleRow}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/workIcon.gif'
                            alt='work icon'
                            width={150}
                            height={150}
                            className={styles.sectionTitleIcon}
                        />
                    </Suspense>
                    <h1 className={styles.sectionTitle}>Professional Experience</h1>
                </div>

                {/* QuoteMedia Experience */}
                <div className={styles.workCompany}>
                    <div className={styles.workCompanyHeader}>
                        <Suspense fallback={<div className={styles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/qm.jpeg'
                                alt='QuoteMedia logo'
                                width={150}
                                height={150}
                                className={styles.workLogo}
                            />
                        </Suspense>
                        <div className={styles.workInfo}>
                            <h1 className={styles.workCompanyTitle}>
                                QuoteMedia, Inc. - Intermediate Front End Developer
                            </h1>
                            <h2 className={styles.workDate}>August 2022 - March 2023</h2>
                            <p className={styles.workDescription}>
                                Delivered web solutions that significantly enhanced user engagement and provided an improved, interactive experience, aligning with the company's marketing objectives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* SpeakHabla Experience */}
                <div className={styles.workCompany}>
                    <div className={styles.workCompanyHeader}>
                        <Suspense fallback={<div className={styles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/speakHablaLogo.jpeg'
                                alt='SpeakHabla logo'
                                width={150}
                                height={150}
                                className={styles.workLogo}
                            />
                        </Suspense>
                        <div className={styles.workInfo}>
                            <h1 className={styles.workCompanyTitle}>SpeakHabla - Junior Full Stack Developer</h1>
                            <h2 className={styles.workDate}>April 2022 - September 2022</h2>
                            <p className={styles.workDescription}>
                                Improved the system's functionality and reliability, enabling BELA to accurately assess business English proficiency. Despite positive technical contributions, the project was ultimately discontinued due to funding challenges.
                            </p>
                        </div>
                    </div>
                </div>

                {/* IBM/SLiDE Experience */}
                <div className={styles.workCompany}>
                    <div className={styles.workCompanyHeader}>
                        <Suspense fallback={<div className={styles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/ibm-logo.jpeg'
                                alt='IBM logo'
                                width={150}
                                height={150}
                                className={styles.workLogo}
                            />
                        </Suspense>
                        <div className={styles.workInfo}>
                            <h1 className={styles.workCompanyTitle}>IBM/SLiDE - Junior Front End Developer</h1>
                            <h2 className={styles.workDate}>September 2021 - December 2021</h2>
                            <p className={styles.workDescription}>
                                Delivered a quality web application that enhanced user experience through a modernized aesthetic and improved responsiveness. Successfully optimized performance based on user feedback and maintained a portfolio of WordPress sites for client satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
