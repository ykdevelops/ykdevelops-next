import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Education from '../components/Education'
import WorkExperience from '../components/WorkExperience'
import Studio from '../components/sideProjects/Studio'
import MugCulture from '../components/sideProjects/MugCulture'
import Contact from '../components/Contact'
import SpeakButton from '../components/SpeakButton'
import ChatApp from '../components/sideProjects/ChatApp'
import Lo2usGallery from '../components/sideProjects/lo2usGallery'
import ArtisticFilters from '../components/sideProjects/ArtisticFilters'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

export default function Home() {
  const [showScrollDown, setShowScrollDown] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowScrollDown(true)
    }, 20000)

    const handleMouseActivity = () => {
      clearTimeout(timeoutId)
      setShowScrollDown(false)
    }

    window.addEventListener('scroll', handleMouseActivity)

    return () => {
      window.removeEventListener('scroll', handleMouseActivity)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>YK Portfolio</title>
        <meta name='description' content='Portfolio' />
        <link rel='icon' href='/favicon2.ico' />
      </Head>
      {/* <SpeakButton /> */}
      {showScrollDown && (
        <div className={styles.scrollColumn}>
          <div className={styles.scrollTitle}>Scroll for more</div>
          <div className={styles.iconScroll}></div>
        </div>
      )}

      <Intro />
      <WorkExperience />
      <Education />
      <Contact />
    </div>
  )
}
