import React from 'react';
import styles from '../styles/About.module.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
// import currentFile from '../public/resume.pdf';
import { Suspense } from 'react';

const About = () => {
    return (
        <div className={styles['about-page']}>

            <div className={styles['headshot-row']}>
                <Suspense fallback={<div className={styles['loading-image']}></div>}>
                    <img className={styles.headshot} src="/aboutImage.png" alt="headshot" />
                </Suspense>
                <h2 className={styles['welcome-statement']}>
                    <div>Hello,</div>
                    <div>I'm Youssef!</div>
                </h2>
            </div>

            <div className={styles['yellow-box-row']}>
                <div className={styles['yellow-box']}>
                    <div className={styles['icon-column']} >
                        {/* <abbr title="My Resume">
                            <a href={currentFile} className={styles['icon-row']} target="_blank" rel="noreferrer">
                                <AiFillFilePdf className={styles['about-social-icon']} />
                            </a>
                        </abbr> */}
                        <abbr title="My LinkedIn">
                            <a href="https://linkedin.com/in/ykdevelops" className={styles['icon-row']} target="_blank" rel="noreferrer">
                                <FaLinkedin className={styles['about-social-icon']} />
                            </a>
                        </abbr>
                        <abbr title="My Github">
                            <a href="https://github.com/ykdevelops" className={styles['icon-row']} target="_blank" rel="noreferrer">
                                <FaGithubSquare className={styles['about-social-icon']} />
                            </a>
                        </abbr>
                        <abbr title="My Youtube">
                            <a href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg" className={styles['icon-row']} target="_blank" rel="noreferrer">
                                <FaYoutubeSquare className={styles['about-social-icon']} />
                            </a>
                        </abbr>
                    </div>
                    <div className={styles['description-column']}>
                        <p className={styles['description-text']}>
                            As a developer with over a year of experience, I specialize in creating responsive web applications using Javascript frameworks like React and Vue. I am passionate about staying up-to-date with the latest online technologies and using them to create innovative and engaging user experiences.
                        </p>
                        <p className={styles['description-text']}>
                            Recently, I have also been diving into Next.js, and I am enthusiastic about the potential it offers for building performant, scalable, and feature-rich web applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;
