//var THREE_ADDONS: any = require("three-addons");

var THREE = require("three");
var Addons = require("three-addons");
var GLTFLoader = require("three-gltf-loader");

import {Util} from "./Util";
import {FirstPersonCamera} from "./FirstPersonCamera";
import {Pointer} from "./Pointer";

var scene: any;
var camera: any;
var renderer: any;
var loader: any;

var lock: boolean;

var keys: boolean[];

var tree: any = null;

var pointer: Pointer;

function init()
{
    keys = [];
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    renderer = new THREE.WebGLRenderer({antialias: true, powerPreference: "high-performance"});
    renderer.setClearColor(0xffdd77, 1);
    renderer.gammaFactor = 2.2;
    renderer.gammaOutput = true;
    loader = new GLTFLoader();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // pointerlock
    /*renderer.domElement.onclick = () =>
    {
        renderer.domElement.requestPointerLock();
        lock = true;
    }*/

    pointer = new Pointer();
    pointer.lock(renderer.domElement);

    // event listeners
    window.addEventListener("resize", (e) =>
    {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.addEventListener("keydown", (e: any) =>
    {
        keys[e.keyCode] = true;
    }, false);

    window.addEventListener("keyup", (e: any) =>
    {
        delete keys[e.keyCode];
    }, false);
}

function create()
{
    camera.position.set(0, 3, 0);
    loader.load(
        "assets/tree.gltf",
        (object: any) =>
        {
            tree = object.scene;
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

    var ambient = new THREE.AmbientLight(0xbbffff, 0.2);
    scene.add(ambient);

    var sun = new THREE.DirectionalLight(0xffffff, 0.75);
    sun.position.set(10,10,0);
    scene.add(sun);
    camera.position.z = 10;
}

function update()
{
    if (keys[27])
    {
        if (pointer.isLocked())
        {
            //document.exitPointerLock();
            pointer.unlock();
            lock = false;
        }
    }
    camera.rotation.y -= pointer.deltaX() / 2000;

}

function render()
{
    update();
    if (tree !== null)
    {
        tree.rotation.y += Util.rad(0.5);
    }
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

init();
create();
render();
