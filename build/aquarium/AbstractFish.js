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
var AbstractFish = /** @class */ (function (_super) {
    __extends(AbstractFish, _super);
    function AbstractFish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfUpdate = 0;
        return _this;
    }
    AbstractFish.prototype.update = function () {
        _super.prototype.update.call(this);
        this.checkWalls();
        this.numberOfUpdate++;
        if (this.numberOfUpdate === 1) {
            this.randomTurn();
            this.numberOfUpdate = 0;
        }
    };
    AbstractFish.prototype.randomTurn = function () {
        var randomNumber = Math.ceil(Math.random() * 4);
        switch (randomNumber) {
            case 1:
                this.transform.direction = Direction_1.Direction.UP;
                break;
            case 2:
                this.transform.direction = Direction_1.Direction.DOWN;
                break;
            case 3:
                this.transform.direction = Direction_1.Direction.RIGHT;
                break;
            case 4:
                this.transform.direction = Direction_1.Direction.LEFT;
                break;
        }
    };
    AbstractFish.prototype.getTypeNumber = function () {
        return 1;
    };
    AbstractFish.prototype.checkWalls = function () {
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
    return AbstractFish;
}(GameObject_1.GameObject));
exports.AbstractFish = AbstractFish;
