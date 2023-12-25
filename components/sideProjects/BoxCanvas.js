import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import styles from "../../styles/Home.module.css";
function Model({ url }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

function RotatingModel({ url }) {
    const ref = useRef()
    useFrame(({ clock }) => {
        ref.current.rotation.y += 0.01
    })

    return (
        <group ref={ref}>
            <Model url={url} />
        </group>
    )
}

const BoxCanvas = () => {
    const modelUrl =
        'https://ykdevelops.s3.us-east-2.amazonaws.com/deskScene22.gltf'

    return (
        <Canvas

            className={styles.canvasBox}
            camera={{ position: [0, 2, 30] }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight color='white' intensity={1} position={[0, 5, 5]} />
            <Suspense fallback={null}>
                <RotatingModel url={modelUrl} />
            </Suspense>
            <OrbitControls enableZoom={true} />
        </Canvas>
    )
}

export default BoxCanvas
