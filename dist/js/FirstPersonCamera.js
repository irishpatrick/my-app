"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
const Util_1 = require("./Util");
class FirstPersonCamera {
    constructor(camera) {
        this.pitch = new THREE.Object3D();
        this.yaw = new THREE.Object3D();
        this.camera = camera;
        this.yaw.add(this.pitch);
        this.pitch.add(this.camera);
    }
    pitchCamera(amount) {
        this.pitch.rotation.x = Util_1.Util.rad(amount);
    }
    yawCamera(amount) {
        this.yaw.rotation.y = Util_1.Util.rad(amount);
    }
    update() {
        this.yaw.position.x = this.position.x;
        this.yaw.position.y = this.position.y;
        this.yaw.position.z = this.position.z;
    }
}
exports.FirstPersonCamera = FirstPersonCamera;
