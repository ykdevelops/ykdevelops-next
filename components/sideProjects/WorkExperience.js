import React, { Suspense, lazy, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
export default function WorkExperience() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    const handleLearnMoreClick1 = () => {
        setShowDetails1(!showDetails1);
    };

    const handleLearnMoreClick2 = () => {
        setShowDetails2(!showDetails2);
    };

    const handleLearnMoreClick3 = () => {
        setShowDetails3(!showDetails3);
    };

    return (
        <div // Work Experience
            className={styles.layer}
        >
            <div className={styles.workContainer}>
                <div className={styles.sectionTitleRow}>
                    <MdWorkOutline className={styles.sectionTitleIcon} />
                    <h1>Professional Experience</h1>
                </div>
                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
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
                        {showDetails1 ? (
                            <div className={styles.workDescriptionBox}>
                                <p className={styles.workDescription}>
                                    Task: Collaborate with a 6-member marketing team, transform Adobe XD designs into functioning applications.
                                </p>
                                <p className={styles.workDescription}>
                                    Action: Employed Astro and Vue.js for creating responsive web applications and worked closely with the design team to transform their Adobe XD designs into functional web solutions through Jira tickets.
                                </p>
                                <p className={styles.workDescription}>
                                    Result: Successfully translated design concepts into functional code, contributing to the modernization of the company&apos;s marketing websites. The delivered web applications enhanced user engagement, providing a more interactive experience.
                                </p>
                            </div>
                        ) : null}
                        <button onClick={handleLearnMoreClick1} className={styles.learnMoreButton}>
                            {showDetails1 ? (
                                <>
                                    Less Details <IoMdArrowDropup />
                                </>
                            ) : (
                                <>
                                    More Details <IoMdArrowDropdown />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
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
                        {showDetails2 ? (
                            <>
                                <p className={styles.workDescription}>
                                    Task: Patch runtime errors and glitches in the BELA (Business English Level Assessment) testing process. Finish administrative portal and Instructors portal.
                                </p>
                                <p className={styles.workDescription}>
                                    Action: Refactored some of the ReactJS code to resolve runtime errors. This included fixing undefined variables, null references, and enhancing data validation. Additionally, I added new features to the admin portal, like advanced user management and test result controls.
                                </p>
                                <p className={styles.workDescription}>
                                    Result: While BELA accurately assessed business English proficiency, it received mixed user feedback during its initial stages. Unfortunately, the project was discontinued due to insufficient funding.
                                </p>
                            </>
                        ) : null}
                        <button role="button" onClick={handleLearnMoreClick2} className={styles.workLearnMoreButton}>
                            {showDetails2 ? (
                                <>
                                    Less Details <IoMdArrowDropup />
                                </>
                            ) : (
                                <>
                                    More Details <IoMdArrowDropdown />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
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
                        {showDetails3 ? (
                            <>
                                <p className={styles.workDescription}>
                                    Task: Create a more modern design for a web application for NBIFC.
                                </p>
                                <p className={styles.workDescription}>
                                    Action: Created a new and responsive design using AdobeXD, then brought it to life using ReactJS. Additionally, I conducted user testing for performance optimization and performed maintenance on multiple WordPress websites for SLiDE clients.
                                </p>
                                <p className={styles.workDescription}>
                                    Result: Successfully delivered a close to production web application, improving the user experience and modernizing the page&apos;s aesthetic and responsiveness. Conducted user testing for performance optimization and managed maintenance of multiple WordPress websites for SLiDE clients.
                                </p>
                            </>
                        ) : null}
                        <button onClick={handleLearnMoreClick3} className={styles.learnMoreButton}>
                            {showDetails3 ? (
                                <>
                                    Less Details <IoMdArrowDropup className={styles.workDescriptionButtonIcon} />
                                </>
                            ) : (
                                <>
                                    More Details <IoMdArrowDropdown className={styles.workDescriptionButtonIcon} />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
