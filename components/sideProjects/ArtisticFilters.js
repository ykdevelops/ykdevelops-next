import React, { Suspense, lazy } from 'react'
import Image from 'next/image'
import homeStyles from '../../styles/Home.module.css'
import projectStyles from '../../styles/Projects.module.css'
import { BsLink45Deg } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import BoxCanvas from './BoxCanvas'
export default function ArtisticFilters() {
    return (


        <div className={homeStyles.layer}>
            <div className={homeStyles.leftHalf}>
                <div className={projectStyles.projectVisual}>
                    <video
                        src='https://ykdevelops.s3.us-east-2.amazonaws.com/projects/artisticImageFilter.mp4'
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                            maxHeight: '500px',
                            width: '90%',
                            borderRadius: '10px'
                        }}
                    />
                </div>
            </div>
            <div className={homeStyles.rightHalf}>
                <div className={homeStyles.textContainer}>
                    <h1 className={projectStyles.projectTitle}>Artistic Image Filters</h1>
                    <p className={projectStyles.projectDescription}>
                        An application built using the Streamlit framework and OpenCV library in Python. The application allows users to upload an image, select an artistic filter, and apply it to the image.
                    </p>
                </div>


                <h3 className={projectStyles.projectLanguages}>
                    Python | OpenCV | Streamlit
                </h3>
                <div>
                    <a
                        href="https://ykdevelops-opencv-artistic-image-filte-image-filters-app-3hu91f.streamlit.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLink45Deg className={projectStyles.projectIconLink} />
                    </a>
                    <a
                        href="https://github.com/ykdevelops/opencv-artistic-image-filters.git"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub className={projectStyles.projectIconLink2} />
                    </a>
                </div>
            </div>
        </div>

    )
}
