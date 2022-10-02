import './Home.sass';
import React, {Canvas, useFrame} from '@react-three/fiber';
import {useRef, useState} from 'react';
import SkateboardFull from '../assets/skateboard-full.glb';
import {useScroll} from '@react-three/drei';


function Skateboard(props) {
  const scroll = useScroll();
}

function Box(props) {
  const ref = useRef();
  const [width, height] = useThree((state) => state.viewport);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));
  return <mesh
    {...props}
    ref={ref}
    scale={clicked? 1.5 : 1}
    onClick={() => click(!clicked)}
    onPointerOver={() => hover(true)}
    onPointerOut={() => hover(false)}>
    <boxGeometry args={[1, 1, 1]}/>
    <meshStandardMaterial color={hovered? 'hotpink' : 'orange'}/>
  </mesh>
  ;
}
export default function Home() {
  return <Canvas>
    <ambientLight />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
    <pointLight position={[-10, -10, -10]}/>
    <Box position={[-1.2, 0, 0]}/>
    <Box position={[1.2, 0, 0]}/>
    <Skateboard position={[0, -1, 0]}/>;
  </Canvas>;
}
