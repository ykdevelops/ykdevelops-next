import React, { Suspense, lazy } from 'react';
import Image from 'next/image'
import styles from '../styles/LaptopHome.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function Studio() {
    return (
        <div // MC Video
            className={styles.layer}
        >
            <div className={styles.leftHalf} >

                <Suspense
                    fallback={<div className={styles.loaderImage}></div>}
                >
                    <BoxCanvas />
                </Suspense>

            </div>
            <div className={styles.rightHalf}>
                <div className={styles.textContainer}>
                    <div className={styles.projectTitle}>3D Studio</div>

                    <div className={styles.projectDescription}>
                        This site features an innovative 3D visualization of my
                        workspace . It provides visitors with an
                        engaging interactive experience going beyond the 2D norm of web applications.
                    </div>
                </div>

                <div className={styles.projectLanguages}>
                    ReactJS | ThreeJS | Firebase
                </div>
                <div className={styles.projectDescription}>
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
        </div>
    )
}
