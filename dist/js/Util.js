"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.rad = function (deg) {
        return deg * (Math.PI / 180.0);
    };
    Util.deg = function (rad) {
        return rad * (180.0 / Math.PI);
    };
    return Util;
}());
exports.Util = Util;
