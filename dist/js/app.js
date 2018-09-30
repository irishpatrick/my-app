define("test", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Test {
        constructor() {
        }
        test() {
            console.log("test");
        }
    }
    exports.Test = Test;
});
define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var THREE = require("three");
    var THREE_ADDONS = require("three-addons");
    var scene;
    var camera;
    var renderer;
    var loader;
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        loader = new THREE_ADDONS.OBJLoader();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }
    function create() {
        loader.load("assets/tree.obj", (object) => {
            scene.add(object);
        }, (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        }, (error) => {
            console.log("error");
        });
        var light = new THREE.AmbientLight(0xffffff, 0.25);
        scene.add(light);
        camera.position.z = 6;
    }
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    init();
    create();
    render();
});
