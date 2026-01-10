import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import styles from '../../styles/PersonalProjects.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function MugCulture() {
    const videoUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/projects/mugculture.mp4'
    return (
        <>
            <div className={styles.projectTopHalf}>
                <div className={styles.projectTopStack}>
                    <div className={styles.projectMediaBox}>
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
            <div className={styles.projectBottomHalf}>
                <div className={styles.projectTitleRow}>
                    <h1 className={styles.projectTitleHeading}>MugCulture Beta</h1>
                    <div>
                        <a
                            href="https://mug-culture-shop.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLink45Deg className={homeStyles.projectIconLink} />
                        </a>
                        <a
                            href="https://github.com/ykdevelops/mug-culture-shop"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub className={homeStyles.projectIconLink2} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
