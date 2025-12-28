import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Pitch() {
  return (
    <div className={styles.pitchSection}>
      <div className={styles.pitchWrapper}>
        {/* Title Row - Full Width */}
        <div className={styles.pitchTitleRow}>
          <Suspense fallback={<div>Loading icon...</div>}>
            <Image
              src="/wms-icon.svg"
              alt="webManagementIcon"
              width={150}
              height={150}
              className={styles.sectionTitleIcon}
            />
          </Suspense>
          <h1 className={styles.sectionTitle}>Website Service</h1>
        </div>

        {/* Content Row - Two Columns */}
        <div className={styles.pitchContentRow}>
          {/* Right Column - Content with paragraph, button, and image (appears on right on desktop, first on mobile) */}
          <div className={styles.pitchRightColumn}>
            {/* Main Paragraph */}
            <div className={styles.pitchParagraphWrapper}>
              <p className={styles.pitchParagraph}>
                Whether you are starting a new website or maintaining and securing an existing one, I take full responsibility for the technical side and ongoing upkeep so you can stay stress free and focused on your business.
              </p>
            </div>

            {/* Image Row (mobile) / Bottom Section (desktop) */}
            <div className={styles.pitchButtonImageRow}>
              <div className={styles.pitchGifContainer}>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className={styles.pitchGifWrapper}>
                    <Image
                      src="/ykwebservice.gif"
                      alt="web service illustration"
                      fill
                      className={styles.pitchGif}
                      sizes="(max-width: 768px) 250px, 200px"
                    />
                  </div>
                </Suspense>
              </div>
            </div>

            {/* Small note */}
            <div className={styles.pitchRightColumnBottom}>
            </div>
          </div>

          {/* Left Column - Client Process (appears on left on desktop, second on mobile) */}
          <div className={styles.pitchLeftColumn}>
            <div className={styles.pitchExpectationsList}>
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Strategy session</h3>
                <p className={styles.pitchExpectationDescription}>
                  Goals, brand, and user journey, plus a clear plan for what we are improving first.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Technical and content audit</h3>
                <p className={styles.pitchExpectationDescription}>
                  A focused review, with recommendations ranked by research and impact.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Build, polish, launch</h3>
                <p className={styles.pitchExpectationDescription}>
                  Implementation, QA, and a clean rollout.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Website care</h3>
                <p className={styles.pitchExpectationDescription}>
                  Proactive upkeep, quick fixes, and ongoing updates when your business changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

