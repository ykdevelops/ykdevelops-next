import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/LaptopHome.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function MugCulture() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/mugculture.mp4'
    return (
        <div>                <div //R3F Canvas
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
        </div></div>
    )
}
