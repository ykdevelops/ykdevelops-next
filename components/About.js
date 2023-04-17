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
const About = () => {
    const ref = useRef()
    return (
        <div className={styles.aboutPage}>
            <Parallax pages={3} ref={ref} className={styles.container}>
                <ParallaxLayer speed={1} sticky={{ start: 0, end: 0.5 }}
                    className={styles.imageContainer}
                >
                    <Suspense
                        fallback={<div className={styles['loading-image']}></div>}
                    >
                        <img
                            className={styles.headshot}
                            src='/aboutImage.png'
                            alt='headshot'
                        />
                    </Suspense>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1} className={styles.textContainer}>
                    <div className={styles.textContainerMid}>
                        <div className={styles.title1}>Hello,</div>
                        <div className={styles.title1}>I'm Youssef!</div>
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
                <ParallaxLayer offset={1.5} speed={1} >

                    <BoxCanvas />

                </ParallaxLayer>


            </Parallax>
        </div>
    )
}

export default About
