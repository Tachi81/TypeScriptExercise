"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GameObject_1 = require("../engine/GameObject");
var Direction_1 = require("../engine/Direction");
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.prototype.update = function () {
        _super.prototype.update.call(this);
        this.checkWalls();
        //  console.log(this.transform);
    };
    Fish.prototype.checkWalls = function () {
        var aquariumSize = this.parent.getSize();
        if (this.transform.x > aquariumSize.width - 1) {
            this.transform.x = aquariumSize.width - 1;
            this.transform.direction = Direction_1.Direction.UP;
        }
        if (this.transform.x < 0) {
            this.transform.x = 0;
            this.transform.direction = Direction_1.Direction.DOWN;
        }
        if (this.transform.y > aquariumSize.height - 1) {
            this.transform.y = aquariumSize.height - 1;
            this.transform.direction = Direction_1.Direction.LEFT;
        }
        if (this.transform.y < 0) {
            this.transform.y = 0;
            this.transform.direction = Direction_1.Direction.RIGHT;
        }
    };
    return Fish;
}(GameObject_1.GameObject));
exports.Fish = Fish;
