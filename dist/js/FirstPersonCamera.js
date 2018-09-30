"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var Util_1 = require("./Util");
var FirstPersonCamera = /** @class */ (function () {
    function FirstPersonCamera(camera) {
        this.pitch = new THREE.Object3D();
        this.yaw = new THREE.Object3D();
        this.camera = camera;
        this.yaw.add(this.pitch);
        this.pitch.add(this.camera);
    }
    FirstPersonCamera.prototype.pitchCamera = function (amount) {
        this.pitch.rotation.x = Util_1.Util.rad(amount);
    };
    FirstPersonCamera.prototype.yawCamera = function (amount) {
        this.yaw.rotation.y = Util_1.Util.rad(amount);
    };
    FirstPersonCamera.prototype.update = function () {
        this.yaw.position.x = this.position.x;
        this.yaw.position.y = this.position.y;
        this.yaw.position.z = this.position.z;
    };
    return FirstPersonCamera;
}());
exports.FirstPersonCamera = FirstPersonCamera;
