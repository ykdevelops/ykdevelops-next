import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Studio from './sideProjects/Studio';
import ChatApp from './sideProjects/ChatApp';
import MugCulture from './sideProjects/MugCulture';

export default function CaseStudies() {
  const caseStudies = [
    { id: 'mugculture', component: MugCulture },
    { id: 'chatapp', component: ChatApp },
    { id: 'studio', component: Studio },
  ];

  return (
    <div className={styles.layer}>
      <div className={styles.workContainer}>
        {/* Header Section */}
        <div className={styles.containerTitleRow}>
          <Suspense 
            className={styles.caseStudiesHeaderIconSuspense} 
            fallback={<div className={styles.caseLoadingImage}></div>}
          >
            <Image
              src="/puzzle-svgrepo-com.svg"
              alt="Case studies icon"
              width={150}
              height={150}
              className={styles.sectionTitleIcon}
            />
          </Suspense>
          <h1 className={styles.sectionTitle}>Case Studies</h1>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map(({ id, component: CaseStudyComponent }) => (
            <div key={id} className={styles.caseStudyItem}>
              <CaseStudyComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
