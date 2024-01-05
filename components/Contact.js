import React, { Suspense, lazy } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
export default function Contact() {
    return (

        <div className={styles.layer}>
            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                <Image
                    src="/intro2.gif"
                    alt="headshot"
                    width={500}
                    height={500}
                    className={styles.contactImage}
                />
            </Suspense>
            <div className={styles.contactInfo}>
                <p className={styles.introDescription}>Thank you for taking the time to explore my portfolio. How can I help you?</p>

                <div className={styles.socialIcons}>
                    <abbr title="My Resume">
                        <a
                            href="/Khalil-Youssef-Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            download
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="/resumeIcon.png"
                                    alt="Resume"
                                    width={397}
                                    height={512}
                                    className={styles.contactIcon}
                                />
                            </Suspense>
                        </a>
                    </abbr>
                    <abbr title="My LinkedIn">
                        <a
                            href="https://linkedin.com/in/ykdevelops"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="/linkedin2.png"
                                    alt="linkedin"
                                    width={500}
                                    height={500}
                                    className={styles.contactIcon}
                                />
                            </Suspense>
                        </a>
                    </abbr>
                    <abbr title="My Github">
                        <a
                            href="https://github.com/ykdevelops"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="/github.png"
                                    alt="github"
                                    width={500}
                                    height={500}
                                    className={styles.contactIcon}
                                />
                            </Suspense>
                        </a>
                    </abbr>
                    <abbr title="My Youtube">
                        <a
                            href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="/youtube1.png"
                                    alt="youtube"
                                    width={500}
                                    height={500}
                                    className={styles.contactIcon}

                                />
                            </Suspense>
                        </a>
                    </abbr>
                </div>
            </div>
        </div>

    );
}
