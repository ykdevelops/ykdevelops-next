import React, { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '', // Optional field
        honeypot: '' // Honeypot field for spam protection (hidden from users)
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
    const [submitMessage, setSubmitMessage] = useState('');

    // Auto-hide message after 5 seconds
    useEffect(() => {
        if (submitStatus) {
            const timer = setTimeout(() => {
                setSubmitStatus(null);
                setSubmitMessage('');
            }, 5000);

            // Cleanup timer on unmount or when status changes
            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear status message when user starts typing
        if (submitStatus) {
            setSubmitStatus(null);
            setSubmitMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');

        try {
            // Create a timeout promise
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Request timeout')), 15000)
            );

            // Create the fetch promise
            const fetchPromise = fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Race between fetch and timeout
            const response = await Promise.race([fetchPromise, timeoutPromise]);

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setSubmitMessage('Thank you! Your message has been sent successfully.');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    company: '',
                    honeypot: ''
                });
            } else {
                setSubmitStatus('error');
                // Show detailed error message from API
                const errorMsg = data.message || data.error || 'Failed to send message. Please try again.';
                console.error('API Error Response:', data);
                setSubmitMessage(errorMsg);
            }
        } catch (error) {
            setSubmitStatus('error');
            if (error.message === 'Request timeout') {
                setSubmitMessage('Request timed out. Please check your connection and try again.');
            } else {
                setSubmitMessage('An error occurred. Please try again later.');
            }
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className={styles.contactSection}>
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
                            src="https://ykdevelops.s3.us-east-2.amazonaws.com/contact/outroArt.gif"
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
                    <form className={styles.contactForm} onSubmit={handleSubmit} style={{ position: 'relative' }}>
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

                        {/* Honeypot field - hidden from users but visible to bots */}
                        <div style={{ 
                            position: 'absolute', 
                            left: '-9999px', 
                            opacity: 0, 
                            pointerEvents: 'none',
                            width: '1px',
                            height: '1px',
                            overflow: 'hidden'
                        }}>
                            <label htmlFor="honeypot">Leave this field blank</label>
                            <input
                                type="text"
                                id="honeypot"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                tabIndex="-1"
                                autoComplete="off"
                                aria-hidden="true"
                            />
                        </div>

                        <div className={styles.contactSubmitButtonContainer}>
                            <button 
                                type="submit" 
                                className={styles.contactSubmitButton}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        
                        {submitStatus && (
                            <div 
                                className={`${styles.contactFormMessage} ${
                                    submitStatus === 'success' 
                                        ? styles.contactFormMessageSuccess 
                                        : styles.contactFormMessageError
                                }`}
                            >
                                {submitMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
