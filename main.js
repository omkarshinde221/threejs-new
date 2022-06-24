import * as THREE from 'https://cdn.skypack.dev/three';

const scene = new THREE.Scene();

import {OrbitControls} from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);

renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(90);

renderer.render(scene, camera)

const geometry = new THREE.BoxGeometry( 30, 30, 30, 100 );

const geometry1 = new THREE.BoxGeometry( 30, 30, 30, 100 );

const geometry2 = new THREE.BoxGeometry( 30, 30, 30, 100 );

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
//image

console.log("hi")
var imggeometry = new THREE.SphereGeometry(0.5, 32, 32);
var imgtexture = new THREE.TextureLoader().load( "chain.png" );
var imgmaterial = new THREE.MeshBasicMaterial( { map: imgtexture } );
var mesh = new THREE.Mesh(imggeometry, imgmaterial);
console.log("Hello")
scene.add(mesh);

//Cube1
var canvas = document.createElement('canvas');
canvas.width = canvas.height = 256;
var context = canvas.getContext("2d");
context.fillStyle='white';
context.fillRect(1, 1, 256, 256);
context.fillStyle='black';
context.font = "400 12px Arial";
context.fillText("{ ", 3, 20);
context.fillText("Block Number:0 ", 13, 40);
context.fillText("Block created by : nsndcn23782njhnjcdf", 13, 60);
context.fillText("Block verification reward: '2.312 BTC'", 13, 80);
context.fillText("Block Size: 2", 13, 100);
context.fillText("TimeStamp:'Wed May 8 08:58:32 2022'  ", 13, 120);
context.fillText("Total Size: '10'  ", 13, 140);
context.fillText("Transactions:  [ ", 13, 160);
context.fillText("{ kns98293bhjbjsdhc7823h }", 53, 180);
context.fillText(" ] ", 53, 200);
context.fillText("Current Hash: omkad93bhjbjsdhc7823h ", 13, 220);
context.fillText("Previous Hash: 000000000000000  ", 13, 240);
context.fillText("} ", 3, 250);

let canvasTexture = new THREE.CanvasTexture( canvas );

const material = new THREE.MeshBasicMaterial( {color: generateRandomColor() , map: canvasTexture} );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = -50;

//Line1
const Linematerial = new THREE.LineBasicMaterial({
	color: 0xffffff, linewidth: 500
});

const points = [];
points.push( new THREE.Vector3( - 45, 1, 0 ) );
points.push( new THREE.Vector3( -5, 1, -5 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

const Linegeometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( Linegeometry, Linematerial );
scene.add( line );

//Cube2
var canvas1 = document.createElement('canvas');
canvas1.width = canvas1.height = 256;
var context1 = canvas1.getContext("2d");
context1.fillStyle='white';
context1.fillRect(1, 1, 256, 256);
context1.fillStyle='black';
context1.font = "400 12px Arial";
context1.fillText("{ ", 3, 20);
context1.fillText("Block Number:1 ", 13, 40);
context1.fillText("Block created by : nsndcn23782njhnjcdf", 13, 60);
context1.fillText("Block verification reward: '1.312 BTC'", 13, 80);
context1.fillText("Block Size: 2", 13, 100);
context1.fillText("TimeStamp:'Wed May 8 09:02:32 2022'  ", 13, 120);
context1.fillText("Total Size: '10'  ", 13, 140);
context1.fillText("Transactions:  [ ", 13, 160);
context1.fillText("{ mahdijoe3bhjbjsdhc7823h }", 53, 180);
context1.fillText(" ] ", 53, 200);
context1.fillText("Current Hash: Nknknncsnw77983jh ", 13, 220);
context1.fillText("Previous Hash: omkad93bhjbjsdhc7823h  ", 13, 240);
context1.fillText("} ", 3, 250);

let canvasTexture1 = new THREE.CanvasTexture( canvas1 );

const material1 = new THREE.MeshBasicMaterial( {color: generateRandomColor() , map: canvasTexture1} );


const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.x = -10;

//Line2
const Linematerial2 = new THREE.LineBasicMaterial({
	color: 0xffffff, linewidth: 500
});

const points2 = [];
points2.push( new THREE.Vector3( - 5, 1, 0 ) );
points2.push( new THREE.Vector3( 25, 1, -5 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

const Linegeometry2 = new THREE.BufferGeometry().setFromPoints( points2 );

const line2 = new THREE.Line( Linegeometry2, Linematerial2 );
scene.add( line2 );


const queryString = window.location.href;
var url = new URL(queryString);
var sender = url.searchParams.get("sender");
var receiver = url.searchParams.get("receiver");
var amount = url.searchParams.get("amount");
var creator = url.searchParams.get("creator");

// console.log("Value is:" + pair[1]);




//Cube3
console.log("**")
var canvas2 = document.createElement('canvas');
canvas2.width = canvas2.height = 256;
var context2 = canvas2.getContext("2d");
context2.fillStyle='white';
context2.fillRect(1, 1, 256, 256);
context2.fillStyle='black';
context2.font = "400 12px Arial";
context2.fillText("{ ", 3, 20);
context2.fillText("Block Number:2 ", 13, 40);
context2.fillText("Block created by : ", 13, 60);
context2.fillText(creator, 113, 60);
context2.fillText("Transactions:  { ", 13, 80);
context2.fillText("'sender:' ", 23, 100, );
context2.fillText(sender, 73, 100);
context2.fillText("'receiver:' ", 23, 120 );
context2.fillText(receiver, 73, 120);
context2.fillText("'amount:' ", 23, 140 );
context2.fillText(amount, 73, 140);
context2.fillText("} ", 43, 160);
context2.fillText("} ", 3, 206);

let canvasTexture2 = new THREE.CanvasTexture( canvas2 );

const material2 = new THREE.MeshBasicMaterial( {color: generateRandomColor() , map: canvasTexture2} );

const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.position.x = 30;


const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight,ambientLight)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 54, 54);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(100).fill().forEach(addStar);

const controls = new OrbitControls(camera, renderer.domElement)


// const loader = new THREE.CubeTextureLoader();
// const textureCube = loader.load( [
// 	'Hello',
// ] );

function animate(){
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.001;
  // cube.rotation.y += 0.005;

  // cube1.rotation.x += 0.005;
  // cube1.rotation.y += 0.001;

  // cube2.rotation.x += 0.005;
  // cube2.rotation.y += 0.001;
  // cube.rotation.z += 0.01;

  controls.update()

  renderer.render(scene,camera)
}

//text



animate()