import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
              className={styles.pitchIcon}
            />
          </Suspense>
          <h1 className={styles.pitchTitle}>Web Management Service</h1>
        </div>

        {/* Content Row - Two Columns */}
        <div className={styles.pitchContentRow}>
          <div className={styles.pitchLeftColumn}>
            {/* Main Paragraph */}
            <p className={styles.pitchParagraph}>
              Whether you are starting a new website from an initial conversation or maintaining and securing an existing one, I take full responsibility for the technical side and ongoing upkeep so you can stay tech stress free and focused on your business.
            </p>

            {/* Bottom Section */}
            <div className={styles.pitchLeftColumnBottom}>
              {/* CTA Button */}
              <Link href="#contact" className={styles.pitchCTA}>
                Get in touch
              </Link>

              {/* Small note */}
              <p className={styles.pitchNote}>
                Best for small businesses that want peace of mind and one person responsible for the website.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.pitchRightColumn}>
            <div className={styles.pitchExpectationsList}>
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Reliable updates</h3>
                <p className={styles.pitchExpectationDescription}>
                  Regular content updates and security patches.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Fixes when things break</h3>
                <p className={styles.pitchExpectationDescription}>
                  Quick response to technical issues and errors.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Ongoing upkeep</h3>
                <p className={styles.pitchExpectationDescription}>
                  Continuous monitoring and maintenance.
                </p>
              </div>
              
              <div className={styles.pitchExpectationItem}>
                <h3 className={styles.pitchExpectationTitle}>Reliability and availability</h3>
                <p className={styles.pitchExpectationDescription}>
                  Available when you need changes or have questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
