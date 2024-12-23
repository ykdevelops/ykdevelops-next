import React, { Suspense, lazy } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Contact() {
    return (

        <div className={styles.layer}>
            <Suspense fallback={<Image
                src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/outro4-min.png"
                alt="headshot"
                width={500}
                height={500}
                className={styles.contactImage}
            />}>
                <Image
                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/outro4.gif"
                    alt="headshot"
                    width={500}
                    height={500}
                    className={styles.contactImage}
                />
            </Suspense>
            <div className={styles.contactInfo}>
                <h3 className={styles.contactDescription}>Thank you for exploring my portfolio!</h3>
                <h2 className={styles.contactDescription}>How can I help you?</h2>
                <div className={styles.socialIcons}>
                    <abbr title="My Resume">
                        <a
                            href="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/Youssef-Khalil-2024-Resume_compressed.pdf"
                            target="_blank"
                            rel="noreferrer"
                            download
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/resumeIcon.png"
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
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/linkedin2.png"
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
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/github.png"
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
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/youtube1.png"
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
