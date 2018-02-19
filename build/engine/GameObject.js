"use strict";
exports.__esModule = true;
var Transform_1 = require("./Transform");
var Size_1 = require("./Size");
var Direction_1 = require("./Direction");
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.content = [];
        this.transform = new Transform_1.Transform();
        this.size = new Size_1.Size();
    }
    GameObject.prototype.getSize = function () {
        return this.size;
    };
    GameObject.prototype.update = function () {
        this.updateTransform();
        this.runUpdateOnChildrenOfThisObject();
    };
    GameObject.prototype.getContent = function () {
        return this.content;
    };
    GameObject.prototype.runUpdateOnChildrenOfThisObject = function () {
        this.content.forEach(function (element) { return element.update(); });
    };
    GameObject.prototype.add = function (elementToAdd) {
        elementToAdd.parent = this;
        this.content.push(elementToAdd);
    };
    GameObject.prototype.remove = function (elementToRemove) {
        if (!elementToRemove)
            throw "Element to remove does not exist";
        elementToRemove.parent = null;
        this.content = this.content.filter(function (gameObject) { return gameObject != elementToRemove; });
        // this.content = this.content.splice(this.content.indexOf(elementToRemove),1);
    };
    GameObject.prototype.setTransform = function (transform) {
        this.transform = transform;
    };
    GameObject.prototype.getTransform = function () {
        return this.transform;
    };
    GameObject.prototype.updateTransform = function () {
        switch (this.transform.direction) {
            case Direction_1.Direction.UP:
                this.transform.y += this.transform.speed;
                break;
            case Direction_1.Direction.DOWN:
                this.transform.y -= this.transform.speed;
                break;
            case Direction_1.Direction.LEFT:
                this.transform.x -= this.transform.speed;
                break;
            case Direction_1.Direction.RIGHT:
                this.transform.x += this.transform.speed;
                break;
        }
    };
    return GameObject;
}());
exports.GameObject = GameObject;
