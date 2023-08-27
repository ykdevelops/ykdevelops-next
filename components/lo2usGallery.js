import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function lo2usGallery() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/djlo2usGallery.mp4'
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
                            width: '90%'
                        }}
                    />
                </div>
            </div>
            <div className={styles.rightHalf}>
                <div className={styles.textContainer}>
                    <h1 className={styles.projectTitle}>THE DJ LO2US GALLERY</h1>
                    <p className={styles.projectDescription}>
                        An online gallery showcasing a beautiful fusion of music and artificial intelligence,
                        highlighting the limitless possibilities and the ethical considerations that come with this innovative functionality.
                    </p>
                </div>


                <h2 className={styles.projectLanguages}>
                    NextJS | ReactJS | Vercel | AWS S3
                </h2>
                <div>
                    <a
                        href="https://djlo2usgallery.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLink45Deg className={styles.projectIconLink} />
                    </a>
                    <a
                        href="https://github.com/ykdevelops/djlo2usgallery.git"
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
