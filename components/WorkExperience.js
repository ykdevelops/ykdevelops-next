import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function WorkExperience() {
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);
    
    // #region agent log
    React.useEffect(() => {
        fetch('http://127.0.0.1:7244/ingest/c9c15d9a-8b0d-45c6-9e77-12755637e5fe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'WorkExperience.js:7',message:'State changed',data:{showDetails1:showDetails1,showDetails2:showDetails2,showDetails3:showDetails3,windowWidth:window.innerWidth,isMobile:window.innerWidth <= 1024},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    }, [showDetails1, showDetails2, showDetails3]);
    // #endregion

    const toggleDetails = (setter, value) => {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/c9c15d9a-8b0d-45c6-9e77-12755637e5fe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'WorkExperience.js:11',message:'toggleDetails called',data:{currentValue:value,willSetTo:!value},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        const newValue = !value;
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/c9c15d9a-8b0d-45c6-9e77-12755637e5fe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'WorkExperience.js:15',message:'Before setter call',data:{newValue:newValue},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        setter(newValue);
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/c9c15d9a-8b0d-45c6-9e77-12755637e5fe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'WorkExperience.js:18',message:'After setter call',data:{newValue:newValue},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
    };

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
                        </div>
                    </div>
                    <div
                        id="qm-details"
                        className={`${styles.details} ${showDetails1 ? styles.show : ''}`}
                        ref={(el) => {
                            if (el) {
                                const computed = window.getComputedStyle(el);
                                const mediaQuery = window.matchMedia('(max-width: 1024px)');
                                // Check which CSS rules are actually applied
                                const sheet = document.styleSheets;
                                let matchingRules = [];
                                try {
                                    for (let s of sheet) {
                                        try {
                                            for (let r of s.cssRules || []) {
                                                if (r.selectorText && r.selectorText.includes('details') && el.matches(r.selectorText.replace(/\./g, '').split(' ')[0])) {
                                                    matchingRules.push({
                                                        selector: r.selectorText,
                                                        maxHeight: r.style?.maxHeight,
                                                        opacity: r.style?.opacity,
                                                        media: r.parentRule?.media?.mediaText
                                                    });
                                                }
                                            }
                                        } catch(e) {}
                                    }
                                } catch(e) {}
                                // #region agent log
                                fetch('http://127.0.0.1:7244/ingest/c9c15d9a-8b0d-45c6-9e77-12755637e5fe',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'WorkExperience.js:50',message:'Details element className check',data:{showDetails1:showDetails1,className:el.className,hasShow:el.classList.contains(styles.show),computedMaxHeight:computed.maxHeight,computedOpacity:computed.opacity,computedDisplay:computed.display,computedOverflow:computed.overflow,windowWidth:window.innerWidth,mediaQueryMatches:mediaQuery.matches,matchingRules:matchingRules,allComputedStyles:{maxHeight:computed.maxHeight,opacity:computed.opacity,display:computed.display,overflow:computed.overflow,transition:computed.transition}},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'D'})}).catch(()=>{});
                                // #endregion
                            }
                        }}
                    >
                        <p className={styles.workDescription}>
                            Task: Collaborated with a 6-member marketing team to modernize the company's marketing websites by transforming Adobe XD designs into fully functioning applications.
                        </p>
                        <p className={styles.workDescription}>
                            Action: Utilized Astro and Vue.js to create responsive and interactive web applications, working through Jira tickets to streamline collaboration with designers and developers.
                        </p>
                        <p className={styles.workDescription}>
                            Result: Delivered web solutions that significantly enhanced user engagement and provided an improved, interactive experience, aligning with the company's marketing objectives.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => toggleDetails(setShowDetails1, showDetails1)}
                        className={styles.learnMoreButton}
                        aria-expanded={showDetails1}
                        aria-controls="qm-details"
                    >
                        {showDetails1 ? (
                            <>
                                <span>Less Details</span>
                                <IoMdArrowDropup aria-hidden />
                            </>
                        ) : (
                            <>
                                <span>More Details</span>
                                <IoMdArrowDropdown aria-hidden />
                            </>
                        )}
                    </button>
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
                        </div>
                    </div>
                    <div
                        id="sh-details"
                        className={`${styles.details} ${showDetails2 ? styles.show : ''}`}
                    >
                        <p className={styles.workDescription}>
                            Task: Resolved runtime errors and glitches in the Business English Level Assessment (BELA) testing process, while completing the development of the administrative and instructors' portals.
                        </p>
                        <p className={styles.workDescription}>
                            Action: Refactored ReactJS code to fix runtime errors, addressing undefined variables, null references, and enhancing data validation. Added new features to the administrative portal, including advanced user management and test result controls.
                        </p>
                        <p className={styles.workDescription}>
                            Result: Improved the system's functionality and reliability, enabling BELA to accurately assess business English proficiency. Despite positive technical contributions, the project was ultimately discontinued due to funding challenges.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => toggleDetails(setShowDetails2, showDetails2)}
                        className={styles.learnMoreButton}
                        aria-expanded={showDetails2}
                        aria-controls="sh-details"
                    >
                        {showDetails2 ? (
                            <>
                                <span>Less Details</span>
                                <IoMdArrowDropup aria-hidden />
                            </>
                        ) : (
                            <>
                                <span>More Details</span>
                                <IoMdArrowDropdown aria-hidden />
                            </>
                        )}
                    </button>
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
                        </div>
                    </div>
                    <div
                        id="ibm-details"
                        className={`${styles.details} ${showDetails3 ? styles.show : ''}`}
                    >
                        <p className={styles.workDescription}>
                            Task: Redesign and modernize a web application for the North Bay Indigenous Friendship Centre (NBIFC).
                        </p>
                        <p className={styles.workDescription}>
                            Action: Designed a responsive and user-friendly interface using AdobeXD and implemented it with ReactJS. Conducted user testing to optimize performance and ensured smooth functionality. Additionally, provided ongoing maintenance for multiple WordPress websites for SLiDE clients.
                        </p>
                        <p className={styles.workDescription}>
                            Result: Delivered a near-production-quality web application that enhanced user experience through a modernized aesthetic and improved responsiveness. Successfully optimized performance based on user feedback and maintained a portfolio of WordPress sites for client satisfaction.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => toggleDetails(setShowDetails3, showDetails3)}
                        className={styles.learnMoreButton}
                        aria-expanded={showDetails3}
                        aria-controls="ibm-details"
                    >
                        {showDetails3 ? (
                            <>
                                <span>Less Details</span>
                                <IoMdArrowDropup aria-hidden />
                            </>
                        ) : (
                            <>
                                <span>More Details</span>
                                <IoMdArrowDropdown aria-hidden />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
