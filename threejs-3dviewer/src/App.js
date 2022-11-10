import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import React from "react";
import { Color } from "three";

let objects = []
//Scene create
let scene = new THREE.Scene();
scene.background = new Color(0xbfd1e5);
//camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5000
);
camera.position.set(-35, 70, 100);

//Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);
controls.update();
const dragControls = new DragControls( objects, camera, renderer.domElement );
dragControls.addEventListener( 'dragstart', function ( event ) {

	event.object.material.emissive.set( 0xaaaaaa );

} );

dragControls.addEventListener( 'dragend', function ( event ) {

	event.object.material.emissive.set( 0x000000 );

} );

//init hemishaphere Light
scene.add(new THREE.AmbientLight(0xffffff, 0.20));

document.body.appendChild(renderer.domElement);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize);
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

//Add direction light
let dirLight = new THREE.DirectionalLight(0xffffff,1)
dirLight.position.set(-30,50,-30)
scene.add(dirLight)
dirLight.castShadow= true
dirLight.shadow.mapSize.width = 2048
dirLight.shadow.mapSize.height = 2048
dirLight.shadow.camera.left = -70
dirLight.shadow.camera.right = 70
dirLight.shadow.camera.top = 70
dirLight.shadow.camera.bottom = -70

function createFloor() {
  let blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry(),
       new THREE.MeshPhongMaterial({ color: 0xf9c834 }));
  blockPlane.position.set(0, -1, 3);
  blockPlane.scale.set(100, 2, 100);
  blockPlane.castShadow = true;
  blockPlane.receiveShadow = true;
  
  scene.add(blockPlane);

  blockPlane.userData.ground = true
}

// box
function createBox() {
    let box = new THREE.Mesh(new THREE.BoxBufferGeometry(), 
      new THREE.MeshPhongMaterial({ color: 0xDC143C }));
  box.position.set(15, 3,15);
  box.scale.set(6,6,6);
  box.castShadow = true;
  box.receiveShadow = true;
  objects.push(box)
  scene.add(box)

  box.userData.draggable = true
  box.userData.name = 'BOX'
}

function createBall() {
  let radius = 4;
  let pos = { x: 15, y: radius, z: -15 };

  let sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(4, 32, 32), 
      new THREE.MeshPhongMaterial({ color: 0x43a1f4 }))
  sphere.position.set(15,4,-15)
  sphere.castShadow = true
  sphere.receiveShadow = true
  objects.push(sphere)
  scene.add(sphere)

  sphere.userData.draggable = true
  sphere.userData.name = 'SPHERE'
}

function createCylinder() {
  let radius = 4;
  let height = 6
  // threejs
  let cylinder = new THREE.Mesh(new THREE.CylinderBufferGeometry(radius, radius, height, 32), new THREE.MeshPhongMaterial({ color: 0x90ee90 }))
  cylinder.position.set(-15,3,15)
  cylinder.castShadow = true
  cylinder.receiveShadow = true
  objects.push(cylinder)
  scene.add(cylinder)

  cylinder.userData.draggable = true
  cylinder.userData.name = 'CYLINDER'
}


createFloor()
createBox()
createBall()
createCylinder()
animate();

const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>Hello Threejs</h1>
    </div>
  );
};

export default App;
