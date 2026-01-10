import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import styles from '../../styles/PersonalProjects.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function Studio() {
    return (
        <>
            <div className={styles.projectTopHalf}>
                <div className={styles.projectTopStack}>
                    <div className={styles.projectMediaBox}>
                        <Suspense
                            className={styles.personalProjectsItemSuspense}
                            fallback={<div className={homeStyles.loaderImage}></div>}
                        >
                            <BoxCanvas className={styles.boxCanvas} />
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className={styles.projectBottomHalf}>
                <div className={styles.projectTitleRow}>
                    <h1 className={styles.projectTitleHeading}>3D Studio</h1>
                    <div>
                        <a
                            href="https://ykdevelops-r3f.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLink45Deg className={homeStyles.projectIconLink} />
                        </a>
                        <a
                            href="https://github.com/ykdevelops/ykdevelops-r3f"
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
