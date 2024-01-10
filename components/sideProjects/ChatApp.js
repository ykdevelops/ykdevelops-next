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
        <div className={styles.chatAppLayer}>

            <div className={styles.layer}>
                <div className={styles.leftHalf}>
                    <div className={styles.projectVisual}>
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            loop
                            muted
                            className={styles.videoVisual}
                            style={{
                                maxHeight: '500px',
                                borderRadius: '10px'
                            }}
                        />
                    </div>
                </div>
                <div className={styles.rightHalf}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.projectTitle}>Chat App</h1>
                        <p className={styles.projectDescription}>
                            A sleek and user-friendly chat application utilizing ReactFire. The app features a visually appealing dark theme and employs a Firebase database to store and manage messages seamlessly.                    </p>
                    </div>


                    <h3 className={styles.projectLanguages}>
                        ReactJS | ReactFire | Framer-Motion | Vercel | Firebase
                    </h3>
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
            </div>
        </div>


    )
}
