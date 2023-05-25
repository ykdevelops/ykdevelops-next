import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Intro from '../components/Intro';
import Description from '../components/Description';
import WorkExperience from '../components/WorkExperience';
import Studio from '../components/Studio';
import MugCulture from '../components/MugCulture';
import Contact from '../components/Contact';
import SpeakButton from '../components/SpeakButton'; // Import the SpeakButton component

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ykdevelops</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
      </Head>
      <SpeakButton />
      <Intro />
      <Description />
      <WorkExperience />
      <MugCulture />
      <Studio />
      <Contact />
    </div>
  );
}
