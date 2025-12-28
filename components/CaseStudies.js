import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import BoxCanvas from './sideProjects/BoxCanvas';
import Studio from './sideProjects/Studio';
import ChatApp from './sideProjects/ChatApp';
import MugCulture from './sideProjects/MugCulture';

// Wrapper component for BoxCanvas as a standalone case study
function BoxCanvasCase() {
  return (
    <div className={styles.layer}>
      <div className={styles.leftHalf}>
        <Suspense fallback={<div className={styles.loaderImage}></div>}>
          <BoxCanvas className={styles.boxCanvas} />
        </Suspense>
      </div>
      <div className={styles.rightHalf}>
        <div className={styles.textContainer}>
          <h1 className={styles.projectTitle}>3D Workspace</h1>
          <p className={styles.projectDescription}>
            Interactive 3D visualization created with React Three Fiber, featuring an interactive 3D model of my workspace.
          </p>
        </div>
        <h2 className={styles.projectLanguages}>
          ReactJS | ThreeJS | React Three Fiber
        </h2>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className={styles.layer}>
      <div className={styles.workContainer}>
        <div className={styles.containerTitleRow}>
          <Suspense fallback={<div className={styles['loading-image']}></div>}>
            <Image
              src='/puzzle-svgrepo-com.svg'
              alt='case studies icon'
              width={150}
              height={150}
              className={styles.sectionTitleIcon}
            />
          </Suspense>
          <h1 className={styles.sectionTitle}>Case Studies</h1>
        </div>

        <div className={styles.caseStudiesGrid}>
          <div className={styles.caseStudyItem}>
            <MugCulture />
          </div>
          <div className={styles.caseStudyItem}>
            <ChatApp />
          </div>
          <div className={styles.caseStudyItem}>
            <Studio />
          </div>
        </div>
      </div>
    </div>
  );
}
