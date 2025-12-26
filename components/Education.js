import React, { Suspense } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function EducationAndCerts() {
  return (
    <div className={styles.eduLayer}>
      {/* =======================
          EDUCATION SECTION
      ======================= */}
      <div className={styles.eduContainer}>
        <div className={styles.eduTitleRow}>
          <Suspense fallback={<div>Loading icon...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/education.png"
              alt="educationIcon"
              width={150}
              height={150}
              className={styles.eduTitleIcon}
            />
          </Suspense>
          <h1 className={styles.eduSectionTitle}>Education</h1>
        </div>

        {/* University of Ottawa (Current) */}
        <div className={styles.eduItem}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/uottawa.png"
              alt="uOttawaLogo"
              width={150}
              height={150}
              className={styles.eduLogo}
            />
          </Suspense>
          <div className={styles.eduInfo}>
            <h1 className={styles.eduItemTitle}>
              University of Ottawa
            </h1>
            <h2 className={styles.eduItemDegree}>BSc of Computer Science</h2>
            <h2 className={styles.eduItemDate}>Sep 2024 – Sep 2027</h2>
          </div>
        </div>

        {/* Algonquin College */}
        <div className={styles.eduItem}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/algonquin.png"
              alt="AlgonquinLogo"
              width={150}
              height={150}
              className={styles.eduLogo}
            />
          </Suspense>
          <div className={styles.eduInfo}>
            <h1 className={styles.eduItemTitle}>
              Algonquin College
            </h1>
            <h2 className={styles.eduItemDegree}>Mobile App Design & Development</h2>
            <h2 className={styles.eduItemDate}>Sep 2019 – Apr 2022</h2>
          </div>
        </div>


      </div>

      {/* ================================
          CERTIFICATIONS
      ================================ */}
      <div className={styles.eduContainer}>
        <div className={styles.eduTitleRow}>
          <Suspense fallback={<div>Loading icon...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/certificate.png"
              alt="certIcon"
              width={150}
              height={150}
              className={styles.eduTitleIcon}
            />
          </Suspense>
          <h1 className={styles.eduSectionTitle}>Certifications</h1>
        </div>

        {/* Google Cybersecurity Specialization */}
        <div className={styles.eduItem}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/google.jpg"
              alt="GoogleLogo"
              width={150}
              height={150}
              className={styles.eduLogo}
            />
          </Suspense>
          <div className={styles.eduInfo}>
            <h1 className={styles.eduItemTitle}>Google Cybersecurity Specialization</h1>
            <h2 className={styles.eduItemDate}>Issued Jan 2025</h2>

            <a
              href="https://coursera.org/share/5b806dc8790c26727c4f81e2d6a0f89c"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.eduLink}
            >
              Show Credential
            </a>
          </div>
        </div>

        {/* AWS Certified Cloud Practitioner */}
        <div className={styles.eduItem}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/aws.jpg"
              alt="AWSLogo"
              width={150}
              height={150}
              className={styles.eduLogo}
            />
          </Suspense>
          <div className={styles.eduInfo}>
            <h1 className={styles.eduItemTitle}>AWS Certified Cloud Practitioner</h1>
            <h2 className={styles.eduItemDate}>Issued Oct 2023 – Expires Oct 2026</h2>
            <a
              href="https://www.credly.com/badges/c2c6ded9-a3f6-4461-9618-7ead3a2d43f9/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.eduLink}
            >
              Show Credential
            </a>
          </div>
        </div>

        {/* OpenCV for Beginners */}
        <div className={styles.eduItem}>
          <Suspense fallback={<div>Loading logo...</div>}>
            <Image
              src="https://ykdevelops.s3.us-east-2.amazonaws.com/education/openCV.png"
              alt="OpenCVLogo"
              width={150}
              height={150}
              className={styles.eduLogo}
            />
          </Suspense>
          <div className={styles.eduInfo}>
            <h1 className={styles.eduItemTitle}>OpenCV for Beginners</h1>
            <h2 className={styles.eduItemDate}>Issued May 2023</h2>

            <a
              href="https://courses.opencv.org/certificates/f15b061ca3b24324b49cd000d15a2e40"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.eduLink}
            >
              Show Credential
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
