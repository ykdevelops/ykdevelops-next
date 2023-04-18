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
      <div className={styles.workExperience}>
        <div>
          <div>Work Experience</div>
          <div>QuoteMedia, Inc. - Intermediate Front End Developer</div>
          <div>August 2022 - March 2023</div>
        </div>
        <div>
          <div>SpeakHabla - Junior Full Stack Developer</div>
          <div>April 2022 - September 2022</div>
        </div>
        <div>
          <div>IBM/SLiDE - Junior Front End Developer</div>
          <div>September 2021 - December 2021</div>
        </div>
      </div>
      <div className={styles.projects}>
        <div>
          <div>ReactJS + React Three Fiber + Firebase</div>
          <div>Constructed an immersive, responsive portfolio website that highlights my software development expertise and serves as a testing ground for honing my ReactJS abilities. The site features an innovative 3D visualization of my workspace using React Three Fiber, providing visitors with an engaging, interactive experience that effectively showcases my skills and professional background.
          </div>
          <div>Visit the site at : https://ykdevelops.com/
          </div>
        </div>
        <div>
          <div>NextJS + ReactJS + Framer-Motion + Vercel + AWS S3</div>
          <div>Crafted a high-performance, responsive e-commerce website for MugCulture using Next.js and Framer Motion, deployed on Vercel. The site features tailored mugs with a focus on delivering an exceptional user experience, and seamless adaptability across various devices.</div>
          <div>To visit MugCulture Beta : https://mug-culture-shop.vercel.app/</div>
          <div>To visit current Etsy store: https://www.etsy.com/ca/shop/MugCultureShop</div>
        </div>
      </div>
      <div className={styles.contact}>
        <div>
          <div>Contact me </div>
          <div>ykdevelops@gmail.com</div>
          <div>613 979 6561</div>
          <div className={styles.iconColumn}>
            {/* <abbr title="My Resume"><a href={currentFile} className={styles.iconRow} target="_blank" rel="noreferrer"><AiFillFilePdf className={styles.aboutSocialIcon} /> </a></abbr> */}
            <abbr title="My LinkedIn"> <a href="https://linkedin.com/in/ykdevelops" className={styles.iconRow} target="_blank" rel="noreferrer"><FaLinkedin className={styles.aboutSocialIcon} /> </a></abbr>
            <abbr title="My Github"><a href="https://github.com/ykdevelops" className={styles.iconRow} target="_blank" rel="noreferrer"><FaGithubSquare className={styles.aboutSocialIcon} /></a></abbr>
            <abbr title="My Youtube"><a href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg" className={styles.iconRow} target="_blank" rel="noreferrer"><FaYoutubeSquare className={styles.aboutSocialIcon} /></a></abbr>
          </div>
        </div>
      </div>
    </div>

  )
}
