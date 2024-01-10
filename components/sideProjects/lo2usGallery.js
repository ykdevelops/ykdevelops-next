import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
export default function lo2usGallery() {
    return (
        <div className={styles.djLo2usLayer}>
            <div className={styles.containerTitleRow}>
                <Suspense fallback={<div className={styles['loading-image']}></div>}>
                    <Image
                        src='https://ykdevelops.s3.us-east-2.amazonaws.com/projects/sideProjectsIcon2.gif'
                        alt='side projects logo'
                        width={150}
                        height={150}
                        className={styles.djLo2usTitleIcon}
                    />
                </Suspense>
                <h1 className={styles.sectionTitle}>Side Projects</h1>
            </div>
            <div className={styles.layer}>
                <div className={styles.leftHalf}>
                    <div className={styles.projectVisual}>
                        <video
                            src='https://ykdevelops.s3.us-east-2.amazonaws.com/projects/djlo2usGallery.mp4'
                            controls
                            autoPlay
                            loop
                            muted
                            style={{
                                maxWidth: '500px',
                                width: '80%'
                            }}
                        />
                    </div>
                </div>
                <div className={styles.rightHalf}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.projectTitle}>The djlo2us gallery</h1>
                        <p className={styles.projectDescription}>
                            An online gallery showcasing a beautiful fusion of music and artificial intelligence,
                            highlighting the limitless possibilities and the ethical considerations that come with this innovative functionality.
                        </p>
                    </div>


                    <h3 className={styles.projectLanguages}>
                        NextJS | ReactJS | Vercel | AWS S3 | Stripe
                    </h3>
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
        </div>


    )
}
