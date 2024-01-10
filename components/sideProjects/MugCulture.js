import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function MugCulture() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/projects/mugculture.mp4'
    return (


        <div className={styles.layer}>
            <div className={styles.leftHalf}>
                <div className={styles.projectVisual}>
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxWidth: '500px',
                            width: '90%',
                            borderRadius: '10px'
                        }}
                    />
                </div>
            </div>
            <div className={styles.rightHalf}>
                <div className={styles.textContainer}>
                    <h1 className={styles.projectTitle}>MugCulture Beta</h1>
                    <p className={styles.projectDescription}>
                        A high-performance and responsive e-commerce website for
                        MugCulture using Next.js and Framer Motion, deployed on Vercel. The
                        site features tailored mugs with a focus on delivering an
                        exceptional user experience, and seamless adaptability across
                        various devices.
                    </p>
                </div>


                <h3 className={styles.projectLanguages}>
                    NextJS | ReactJS | Framer-Motion | Vercel | AWS S3
                </h3>
                <div>
                    <a
                        href="https://mug-culture-shop.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLink45Deg className={styles.projectIconLink} />
                    </a>
                    <a
                        href="https://github.com/ykdevelops/mug-culture-shop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub className={styles.projectIconLink2} />
                    </a>
                </div>
            </div>
        </div>

    )
}
