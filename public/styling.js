import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
console.log("THREE JS IS WORKING!😎");


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / innerHeight,
    0.1,
    2000
);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;

let controls

let objToRender = 'car';

const loader = new GLTFLoader();

loader.load(
    `models/${objToRender}/scene.gltf`,
    function (gltf) {
      //If the file is loaded, add it to the scene
      object = gltf.scene;
      scene.add(object);
    },
    function (xhr) {
      //While it is loading, log the progress
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );


const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("car").appendChild(renderer.domElement);

camera.position.z = objToRender === "car" ? 700 : 1000;
camera.position.y = 300;
camera.position.x = 600;

camera.rotateX(-0.3);
camera.rotateY(0.5);
camera.rotateZ(0.1);

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "car" ? 3 : 1);
scene.add(ambientLight);

if (objToRender === "car") {
  controls = new OrbitControls(camera,renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}



window.addEventListener("resize", function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

animate();