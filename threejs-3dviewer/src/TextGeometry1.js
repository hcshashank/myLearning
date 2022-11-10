import * as THREE from 'three'
import OrbitControls from 'three/examples/jsm/controls/OrbitControls.js'
import React from 'react'
  
  const TextGeometry1 = () => {
   //scene
var scene = new THREE.Scene();
scene.background = 0xffffff;

//camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//init camera
camera.position.x = 3;
camera.position.y = 20;
camera.position.z = 45;

//Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, -40);
controls.update();

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(200, 200),
  new THREE.MeshPhongMaterial({ color: 0x0a7d15 })
);
plane.rotation.x = -Math.PI / 2;
plane.recieveShadow = true;
scene.add(plane);

//init hemishaphere Light
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  //Point Light
  var light = new THREE.PointLight(0xff6666, 1, 100);
  light.castShadow = true
  light.shadow.mapSize.width = 4096
  light.shadow.mapSize.height = 4096
  scene.add(light)

  var light1 = new THREE.PointLight(0x33ff33, 1, 100);
  light1.castShadow = true
  light1.shadow.mapSize.width = 4096
  light1.shadow.mapSize.height = 4096
  scene.add(light1)



  function animate(){
      const now = Date.now()/1000
      light.position.y = 15
      light.position.x = Math.cos(now)*20
      light.position.z = Math.sin(now)*20


      light1.position.y = 15
      light1.position.x = Math.cos(now)*20
      light1.position.z = Math.sin(now)*20

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
  }

  document.body.appendChild(renderer.domElement)
  animate()
    return (
      <div>App</div>
    )
  }
  
  export default TextGeometry1