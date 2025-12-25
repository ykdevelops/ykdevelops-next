import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Pitch() {
  return (
    <div className={`${styles.eduLayer} ${styles.pitchLayer}`}>
      <div className={`${styles.eduContainer} ${styles.pitchContainer}`}>
        <div className={styles.eduTitleRow}>
          <Suspense fallback={<div>Loading icon...</div>}>
            <Image
              src="/wms-icon.svg"
              alt="webManagementIcon"
              width={150}
              height={150}
              className={`${styles.eduTitleIcon} ${styles.wmsIcon}`}
            />
          </Suspense>
          <h1 className={styles.eduSectionTitle}>Web Management Service</h1>
        </div>

        <div className={styles.eduInfo}>
          <p className={styles.pitchText}>
            I help local businesses by managing their websites so they don't have to deal with technical work or ongoing research. I take responsibility for updates, fixes, and general website upkeep, and I'm available when changes are needed.
          </p>

          <p className={styles.pitchText}>
            This service is designed for small businesses that want peace of mind and a reliable person responsible for their website.
          </p>

          <h2 className={styles.pitchSubtitle}>What I handle</h2>

          <ul className={styles.pitchList}>
            <li>Content updates and small changes</li>
            <li>Fixing broken pages or technical issues</li>
            <li>Basic security updates and monitoring</li>
            <li>Help with website-related questions without technical hassle</li>
          </ul>

          <p className={styles.pitchText}>
            If you're looking for someone dependable to manage your website and handle the technical side responsibly, feel free to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}

