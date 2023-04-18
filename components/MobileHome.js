import React from 'react';
import styles from '../styles/MobileHome.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
// import currentFile from '../assets/videos/resume.pdf';
import { Suspense } from 'react';
import Image from 'next/image';

export default function MobileHome() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.headshotRow}>
        <Suspense fallback={<div className={styles['loading-image']}></div>}>
          <Image
            className={styles.headshot}
            src="https://ykdevelops.s3.us-east-2.amazonaws.com/aboutImage.png"
            alt="headshot"
            width={400} // Provide the width of the image
            height={400} // Provide the height of the image
            quality={100}
            priority
            unoptimized={true}
          />
        </Suspense>
        <h2 className={styles.welcomeStatement}>
          <div>Hello,</div>
          <div>I&apos;m Youssef!</div>
        </h2>
      </div>

      <div className={styles.yellowBoxRow}>
        <div className={styles.yellowBox}>
          <div className={styles.iconColumn}>
            {/* <abbr title="My Resume"><a href={currentFile} className={styles.iconRow} target="_blank" rel="noreferrer"><AiFillFilePdf className={styles.aboutSocialIcon} /> </a></abbr> */}
            <abbr title="My LinkedIn"> <a href="https://linkedin.com/in/ykdevelops" className={styles.iconRow} target="_blank" rel="noreferrer"><FaLinkedin className={styles.aboutSocialIcon} /> </a></abbr>
            <abbr title="My Github"><a href="https://github.com/ykdevelops" className={styles.iconRow} target="_blank" rel="noreferrer"><FaGithubSquare className={styles.aboutSocialIcon} /></a></abbr>
            <abbr title="My Youtube"><a href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg" className={styles.iconRow} target="_blank" rel="noreferrer"><FaYoutubeSquare className={styles.aboutSocialIcon} /></a></abbr>
          </div>
          <div className={styles.descriptionColumn}>
            <p className={styles.descriptionText}>
              As a developer with over a year of experience, I specialize in creating responsive web applications using Javascript frameworks like React and Vue. I am passionate about staying up-to-date with the latest online technologies and using them to create innovative and engaging user experiences.
            </p>
            <p className={styles.descriptionText}>
              Recently, I have also been diving into Next.js, and I am enthusiastic about the potential it offers for building performant, scalable, and feature-rich web applications.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
