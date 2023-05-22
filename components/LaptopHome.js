import React from 'react'
import styles from '../styles/LaptopHome.module.css'
import BoxCanvas from './BoxCanvas'
import { Suspense } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
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
                                layout='responsive'
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
                        <div className={styles.textContainer}>
                            <p className={styles.introDescription}>
                                As a web developer with over a year of professional experience,
                                I specialize in creating responsive web applications using the
                                Javascript frameworks React and Vue.
                            </p>
                            <p className={styles.introDescription}>
                                I am passionate about A.I research and enjoy practicing
                                different A.I techniques daily to create stunning websites, art,
                                music, and text.
                            </p>
                        </div>

                    </div>
                    <div className={styles.rightHalfImage}>
                        <Suspense
                            fallback={<div className={styles.loaderImage}></div>}
                        >
                            <Image
                                src='/catComputer.gif'
                                alt='headshot'
                                width={250}
                                height={200}

                            />
                        </Suspense>
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
                                    width={100}
                                    height={100}
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
                                    width={100}
                                    height={100}
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
                                    width={100}
                                    height={100}
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
                        <div className={styles.projectContainer}>
                            <div className={styles.projectTitle}>MugCulture Beta</div>
                            <div className={styles.projectLanguages}>
                                NextJS | ReactJS | Framer-Motion | Vercel | AWS S3
                            </div>

                            <div className={styles.projectDescription}>
                                Crafted a high-performance, responsive e-commerce website for
                                MugCulture using Next.js and Framer Motion, deployed on Vercel.
                                The site features tailored mugs with a focus on delivering an
                                exceptional user experience, and seamless adaptability across
                                various devices.
                            </div>
                        </div>
                    </div>
                </div>

                <div // MC Video
                    className={styles.layer}
                >
                    <div className={styles.leftHalf}>
                        <BoxCanvas />
                    </div>
                    <div className={styles.rightHalf}>
                        <div className={styles.textContainer}>
                            <div className={styles.projectTitle}>Ykdevelops Studio</div>
                            <div className={styles.projectLanguages}>
                                {' '}
                                ReactJS | ThreeJS | Firebase
                            </div>
                            <div className={styles.projectDescription}>
                                This site features an innovative 3D visualization of my virtual
                                workspace . It provides visitors with an
                                engaging interactive experience going beyond the 2D norm              </div>
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
                                    className={styles.iconRow}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaLinkedin className={styles.socialIcon} />
                                </a>
                            </abbr>
                            <abbr title='My Github'>
                                <a
                                    href='https://github.com/ykdevelops'
                                    className={styles.iconRow}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGithubSquare className={styles.socialIcon} />
                                </a>
                            </abbr>
                            <abbr title='My Youtube'>
                                <a
                                    href='https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg'
                                    className={styles.iconRow}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaYoutubeSquare className={styles.socialIcon} />
                                </a>
                            </abbr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}