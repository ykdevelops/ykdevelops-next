import React, { Suspense } from 'react';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.css';
import workStyles from '../styles/Work.module.css';
import styles from '../styles/PersonalProjects.module.css';
import Studio from './sideProjects/Studio';
import ChatApp from './sideProjects/ChatApp';
import MugCulture from './sideProjects/MugCulture';

export default function PersonalProjects() {
  const personalProjects = [
    { id: 'mugculture', component: MugCulture },
    { id: 'chatapp', component: ChatApp },
    { id: 'studio', component: Studio },
  ];

  return (
    <div className={`${homeStyles.layer} ${styles.hideOnMobile}`}>
      <div className={workStyles.workContainer}>
        {/* Header Section */}
        <div className={homeStyles.containerTitleRow}>
          <Suspense 
            className={styles.personalProjectsHeaderIconSuspense} 
            fallback={<div className={styles.personalProjectsLoadingImage}></div>}
          >
            <Image
              src="/puzzle-svgrepo-com.svg"
              alt="Personal projects icon"
              width={150}
              height={150}
              className={homeStyles.sectionTitleIcon}
              unoptimized
            />
          </Suspense>
          <h1 className={homeStyles.sectionTitle}>Personal Projects</h1>
        </div>

        {/* Personal Projects Grid */}
        <div className={styles.personalProjectsGrid}>
          {personalProjects.map(({ id, component: ProjectComponent }) => (
            <div key={id} className={styles.personalProjectItem}>
              <ProjectComponent />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

