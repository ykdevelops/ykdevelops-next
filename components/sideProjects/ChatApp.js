import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
export default function ChatApp() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/projects/chatApp.mp4'
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
                            className={styles.videoVisual}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.caseBottomHalf}>
                <div className={styles.caseTitle}>
                    <h1 className={styles.caseProjectTitle}>Chat App</h1>
                    <div>
                        <a
                            href="https://chatapp-reactfire.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLink45Deg className={styles.projectIconLink} />
                        </a>
                        <a
                            href="https://github.com/ykdevelops/chatapp-reactfire.git"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub className={styles.projectIconLink2} />
                        </a>
                    </div>
                </div>
                <div className={styles.caseDescription}>
                    <p className={styles.projectDescription}>
                        A sleek and user-friendly chat application utilizing ReactFire.
                    </p>
                </div>
            </div>
        </>
    )
}
