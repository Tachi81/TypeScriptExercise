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
var Salmon = /** @class */ (function (_super) {
    __extends(Salmon, _super);
    function Salmon() {
        var _this = _super.call(this) || this;
        _this.typeOfFish = "Salmon";
        return _this;
    }
    Salmon.prototype.getTypeNumber = function () {
        return 2;
    };
    return Salmon;
}(AbstractFish_1.AbstractFish));
exports.Salmon = Salmon;
