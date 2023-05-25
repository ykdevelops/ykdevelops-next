import React, { Suspense, lazy } from 'react';
// import { useInView } from 'react-intersection-observer'; // Optional, for scroll-based lazy loading
//const BoxCanvas = lazy(() => import('./BoxCanvas'));
import { startTransition } from 'react';
import BoxCanvas from './BoxCanvas'
import styles from '../styles/LaptopHome.module.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

import { AiFillFilePdf } from 'react-icons/ai'

export default function LaptopHome() {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>

            </div>
        </div>
    )
}