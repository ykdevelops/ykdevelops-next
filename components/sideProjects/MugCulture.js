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
        <>
            <div className={styles.caseTopHalf}>
                <div className={styles.caseTopStack}>
                    <div className={styles.caseMediaBox}>
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            loop
                            muted
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                borderRadius: '10px'
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.caseBottomHalf}>
                <div className={styles.caseTitle}>
                    <h1 className={styles.caseProjectTitle}>MugCulture Beta</h1>
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
                <div className={styles.caseDescription}>
                    <p className={styles.projectDescription}>
                        Responsive e-commerce website
                        using Next.js and Framer Motion.
                    </p>
                </div>
            </div>
        </>
    )
}
