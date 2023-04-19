import React from 'react'
import styles from '../styles/LaptopHome.module.css'
import BoxCanvas from './BoxCanvas'
import { Suspense } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";
export default function LaptopHome() {
    const ref = useRef();
    const videoUrl = 'https://ykdevelops.s3.us-east-2.amazonaws.com/mugculture.mp4';
    return (
        <div className={styles.aboutPage}>
            <Parallax pages={8} ref={ref} className={styles.container}>
                <ParallaxLayer //image
                    speed={0.1} sticky={{ start: 0, end: 0.8 }}
                    className={styles.layer}
                >
                    <div className={styles.leftHalf}>
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
                    </div>
                    <div className={styles.rightHalf}></div>

                </ParallaxLayer>
                <ParallaxLayer //paragraph-1
                    offset={0} speed={0.1} className={styles.layer}>
                    <div className={styles.leftHalf}></div>
                    <div className={styles.rightHalf}>
                        <div className={styles.title1}>Hi all,</div>
                        <div className={styles.title1}>I&apos;m Youssef!</div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer //paragraph-2
                    offset={0.7} speed={0.1} className={styles.layer}>
                    <div className={styles.leftHalf}></div>
                    <div className={styles.rightHalf}>

                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                As a web developer with over a year of professional experience, I specialize in creating responsive web applications using the Javascript frameworks React and Vue.
                            </p>
                            <p className={styles.description}>
                                I am passionate about staying up-to-date with the latest web technologies and utilizing them to create innovative and engaging user experiences.
                            </p>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer // Work Experience
                    className={styles.layer}
                    speed={0.1} offset={1.7}>
                    <div className={styles.workExperience}>
                        <div className={styles.info}>
                            <div className={styles.title}>Work Experience</div>
                            <div className={styles.company}>QuoteMedia, Inc. - Intermediate Front End Developer</div>
                            <div className={styles.date}>August 2022 - March 2023</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.company}>SpeakHabla - Junior Full Stack Developer</div>
                            <div className={styles.date}>April 2022 - September 2022</div>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.company}>IBM/SLiDE - Junior Front End Developer</div>
                            <div className={styles.date}>September 2021 - December 2021</div>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer //R3F Canvas
                    className={styles.layer}
                    speed={0.1} sticky={{ start: 2.6, end: 4.1 }}>
                    <div className={styles.leftHalf}><BoxCanvas /></div>
                    <div className={styles.rightHalf}></div>

                </ParallaxLayer>
                <ParallaxLayer //R3F Title1
                    className={styles.layer}
                    speed={0.1} offset={2.6} >
                    <div className={styles.leftHalf}>
                        <div className={styles.textContainerMid}>
                            <div className={styles.descriptionColumn}>
                                <p className={styles.description}>
                                    Ykdevelops Studio
                                </p>
                                <p className={styles.description}>
                                    ReactJS + React Three Fiber + Firebase
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className={styles.righthalf}></div>
                </ParallaxLayer>
                <ParallaxLayer //R3F Title2
                    className={styles.layer}
                    speed={0.1} offset={4} >
                    <div className={styles.textContainer}><div className={styles.textContainerMid}>
                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                The site features an innovative 3D visualization of my workspace using React Three Fiber,
                                providing visitors with an engaging, interactive experience that effectively showcases my
                                skills and professional background.
                            </p>
                            <p className={styles.description}>
                                Visit the site at : https://ykdevelops.com/studio
                            </p>
                        </div>
                    </div></div>
                </ParallaxLayer>
                <ParallaxLayer // MC Video
                    className={styles.layer}

                    speed={1} sticky={{ start: 5.2, end: 5.8 }} >
                    <div className={styles.leftHalf}> <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    /></div>
                    <div className={styles.rightHalf}></div>



                </ParallaxLayer>
                <ParallaxLayer //MC Title1
                    className={styles.layer}
                    speed={0.1} offset={5.2} >
                    <div className={styles.leftHalf}></div>
                    <div className={styles.rightHalf}>

                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                MugCulture Beta
                            </p>
                            <p className={styles.description}>
                                NextJS + ReactJS + Framer-Motion + Vercel + AWS S3
                            </p>

                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer //MC Title2
                    className={styles.layer}
                    speed={0.1} offset={5.8} >
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerMid}>
                            <div className={styles.descriptionColumn}>

                                <p className={styles.description}>
                                    Crafted a high-performance, responsive e-commerce website for MugCulture using Next.js and Framer Motion, deployed on Vercel. The site features tailored mugs with a focus on delivering an exceptional user experience, and seamless adaptability across various devices.
                                </p>
                                <p className={styles.description}>
                                    To visit MugCulture Beta : https://mug-culture-shop.vercel.app/
                                </p>
                                <p className={styles.description}>
                                    To visit current Etsy store: https://www.etsy.com/ca/shop/MugCultureShop
                                </p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer //Contact
                    className={styles.layer}
                    speed={0.1} sticky={{ start: 7, end: 8 }} >

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

                </ParallaxLayer>
            </Parallax>
        </div >
    )
}


