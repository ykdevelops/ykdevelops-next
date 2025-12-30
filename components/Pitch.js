import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Pitch() {
  const [hoveredCards, setHoveredCards] = useState(new Set());

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCardHover = (index, isEntering) => {
    if (isEntering) {
      setHoveredCards(prev => new Set(prev).add(index));
    } else {
      setHoveredCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }
  };

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
          {/* Left Column - Paragraph and 2x2 cards (appears on left on desktop, first on mobile) */}
          <div className={styles.pitchLeftColumn}>
            {/* Main Paragraph */}
            <div className={styles.pitchParagraphWrapper}>
              <p className={styles.pitchParagraph}>
                Need a new website?
                <br />
                Update an existing one?
                <br />
                Stay <strong>stress free</strong> and <strong>business focused</strong>.
              </p>
            </div>

            <div className={styles.pitchExpectationsList}>
              <div 
                className={`${styles.pitchExpectationItem} ${hoveredCards.has(0) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(0, true)}
                onMouseLeave={() => handleCardHover(0, false)}
              >
                <div className={styles.pitchCardInner}>
                  <div className={styles.pitchCardFront}>
                    <h3 className={styles.pitchExpectationTitle}>Strategy session</h3>
                  </div>
                  <div className={styles.pitchCardBack}>
                    <p className={styles.pitchExpectationDescription}>
                      Goals, brand, and user journey, plus a clear plan for what we are improving first.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`${styles.pitchExpectationItem} ${hoveredCards.has(1) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(1, true)}
                onMouseLeave={() => handleCardHover(1, false)}
              >
                <div className={styles.pitchCardInner}>
                  <div className={styles.pitchCardFront}>
                    <h3 className={styles.pitchExpectationTitle}>Technical and content audit</h3>
                  </div>
                  <div className={styles.pitchCardBack}>
                    <p className={styles.pitchExpectationDescription}>
                      A focused review, with recommendations ranked by research and impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`${styles.pitchExpectationItem} ${hoveredCards.has(2) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(2, true)}
                onMouseLeave={() => handleCardHover(2, false)}
              >
                <div className={styles.pitchCardInner}>
                  <div className={styles.pitchCardFront}>
                    <h3 className={styles.pitchExpectationTitle}>Build, polish, launch</h3>
                  </div>
                  <div className={styles.pitchCardBack}>
                    <p className={styles.pitchExpectationDescription}>
                      Implementation, QA, and a clean rollout.
                    </p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`${styles.pitchExpectationItem} ${hoveredCards.has(3) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(3, true)}
                onMouseLeave={() => handleCardHover(3, false)}
              >
                <div className={styles.pitchCardInner}>
                  <div className={styles.pitchCardFront}>
                    <h3 className={styles.pitchExpectationTitle}>Website care</h3>
                  </div>
                  <div className={styles.pitchCardBack}>
                    <p className={styles.pitchExpectationDescription}>
                      Proactive upkeep, quick fixes, and ongoing updates when your business changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video and CTA button (appears on right on desktop, second on mobile) */}
          <div className={styles.pitchRightColumn}>
            {/* Video */}
            <div className={styles.pitchButtonImageRow}>
              <div className={styles.pitchGifContainer}>
                <Suspense fallback={<div>Loading...</div>}>
                  <div className={styles.pitchGifWrapper}>
                    <Image
                      src="https://ykdevelops.s3.us-east-2.amazonaws.com/pitchArtCompressed.gif"
                      alt="web service illustration"
                      fill
                      className={styles.pitchGif}
                      sizes="(max-width: 768px) 250px, 200px"
                    />
                  </div>
                </Suspense>
              </div>
            </div>

            {/* CTA Button - Below the video */}
            <div className={styles.pitchCTAContainer}>
              <a href="#contact" onClick={handleScrollToContact} className={styles.pitchCTA}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

