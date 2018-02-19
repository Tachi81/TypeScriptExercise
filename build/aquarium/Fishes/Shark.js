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
var AbstractFish_1 = require("../AbstractFish");
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        var _this = _super.call(this) || this;
        _this.currentType = 3;
        _this.typeOfFish = "Shark";
        return _this;
    }
    Shark.prototype.getTypeNumber = function () {
        return this.currentType;
    };
    Shark.prototype.checkFishInField = function () {
        var _this = this;
        var fishes = this.parent.getContent();
        fishes.forEach(function (fish) {
            if ((fish.getTransform().x == _this.getTransform().x) &&
                (fish.getTransform().y == _this.getTransform().y) &&
                _this.isNotMe(fish)) {
                _this.parent.remove(fish);
                _this.currentType = 4;
                _this.add(fish);
            }
        });
    };
    Shark.prototype.isNotMe = function (fish) {
        return fish != this;
    };
    Shark.prototype.update = function () {
        _super.prototype.update.call(this);
        this.checkFishInField();
    };
    return Shark;
}(AbstractFish_1.AbstractFish));
exports.Shark = Shark;
