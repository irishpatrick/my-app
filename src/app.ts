var THREE: any = require("three");
var THREE_ADDONS: any = require("three-addons");

var scene: any;
var camera: any;
var renderer: any;

function init()
{
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

function create()
{
    
}

init();