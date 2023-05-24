import React, { Suspense, lazy } from 'react';
// import { useInView } from 'react-intersection-observer'; // Optional, for scroll-based lazy loading
//const BoxCanvas = lazy(() => import('./BoxCanvas'));
import { startTransition } from 'react';
import BoxCanvas from './BoxCanvas'
import styles from '../styles/LaptopHome.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import { AiFillFilePdf } from 'react-icons/ai'
export default function LaptopHome() {
    const ref = useRef()
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/mugculture.mp4'
    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>
                <div //Intro - image
                    className={styles.layer}
                >
                    <div className={styles.leftHalf}>
                        <Suspense
                            fallback={<div className={styles.loaderImage}></div>}
                        >
                            <Image
                                src='https://ykdevelops.s3.us-east-2.amazonaws.com/aboutImage.png'
                                alt='headshot'
                                width={400}
                                height={400}


                            />
                        </Suspense>
                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.textContainer}>
                            <div className={styles.introTitle}>Hello world,</div>
                            <div className={styles.introTitle}>I&apos;m Youssef!</div>
                        </div>
                    </div>
                </div>
                <div //Intro - image
                    className={styles.layer}
                >

                    <div className={styles.leftHalf}>

                        <Suspense
                            fallback={<div className={styles.loaderImage}></div>}
                        >
                            <Image
                                src='/descriptionArt.png'
                                alt='headshot'
                                width={500}
                                height={500}

                            />
                        </Suspense>
                    </div>
                    <div className={styles.rightHalfImage}>

                        <div className={styles.textContainer}>

                            <p className={styles.introDescription}>
                            </p>
                            <p className={styles.introDescription}>
                                I harness the power of JavaScript frameworks like  <strong>React</strong> and <strong>Vue</strong> to deliver seamless and responsive experiences across various devices.
                            </p>

                        </div>
                    </div>
                </div>

                <div // Work Experience
                    className={styles.layer}
                >
                    <div className={styles.workContainer}>
                        <div className={styles.workTitle}>Work Experience</div>
                        <div className={styles.workCompany}>
                            <Suspense
                                fallback={<div className={styles['loading-image']}></div>}
                            >
                                <Image
                                    src='/qm.jpeg'
                                    alt='QuoteMediaLogo'
                                    width={150}
                                    height={150}
                                    className={styles.workLogo}
                                />
                            </Suspense>
                            <div className={styles.workInfo}>
                                <div className={styles.workCompany}>
                                    QuoteMedia, Inc. - Intermediate Front End Developer
                                </div>
                                <div className={styles.workDate}>August 2022 - March 2023</div>
                                <div className={styles.workDescription}>
                                    Developed responsive web applications using VueJS and
                                    customized finacial web widgets (Qmods).
                                </div>
                            </div>
                        </div>
                        <div className={styles.workCompany}>
                            <Suspense
                                fallback={<div className={styles['loading-image']}></div>}
                            >
                                <Image
                                    src='/speakHablaLogo.jpeg'
                                    alt='speakHablaLogo'
                                    width={150}
                                    height={150}
                                    className={styles.workLogo}
                                />
                            </Suspense>

                            <div className={styles.workInfo}>
                                <div className={styles.workCompany}>
                                    SpeakHabla - Junior Full Stack Developer
                                </div>
                                <div className={styles.workDate}>
                                    April 2022 - September 2022
                                </div>
                                <div className={styles.workDescription}>
                                    Developed BELA (Business English Level Assessment), a website
                                    english level assesment built using ReactJS and Firebase.
                                </div>
                            </div>
                        </div>
                        <div className={styles.workCompany}>
                            <Suspense
                                fallback={<div className={styles['loading-image']}></div>}
                            >
                                <Image
                                    src='/ibm-logo.jpeg'
                                    alt='IBM_logo'
                                    width={150}
                                    height={150}
                                    className={styles.workLogo}
                                />
                            </Suspense>
                            <div className={styles.workInfo}>
                                <div className={styles.workCompany}>
                                    IBM/SLiDE - Junior Front End Developer
                                </div>
                                <div className={styles.workDate}>
                                    September 2021 - December 2021
                                </div>
                                <div className={styles.workDescription}>
                                    Developed a progressive web application using ReactJS in
                                    partnership with NBIFC. Assisted with user testing and
                                    provided ongoing maintenance for multiple Wordpress sites for
                                    SLiDE clients.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div //R3F Canvas
                    className={styles.layer}
                >
                    <div className={styles.leftHalf}>
                        <div className={styles.projectVisual}>
                            <video
                                src={videoUrl}
                                controls
                                autoPlay
                                loop
                                muted
                                style={{
                                    maxWidth: '90%',
                                    height: 'auto'
                                }}
                            />
                        </div>

                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.textContainer}>
                            <div className={styles.projectTitle}>MugCulture Beta</div>
                        </div>

                        <div className={styles.projectDescription}>
                            Crafted a high-performance, responsive e-commerce website for
                            MugCulture using Next.js and Framer Motion, deployed on Vercel.
                            The site features tailored mugs with a focus on delivering an
                            exceptional user experience, and seamless adaptability across
                            various devices.
                        </div>
                        <div className={styles.projectLanguages}>
                            NextJS | ReactJS | Framer-Motion | Vercel | AWS S3
                        </div>
                        <div >
                            <BsLink45Deg className={styles.projectIconLink} />
                            <BsGithub className={styles.projectIconLink2} />
                        </div>

                    </div>
                </div>

                <div // MC Video
                    className={styles.layer}
                >
                    <div className={styles.leftHalf} ref={ref}>

                        <Suspense
                            fallback={<div className={styles.loaderImage}></div>}
                        >
                            <BoxCanvas />
                        </Suspense>

                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.textContainer}>
                            <div className={styles.projectTitle}>3D Studio</div>

                            <div className={styles.projectDescription}>
                                This site features an innovative 3D visualization of my
                                workspace . It provides visitors with an
                                engaging interactive experience going beyond the 2D norm of web applications.
                            </div>
                        </div>

                        <div className={styles.projectLanguages}>
                            ReactJS | ThreeJS | Firebase
                        </div>
                        <div className={styles.projectDescription}>
                            <BsLink45Deg className={styles.projectIconLink} />
                            <BsGithub className={styles.projectIconLink2} />
                        </div>
                    </div>
                </div>

                <div //Contact
                    className={styles.layer}
                >
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>Contact me </div>
                        <div className={styles.contactItem}>ykdevelops@gmail.com</div>
                        <div className={styles.contactItem}>613 979 6561</div>
                        <div className={styles.socialIcons}>
                            <abbr title='My LinkedIn'>
                                <a
                                    href='https://linkedin.com/in/ykdevelops'

                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Suspense
                                        fallback={<div className={styles.loaderImage}></div>}
                                    >
                                        <Image
                                            src='/linkedin1.png'
                                            alt='linkedin'
                                            width={50}
                                            height={50}
                                            className={styles.contactIcon}
                                        />
                                    </Suspense>
                                </a>

                            </abbr>
                            <abbr title='My Github'>
                                <a
                                    href='https://github.com/ykdevelops'

                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Suspense
                                        fallback={<div className={styles.loaderImage}></div>}
                                    >
                                        <Image
                                            src='/github.png'
                                            alt='github'
                                            width={50}
                                            height={50}
                                            className={styles.contactIcon}
                                        />
                                    </Suspense>
                                </a>
                            </abbr>
                            <abbr title='My Youtube'>
                                <a
                                    href='https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg'

                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Suspense
                                        fallback={<div className={styles.loaderImage}></div>}
                                    >
                                        <Image
                                            src='/youtube1.png'
                                            alt='youtube'
                                            width={50}
                                            height={50}
                                            className={styles.contactIcon}
                                        />
                                    </Suspense>
                                </a>
                            </abbr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}