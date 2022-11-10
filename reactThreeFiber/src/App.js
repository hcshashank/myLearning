import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import './App.css'


function Sphere(){
  return(
    <mesh visible position={[0,0,0]} rotation={[0,0,0]} castShadow >
      <sphereGeometry attach="geometry" args={[2,32,32]}/>
      <meshNormalMaterial attach="material" color='white' roughness={0.1} metalness={1}/>
    </mesh>
  )
}

const App = () => {
  return <Canvas>
<Sphere/>
  </Canvas>;
 
    
  
};

export default App;
