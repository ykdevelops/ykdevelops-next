import React from 'react'
import styles from '../../styles/About.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { AiFillFilePdf } from 'react-icons/ai'
import BoxCanvas from '../BoxCanvas'
import { Suspense } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import Intro from './Intro'
export default function About() {
    const ref = useRef();
    const videoUrl = 'https://ykdevelops.s3.us-east-2.amazonaws.com/mugculture.mp4';
    return (
        <div className={styles.aboutPage}>
            <Parallax pages={5} ref={ref} className={styles.container}>
                <ParallaxLayer //image
                    speed={1} sticky={{ start: 0, end: 0.8 }}
                    className={styles.imageContainer}>
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
                </ParallaxLayer>
                <ParallaxLayer //paragraph-1
                    offset={0} speed={0.5} className={styles.textContainer}>
                    <div className={styles.textContainerMid}>
                        <div className={styles.title1}>Hello,</div>
                        <div className={styles.title1}>I&apos;m Youssef!</div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer //paragraph-2
                    offset={0.9} speed={0.7} className={styles.textContainer}>
                    <div className={styles.textContainerMid}>

                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                As a web developer with over a year of professional experience, I specialize in
                                creating responsive web applications using the Javascript
                                frameworks React and Vue.
                            </p>
                            <p className={styles.description}>
                                I am passionate about staying
                                up-to-date with the latest web technologies and utilizing them
                                to create innovative and engaging user experiences.
                            </p>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer //R3F Canvas
                    className={styles.imageContainer}
                    speed={1} sticky={{ start: 1.5, end: 2.3 }}>
                    <BoxCanvas />
                </ParallaxLayer>
                <ParallaxLayer //R3F Title1
                    className={styles.imageContainer}
                    speed={1} offset={1.9} >
                    <div className={styles.textContainer}><div className={styles.textContainerMid}>
                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                React Three Fiber
                            </p>
                            <p className={styles.description}>
                                Ive been building a scene with React Three Fiber. Exploring the capabilities of 3D rendering on modern browsers.
                            </p>
                        </div>
                    </div></div>
                </ParallaxLayer>
                <ParallaxLayer //R3F Title2
                    className={styles.imageContainer}
                    speed={1} offset={2.5} >
                    <div className={styles.textContainer}><div className={styles.textContainerMid}>
                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                Explore the scene on this link : ykdevelps.com blah blah blah
                            </p>
                        </div>
                    </div></div>
                </ParallaxLayer>
                <ParallaxLayer // MC Video
                    className={styles.imageContainer}

                    speed={1} sticky={{ start: 3.2, end: 4.5 }} >
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: '50%',
                            height: 'auto',
                        }}
                    />


                </ParallaxLayer>
                <ParallaxLayer //MC Title1
                    className={styles.imageContainer}
                    speed={1} offset={3.9} >
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerMid}>
                            <div className={styles.descriptionColumn}>
                                <p className={styles.description}>
                                    This is MugCulture, an online mug shop.
                                </p>


                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer //MC Title2
                    className={styles.imageContainer}
                    speed={1} offset={4.1} >
                    <div className={styles.textContainer}>
                        <div className={styles.textContainerMid}>
                            <div className={styles.descriptionColumn}>

                                <p className={styles.description}>
                                    To visit use this link:
                                    Shop at the current Etsy store:
                                </p>

                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div >
    )
}


