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
      object.scale.set(0.2, 0.2, 0.2);
      object.position.set(0,0,8)

      object.rotation.x = 5 * Math.PI / 6;
      object.rotation.y = -Math.PI / 2; 
      object.rotation.z = Math.PI / 3; 
      object.castShadow = true;
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

const geometry = new THREE.PlaneGeometry( 1000, 1000 );
const material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
const plane = new THREE.Mesh( geometry, material );
plane.receiveShadow = true;
scene.add( plane );


const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("car").appendChild(renderer.domElement);

camera.position.z = objToRender === "car" ? 500 : 600;
camera.position.y = 300;
camera.position.x = 600;

camera.rotateX(-0.3);
camera.rotateY(0.5);
camera.rotateZ(0.1);


//Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(500, 500, 500) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// Create a spotlight
const spotLight = new THREE.SpotLight(0xffffff,2); // Color and intensity
spotLight.position.set(200, -200, 200); // Position the spotlight
spotLight.angle = Math.PI / 8; // Spotlight angle
spotLight.penumbra = 0.1; // Softness of the edge
spotLight.decay = 1; // How the light dims over distance
spotLight.distance = 500; // Maximum range of the light
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;

const spotLight2 = new THREE.SpotLight(0xffffff, 2); // Color and intensity
spotLight2.position.set(-200, -200, 200); // Position the spotlight
spotLight2.angle = Math.PI / 8; // Spotlight angle
spotLight2.penumbra = 0.1; // Softness of the edge
spotLight2.decay = 1; // How the light dims over distance
spotLight2.distance = 500; // Maximum range of the light
spotLight2.castShadow = true;
spotLight2.shadow.mapSize.width = 2048;
spotLight2.shadow.mapSize.height = 2048;

// Optionally add a target to the spotlight
spotLight.target.position.set(0, 0, 0);
spotLight2.target.position.set(0, 0, 0);
scene.add(spotLight.target);
scene.add(spotLight2.target);

// Add the spotlight to the scene
scene.add(spotLight);
scene.add(spotLight2);

// Optionally, add a spotlight helper to visualize the spotlight
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);

// scene.add(spotLightHelper);
// scene.add(spotLightHelper2);

// const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "car" ? 3 : 1);
// scene.add(ambientLight);

if (objToRender === "car") {
  controls = new OrbitControls(camera,renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}

renderer.render(scene,camera);

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