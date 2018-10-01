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
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    renderer = new THREE.WebGLRenderer({antialias: true, powerPreference: "high-performance"});
    renderer.setClearColor(0xffdd77, 1);
    loader = new GLTFLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("resize", (e) =>
    {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function create()
{
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
            console.log(error);
        }
    )

    loader.load(
        "assets/skybox.gltf",
        (object: any) =>
        {
            var mesh = object.scene.children[0];
            mesh.material.side = THREE.DoubleSide;
            scene.add(object.scene);
        },
        (xhr: any) => {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        },
        (error: any) =>
        {
            console.log(error);
        }
    )

    var ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient);

    var hemisphere = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    hemisphere.position.set(10,10,10);
    //scene.add(hemisphere);
    

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