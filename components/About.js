import React from 'react'
import styles from '../styles/About.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { AiFillFilePdf } from 'react-icons/ai'
import BoxCanvas from './BoxCanvas'
import { Suspense } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
const About = () => {
    const ref = useRef();
    const videoUrl = 'https://ykdevelops.s3.us-east-2.amazonaws.com/mugculture.mp4';
    return (
        <div className={styles.aboutPage}>
            <Parallax pages={3} ref={ref} className={styles.container}>
                <ParallaxLayer speed={1} sticky={{ start: 0, end: 0.5 }}
                    className={styles.imageContainer}
                >
                    <Suspense fallback={<div className={styles['loading-image']}></div>}>
                        <Image
                            className={styles.headshot}
                            src="https://ykdevelops.s3.us-east-2.amazonaws.com/aboutImage.png"
                            alt="headshot"
                            width={200} // Provide the width of the image
                            height={200} // Provide the height of the image
                        />
                    </Suspense>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1} className={styles.textContainer}>
                    <div className={styles.textContainerMid}>
                        <div className={styles.title1}>Hello,</div>
                        <div className={styles.title1}>I&apos;m Youssef!</div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={1} className={styles.textContainer}>
                    <div className={styles.textContainerMid}>

                        <div className={styles.descriptionColumn}>
                            <p className={styles.description}>
                                As a developer with over a year of experience, I specialize in
                                creating responsive web applications using Javascript
                                frameworks like React and Vue. I am passionate about staying
                                up-to-date with the latest online technologies and using them
                                to create innovative and engaging user experiences.
                            </p>
                            <p className={styles.description}>
                                Recently, I have been diving into Next.js, and I am
                                enthusiastic about the potential it offers for building
                                performant, scalable, and feature-rich web applications.
                            </p>
                        </div>
                    </div>

                </ParallaxLayer>
                <ParallaxLayer offset={1.5} speed={0.5} >

                    <BoxCanvas />

                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0.5}>
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </ParallaxLayer>


            </Parallax>
        </div>
    )
}

export default About
