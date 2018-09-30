//var THREE_ADDONS: any = require("three-addons");

var THREE = require("three");
var Addons = require("three-addons");
var GLTFLoader = require("three-gltf-loader");

import {Test} from "./Test";
//import {FirstPersonCamera} from "./FirstPersonCamera";

var test: Test = new Test();
var scene: any;
var camera: any;
var renderer: any;
var loader: any;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true, powerPreference: "high-performance"});
    loader = new GLTFLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function create()
{

    test.test();
    loader.load(
        "assets/tree.gltf",
        (object: any) =>
        {
            scene.add(object.scene);
        },
        (xhr: any) =>
        {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        (error: any) =>
        {
            console.log("error");
        }
    )

    var hemisphere = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.25);
    hemisphere.position.set(10,10,10);
    scene.add(hemisphere);

    var directional = new THREE.DirectionalLight(0xffffff, 0.75);
    directional.position.set(10,10,10);
    scene.add(directional);
    

    camera.position.z = 10;
}

function render()
{
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

init();
create();
render();