import  { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls,Text} from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { Link } from "react-router-dom";

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
    const smoothProgress = useSpring(progress, {damping: 20});

    return (
        <div ref={container} className='main'>
            <div className='cube'>
                <Link to={'/about'}>
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false}/>
                    <ambientLight intensity={2}/>
                    <directionalLight position={[1, 1, 1]}/>
                    <Cube />
                    {/* <Text3D/> */}
                </Canvas>
                </Link>
            </div>
        </div>
    )
}


// const Text3D = () => {

//       const mesh = useRef(null);
//    useFrame( (state, delta)=>{
//     mesh.current.rotation.x += delta * 0.2
//     mesh.current.rotation.y += delta * 0.2
//     mesh.current.rotation.z += delta * 0.2
//    })

//   return (
//     <Text
//     ref={mesh}
//       position={[0, 0, 0]}
//       fontSize={1}
//       color="green"
//       anchorX="center"
//       anchorY="middle"
      
//     >
//       START A PROJECT
//       <meshStandardMaterial attach="material" color="white" />
//     </Text>
//   );
// };

function Cube() {

    const mesh = useRef(null);
   useFrame( (state, delta)=>{
    mesh.current.rotation.x += delta * 0.2
    mesh.current.rotation.y += delta * 0.2
    mesh.current.rotation.z += delta * 0.2
   })
 

    const texture_1 = useLoader(TextureLoader, "/assets/5.jpg")
    const texture_2 = useLoader(TextureLoader, "/assets/4.jpg")
    const texture_3 = useLoader(TextureLoader, "/assets/5.jpg")
    const texture_4 = useLoader(TextureLoader, "/assets/4.jpg")
    const texture_5 = useLoader(TextureLoader, "/assets/5.jpg")
    const texture_6 = useLoader(TextureLoader, "/assets/4.jpg")

    return (
        <motion.mesh ref={mesh} >
            <boxGeometry args={[0.8, 0.8, 0.8,1]}/>
            <meshStandardMaterial map={texture_1} attach="material-0" />
            <meshStandardMaterial map={texture_2} attach="material-1" color={'orange'}/>
            <meshStandardMaterial map={texture_3} attach="material-2" color={'orange'}/>
            <meshStandardMaterial map={texture_4} attach="material-3" color={'orange'}/>
            <meshStandardMaterial map={texture_5} attach="material-4" />
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
         
    )
}