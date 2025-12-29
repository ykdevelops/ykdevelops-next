import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function Studio() {
    return (
        <>
            <div className={styles.caseTopHalf}>
                <div className={styles.caseTopStack}>
                    <div className={styles.caseMediaBox}>
                        <Suspense
                            className={styles.caseStudiesItemSuspense}
                            fallback={<div className={styles.loaderImage}></div>}
                        >
                            <BoxCanvas className={styles.boxCanvas} />
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className={styles.caseBottomHalf}>
                <div className={styles.caseTitle}>
                    <h1 className={styles.caseProjectTitle}>3D Studio</h1>
                    <div>
                        <a
                            href="https://ykdevelops-r3f.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLink45Deg className={styles.projectIconLink} />
                        </a>
                        <a
                            href="https://github.com/ykdevelops/ykdevelops-r3f"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub className={styles.projectIconLink2} />
                        </a>
                    </div>
                </div>
                <div className={styles.caseDescription}>
                    <p className={styles.projectDescription}>
                        3D visualization of my
                        workstation using React Three Fiber. 
                    </p>
                </div>
            </div>
        </>
    )
}
