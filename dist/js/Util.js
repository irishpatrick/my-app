"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    static rad(deg) {
        return deg * (Math.PI / 180.0);
    }
    static deg(rad) {
        return rad * (180.0 / Math.PI);
    }
}
exports.Util = Util;
