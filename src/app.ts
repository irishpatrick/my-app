var THREE: any = require("three");
var THREE_ADDONS: any = require("three-addons");

import {Test} from "./test";

var scene: any;
var camera: any;
var renderer: any;
var loader: any;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    loader = new THREE_ADDONS.OBJLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function create()
{
    loader.load(
        "assets/tree.obj",
        (object: any) =>
        {
            scene.add(object);
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

    var light = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(light);

    camera.position.z = 6;
}

function render()
{
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

init();
create();
render();