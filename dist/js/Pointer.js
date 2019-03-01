"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pointer {
    constructor() {
        this.dx = 0;
        this.dy = 0;
        this.locked = false;
    }
    havePointerLock() {
        return "pointerLockElement" in document ||
            "mozPointerLockElement" in document ||
            "webkitPointerLockElement" in document;
    }
    registerEventHandlers() {
        document.addEventListener("pointerlockchange", this.changeCallback.bind(this), false);
        document.addEventListener("mozpointerlockchange", this.changeCallback.bind(this), false);
        document.addEventListener("webkitpointerlockchage", this.changeCallback.bind(this), false);
        document.addEventListener("mousemove", this.moveCallback.bind(this), false);
    }
    lock(element) {
        element.onclick = () => {
            element.requestPointerLock();
            this.locked = true;
        };
        this.registerEventHandlers();
    }
    isLocked() {
        return this.locked;
    }
    unlock() {
        this.locked = false;
        document.exitPointerLock();
    }
    changeCallback(e) {
    }
    moveCallback(e) {
        this.dx = e.movementX;
        this.dy = e.movementY;
    }
    deltaX() {
        let out = this.dx;
        this.dx = 0;
        return out;
    }
    deltaY() {
        let out = this.dy;
        this.dy = 0;
        return out;
    }
}
exports.Pointer = Pointer;
