"use strict";
exports.__esModule = true;
var Direction_1 = require("./Direction");
var Transform = /** @class */ (function () {
    function Transform() {
        this.x = 0;
        this.y = 0;
        this.direction = Direction_1.Direction.RIGHT;
        this.speed = 0;
    }
    return Transform;
}());
exports.Transform = Transform;
