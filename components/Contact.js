import React, { Suspense, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <div className={styles.contactSection}>
            <div className={styles.contactWrapper}>
                {/* Left Column */}
                <div className={styles.contactLeftColumn}>
                    {/* Illustration */}
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

                    {/* Icon Links Row */}
                    <div className={styles.contactIconLinks}>
                        <a
                            href="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/Youssef_Khalil_2025_Resume+(3).pdf"
                            target="_blank"
                            rel="noreferrer"
                            download
                            className={styles.contactIconLink}
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/resumeIcon.png"
                                    alt="Resume"
                                    width={397}
                                    height={512}
                                    className={styles.contactIconSmall}
                                />
                            </Suspense>
                            <span className={styles.contactIconLabel}>Resume</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/ykdevelops"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contactIconLink}
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/linkedin2.png"
                                    alt="linkedin"
                                    width={500}
                                    height={500}
                                    className={styles.contactIconSmall}
                                />
                            </Suspense>
                            <span className={styles.contactIconLabel}>LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/ykdevelops"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contactIconLink}
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/github.png"
                                    alt="github"
                                    width={500}
                                    height={500}
                                    className={styles.contactIconSmall}
                                />
                            </Suspense>
                            <span className={styles.contactIconLabel}>GitHub</span>
                        </a>

                        <a
                            href="https://www.youtube.com/channel/UCRIft9RM1NOq6m0MIJeiJJg"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.contactIconLink}
                        >
                            <Suspense fallback={<div className={styles.loaderImage}></div>}>
                                <Image
                                    src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/youtube1.png"
                                    alt="youtube"
                                    width={500}
                                    height={500}
                                    className={styles.contactIconSmall}
                                />
                            </Suspense>
                            <span className={styles.contactIconLabel}>YouTube</span>
                        </a>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.contactRightColumn}>
                    <h3 className={styles.contactThankYou}>Thank you for exploring my portfolio!</h3>
                    <h2 className={styles.contactHeadline}>How can I help you?</h2>

                    {/* Contact Form */}
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <div className={styles.contactFormField}>
                            <label htmlFor="name" className={styles.contactFormLabel}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.contactFormInput}
                                required
                            />
                        </div>

                        <div className={styles.contactFormField}>
                            <label htmlFor="email" className={styles.contactFormLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.contactFormInput}
                                required
                            />
                        </div>

                        <div className={styles.contactFormField}>
                            <label htmlFor="message" className={styles.contactFormLabel}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.contactFormTextarea}
                                rows={6}
                                required
                            />
                        </div>

                        <button type="submit" className={styles.contactSubmitButton}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
