import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Suspense } from 'react'
import Image from 'next/image';
import styles from '../../styles/About.module.css'

export default function Intro() {
    return (
        <div>
            <ParallaxLayer //image
                speed={1} sticky={{ start: 0, end: 1.5 }}
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
        </div>
    )
}
