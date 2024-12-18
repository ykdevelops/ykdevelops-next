import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function WorkExperience() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    const toggleDetails = (setShowDetails, showDetails) => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={styles.layer}>
            <div className={styles.workContainer}>
                <div className={styles.containerTitleRow}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/workIcon.gif'
                            alt='workIcon'
                            width={150}
                            height={150}
                            className={styles.sectionTitleIcon}
                        />
                    </Suspense>
                    <h1 className={styles.sectionTitle}>Professional Experience</h1>
                </div>

                {/* QuoteMedia Experience */}
                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/qm.jpeg'
                            alt='QuoteMediaLogo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>
                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>QuoteMedia, Inc. - Intermediate Front End Developer</h1>
                        <h2 className={styles.workDate}>August 2022 - March 2023</h2>
                        <div className={`${styles.details} ${showDetails1 ? styles.show : ''}`}>
                            <p className={styles.workDescription}>
                                Task: Collaborate with a 6-member marketing team, transform Adobe XD designs into functioning applications.
                            </p>
                            <p className={styles.workDescription}>
                                Action: Employed Astro and Vue.js for creating responsive web applications and worked closely with the design team to transform their Adobe XD designs into functional web solutions through Jira tickets.
                            </p>
                            <p className={styles.workDescription}>
                                Result: Successfully translated design concepts into functional code, contributing to the modernization of the company's marketing websites. The delivered web applications enhanced user engagement, providing a more interactive experience.
                            </p>
                        </div>
                        <button
                            onClick={() => toggleDetails(setShowDetails1, showDetails1)}
                            className={styles.learnMoreButton}
                        >
                            {showDetails1 ? (
                                <>
                                    <p>Less Details</p>
                                    <IoMdArrowDropup />
                                </>
                            ) : (
                                <>
                                    <p>More Details</p>
                                    <IoMdArrowDropdown />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* SpeakHabla Experience */}
                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/speakHablaLogo.jpeg'
                            alt='speakHablaLogo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>
                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>SpeakHabla - Junior Full Stack Developer</h1>
                        <h2 className={styles.workDate}>April 2022 - September 2022</h2>
                        <div className={`${styles.details} ${showDetails2 ? styles.show : ''}`}>
                            <p className={styles.workDescription}>
                                Task: Patch runtime errors and glitches in the BELA (Business English Level Assessment) testing process. Finish administrative portal and Instructors portal.
                            </p>
                            <p className={styles.workDescription}>
                                Action: Refactored some of the ReactJS code to resolve runtime errors. This included fixing undefined variables, null references, and enhancing data validation. Additionally, I added new features to the admin portal, like advanced user management and test result controls.
                            </p>
                            <p className={styles.workDescription}>
                                Result: While BELA accurately assessed business English proficiency, it received mixed user feedback during its initial stages. Unfortunately, the project was discontinued due to insufficient funding.
                            </p>
                        </div>
                        <button
                            onClick={() => toggleDetails(setShowDetails2, showDetails2)}
                            className={styles.learnMoreButton}
                        >
                            {showDetails2 ? (
                                <>
                                    <p>Less Details</p>
                                    <IoMdArrowDropup />
                                </>
                            ) : (
                                <>
                                    <p>More Details</p>
                                    <IoMdArrowDropdown />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* IBM/SLiDE Experience */}
                <div className={styles.workCompany}>
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/ibm-logo.jpeg'
                            alt='IBM_logo'
                            width={150}
                            height={150}
                            className={styles.workLogo}
                        />
                    </Suspense>
                    <div className={styles.workInfo}>
                        <h1 className={styles.workCompany}>IBM/SLiDE - Junior Front End Developer</h1>
                        <h2 className={styles.workDate}>September 2021 - December 2021</h2>
                        <div className={`${styles.details} ${showDetails3 ? styles.show : ''}`}>
                            <p className={styles.workDescription}>
                                Task: Create a more modern design for a web application for NBIFC.
                            </p>
                            <p className={styles.workDescription}>
                                Action: Created a new and responsive design using AdobeXD, then brought it to life using ReactJS. Additionally, I conducted user testing for performance optimization and performed maintenance on multiple WordPress websites for SLiDE clients.
                            </p>
                            <p className={styles.workDescription}>
                                Result: Successfully delivered a close to production web application, improving the user experience and modernizing the page's aesthetic and responsiveness. Conducted user testing for performance optimization and managed maintenance of multiple WordPress websites for SLiDE clients.
                            </p>
                        </div>
                        <button
                            onClick={() => toggleDetails(setShowDetails3, showDetails3)}
                            className={styles.learnMoreButton}
                        >
                            {showDetails3 ? (
                                <>
                                    <p>Less Details</p>
                                    <IoMdArrowDropup />
                                </>
                            ) : (
                                <>
                                    <p>More Details</p>
                                    <IoMdArrowDropdown />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
