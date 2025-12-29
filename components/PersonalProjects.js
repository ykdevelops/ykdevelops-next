import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
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
    <div className={styles.layer}>
      <div className={styles.workContainer}>
        {/* Header Section */}
        <div className={styles.containerTitleRow}>
          <Suspense 
            className={styles.personalProjectsHeaderIconSuspense} 
            fallback={<div className={styles.personalProjectsLoadingImage}></div>}
          >
            <Image
              src="/puzzle-svgrepo-com.svg"
              alt="Personal projects icon"
              width={150}
              height={150}
              className={styles.sectionTitleIcon}
            />
          </Suspense>
          <h1 className={styles.sectionTitle}>Personal Projects</h1>
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

