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
var Aquarium = /** @class */ (function (_super) {
    __extends(Aquarium, _super);
    function Aquarium() {
        var _this = _super.call(this) || this;
        _this.size.height = 10;
        _this.size.width = 10;
        return _this;
    }
    return Aquarium;
}(GameObject_1.GameObject));
exports.Aquarium = Aquarium;
