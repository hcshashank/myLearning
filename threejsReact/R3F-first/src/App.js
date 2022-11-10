import "./App.css";
import { Canvas } from "@react-three/fiber";
import CylinderGeometry from "./CylinderGeometry";
import BoxGeometry from './BoxGeometry'
import PlaneGeometry from './PlaneGeometry'
import { Environment, OrbitControls } from "@react-three/drei";


 
function App() {
  return (
    <>
      <section className='App-header'>
        <Canvas shadows>
            <perspectiveCamera makeDefault position={[0,1,5]} />
          {/* <pointLight position={[10, 10, 10]} /> */}
           <ambientLight />
           <spotLight args={['#ffffff', 1]} position={[-3,1,0]} castShadow/>
          <CylinderGeometry position={[-1.2, 0, 0]} />
          <BoxGeometry position={[1.2,0,0]}/>
          <CylinderGeometry position={[3.2, 0, 0]} />
          <PlaneGeometry position={[0,-3,-1]}
          autoRotate={true}/>
          <OrbitControls autoRotate={false} />
          
        </Canvas>
      </section>
    </>
  );
}
 
export default App;