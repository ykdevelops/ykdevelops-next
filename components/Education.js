import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Education() {
  return (
    <div className={styles.layer}>
      <div className={styles.workContainer}>
        <div className={styles.containerTitleRow}>
          <Suspense fallback={<div className={styles['loading-image']}></div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/education.png"
              alt="educationIcon"
              width={150}
              height={150}
              className={styles.sectionTitleIcon}
            />
          </Suspense>
          <h1 className={styles.sectionTitle}>Education</h1>
        </div>

        {/* University of Ottawa (Current) */}
        <div className={styles.workCompany}>
          <div className={styles.workCompanyHeader}>
            <Suspense fallback={<div className={styles['loading-image']}></div>}>
              <Image
                src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/uottawa.png"
                alt="uOttawaLogo"
                width={150}
                height={150}
                className={styles.workLogo}
              />
            </Suspense>
            <div className={styles.workInfo}>
              <h2 className={styles.eduItemDegree}>Honours BSc Computer Science</h2>
              <h1 className={styles.eduItemTitle}>
                University of Ottawa
              </h1>
              <h2 className={styles.eduItemDate}>Sep 2024 – Sep 2027</h2>
            </div>
          </div>
        </div>

        {/* Algonquin College */}
        <div className={styles.workCompany}>
          <div className={styles.workCompanyHeader}>
            <Suspense fallback={<div className={styles['loading-image']}></div>}>
              <Image
                src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/algonquin.png"
                alt="AlgonquinLogo"
                width={150}
                height={150}
                className={styles.workLogo}
              />
            </Suspense>
            <div className={styles.workInfo}>
              <h2 className={styles.eduItemDegree}>Mobile Application Design & Development</h2>
              <h1 className={styles.eduItemTitle}>
                Algonquin College
              </h1>
              <h2 className={styles.eduItemDate}>Sep 2019 – Apr 2022</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
