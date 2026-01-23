import React, { Suspense } from 'react';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.css';
import workStyles from '../styles/Work.module.css';

export default function WorkExperience() {

    return (
        <div id="work" className={homeStyles.layer}>
            <div className={workStyles.workContainer}>
                <div className={homeStyles.containerTitleRow}>
                    <Suspense fallback={<div className={homeStyles['loading-image']}></div>}>
                        <Image
                            src='/suitcase.svg'
                            alt='work icon'
                            width={150}
                            height={150}
                            className={homeStyles.sectionTitleIcon}
                            unoptimized
                        />
                    </Suspense>
                    <h1 className={homeStyles.sectionTitle}>Work Experience</h1>
                </div>

                {/* QuoteMedia Experience */}
                <div className={workStyles.workCompany}>
                    <div className={workStyles.workCompanyHeader}>
                        <Suspense fallback={<div className={homeStyles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/qm.jpeg'
                                alt='QuoteMedia logo'
                                width={150}
                                height={150}
                                className={workStyles.workLogo}
                            />
                        </Suspense>
                        <div className={workStyles.workInfo}>
                            <h1 className={workStyles.workCompanyTitle}>
                                QuoteMedia, Inc.
                            </h1>
                            <h2 className={workStyles.workPositionTitle}>Intermediate Front End Developer</h2>
                            <h2 className={workStyles.workDate}>August 2022 - March 2023</h2>
                        </div>
                    </div>
                </div>

                {/* SpeakHabla Experience */}
                <div className={workStyles.workCompany}>
                    <div className={workStyles.workCompanyHeader}>
                        <Suspense fallback={<div className={homeStyles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/speakHablaLogo.jpeg'
                                alt='SpeakHabla logo'
                                width={150}
                                height={150}
                                className={workStyles.workLogo}
                            />
                        </Suspense>
                        <div className={workStyles.workInfo}>
                            <h1 className={workStyles.workCompanyTitle}>SpeakHabla</h1>
                            <h2 className={workStyles.workPositionTitle}>Junior Full Stack Developer</h2>
                            <h2 className={workStyles.workDate}>April 2022 - September 2022</h2>
                        </div>
                    </div>
                </div>

                {/* IBM/SLiDE Experience */}
                <div className={workStyles.workCompany}>
                    <div className={workStyles.workCompanyHeader}>
                        <Suspense fallback={<div className={homeStyles['loading-image']}></div>}>
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/work/ibm-logo.jpeg'
                                alt='IBM logo'
                                width={150}
                                height={150}
                                className={workStyles.workLogo}
                            />
                        </Suspense>
                        <div className={workStyles.workInfo}>
                            <h1 className={workStyles.workCompanyTitle}>IBM/SLiDE</h1>
                            <h2 className={workStyles.workPositionTitle}>Junior Front End Developer</h2>
                            <h2 className={workStyles.workDate}>September 2021 - December 2021</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
