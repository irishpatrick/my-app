//var THREE_ADDONS: any = require("three-addons");

var THREE = require("three");
var Addons = require("three-addons");
var GLTFLoader = require("three-gltf-loader");

import {Test} from "./test";

var test: Test = new Test();
var scene: any;
var camera: any;
var renderer: any;
var loader: any;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
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

    var light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

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