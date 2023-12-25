import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
export default function WorkExperience() {
    return (
        <div // Work Experience
            className={styles.layer}
        >
            <div className={styles.workContainer}>

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
                            Task :
                            Collaborate with a 6-member marketing team, transform
                            Adobe XD designs into functioning applications.
                        </p>
                        <p className={styles.workDescription}>
                            Action :
                            Employed Astro and Vue.js for creating responsive web
                            applications and worked closely with the design team to transform their
                            Adobe XD designs into functional web solutions through Jira tickets.

                        </p>
                        <p className={styles.workDescription}>
                            Result :
                            Successfully translated design concepts into functional code,
                            contributing to the modernization of the company's marketing websites.
                            The delivered web applications enhanced user engagement, providing a
                            more interactive experience.
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
                            Task :
                            Collaborate with a 6-member marketing team, transform
                            Adobe XD designs into functioning applications.
                        </p>
                        <p className={styles.workDescription}>
                            Action :
                            Employed Astro and Vue.js for creating responsive web
                            applications and worked closely with the design team to transform their
                            Adobe XD designs into functional web solutions through Jira tickets.

                        </p>
                        <p className={styles.workDescription}>
                            Result :
                            Successfully translated design concepts into functional code,
                            contributing to the modernization of the company's marketing websites.
                            The delivered web applications enhanced user engagement, providing a
                            more interactive experience.
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
                            Task :
                            Collaborate with a 6-member marketing team, transform
                            Adobe XD designs into functioning applications.
                        </p>
                        <p className={styles.workDescription}>
                            Action :
                            Employed Astro and Vue.js for creating responsive web
                            applications and worked closely with the design team to transform their
                            Adobe XD designs into functional web solutions through Jira tickets.

                        </p>
                        <p className={styles.workDescription}>
                            Result :
                            Successfully translated design concepts into functional code,
                            contributing to the modernization of the company's marketing websites.
                            The delivered web applications enhanced user engagement, providing a
                            more interactive experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
