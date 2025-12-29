import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Pitch() {
  const [flippedCards, setFlippedCards] = useState(new Set());
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
    // Only flip on hover if card hasn't been clicked
    if (!flippedCards.has(index)) {
      if (isEntering) {
        setHoveredCards(prev => new Set(prev).add(index));
      } else {
        setHoveredCards(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }
    }
  };

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
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
          {/* Right Column - Content with paragraph, button, and image (appears on right on desktop, first on mobile) */}
          <div className={styles.pitchRightColumn}>
            {/* Main Paragraph */}
            <div className={styles.pitchParagraphWrapper}>
              <p className={styles.pitchParagraph}>
                Whether you are starting a new website or maintaining and securing an existing one, I take full responsibility for the technical side and ongoing upkeep.
                <br /><br />
                So you can stay <strong>stress free</strong> and <strong>focused on your business</strong>.
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
              <div 
                className={`${styles.pitchExpectationItem} ${(flippedCards.has(0) || hoveredCards.has(0)) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(0, true)}
                onMouseLeave={() => handleCardHover(0, false)}
                onClick={() => handleCardClick(0)}
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
                className={`${styles.pitchExpectationItem} ${(flippedCards.has(1) || hoveredCards.has(1)) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(1, true)}
                onMouseLeave={() => handleCardHover(1, false)}
                onClick={() => handleCardClick(1)}
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
                className={`${styles.pitchExpectationItem} ${(flippedCards.has(2) || hoveredCards.has(2)) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(2, true)}
                onMouseLeave={() => handleCardHover(2, false)}
                onClick={() => handleCardClick(2)}
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
                className={`${styles.pitchExpectationItem} ${(flippedCards.has(3) || hoveredCards.has(3)) ? styles.flipped : ''}`}
                onMouseEnter={() => handleCardHover(3, true)}
                onMouseLeave={() => handleCardHover(3, false)}
                onClick={() => handleCardClick(3)}
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
            
            {/* CTA Button - Below the 2x2 grid */}
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

