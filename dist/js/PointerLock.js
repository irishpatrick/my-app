"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PointerLock {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
    }
    havePointerLock() {
        return "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document;
    }
    registerEventHandlers() {
        document.addEventListener("pointerlockchange", this.changeCallback.bind(this), false);
        document.addEventListener("mozpointerlockchange", this.changeCallback.bind(this), false);
        document.addEventListener("webkitpointerlockchage", this.changeCallback.bind(this));
        document.addEventListener("mousemove", this.moveCallback.bind(this), false);
    }
    lock(element) {
        element.requestPointerLock = element.requestPointerLock;
        element.requestPointerLock();
    }
    unlock() {
        document.exitPointerLock = document.exitPointerLock;
        document.exitPointerLock();
    }
    changeCallback(e) {
    }
    moveCallback(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }
}
exports.PointerLock = PointerLock;
