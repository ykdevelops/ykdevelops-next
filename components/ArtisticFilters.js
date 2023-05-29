import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function ArtisticFilters() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/artisticImageFilter.mp4'
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
                            maxWidth: '90%',
                            height: 'auto'
                        }}
                    />
                </div>
            </div>
            <div className={styles.rightHalf}>
                <div className={styles.textContainer}>
                    <h1 className={styles.projectTitle}>Artistic Image Filters</h1>
                    <p className={styles.projectDescription}>
                        An application built using the Streamlit framework and OpenCV library in Python. The application allows users to upload an image, select an artistic filter, and apply it to the image.
                    </p>
                </div>


                <h2 className={styles.projectLanguages}>
                    Python | OpenCV | Streamlit
                </h2>
                <div>
                    <a
                        href="https://ykdevelops-opencv-artistic-image-filte-image-filters-app-3hu91f.streamlit.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLink45Deg className={styles.projectIconLink} />
                    </a>
                    <a
                        href="https://github.com/ykdevelops/opencv-artistic-image-filters.git"
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
