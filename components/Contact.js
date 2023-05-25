import React, { Suspense, lazy } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Contact() {
    return (
        <div>
            <div className={styles.layer}>
                <Suspense fallback={<div className={styles.loaderImage}></div>}>
                    <Image
                        src="/contactMePic.png"
                        alt="headshot"
                        width={400}
                        height={400}
                    />
                </Suspense>
                <div className={styles.contactInfo}>
                    <h1 className={styles.contactItem}>Let&apos;s Connect! </h1>

                    <div className={styles.socialIcons}>
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
        </div>
    );
}
