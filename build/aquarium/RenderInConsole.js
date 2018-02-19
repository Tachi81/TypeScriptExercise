"use strict";
exports.__esModule = true;
var RenderInConsole = /** @class */ (function () {
    function RenderInConsole() {
        this.EMPTY_FIELD = 0;
        this.ABSTRACT_FISH = 1;
        this.SALMON = 2;
        this.SHARK = 3;
        this.SHARK_FED = 4;
        this.COLISION = 99;
    }
    RenderInConsole.prototype.render = function () {
        var aquariumSize = this.aquarium.getSize();
        var checkboard = this.createNewEmptyCheckboard(aquariumSize);
        this.updateFields(checkboard);
        this.clearPreviousDrawing();
        this.drawTopBorder(aquariumSize.width);
        this.drawAquariumContent(checkboard);
        this.drawBottomborder(aquariumSize.width);
    };
    RenderInConsole.prototype.drawAquariumContent = function (checkboard) {
        var consoleOutput = "";
        for (var currentRow = 0; currentRow < checkboard.length; currentRow++) {
            consoleOutput = this.addBorder(consoleOutput);
            consoleOutput = this.fillRowWithIcons(checkboard, currentRow, consoleOutput);
            consoleOutput = this.addBorder(consoleOutput);
            this.drawLine(consoleOutput);
            consoleOutput = "";
        }
    };
    RenderInConsole.prototype.drawLine = function (line) {
        console.log(line);
    };
    RenderInConsole.prototype.addBorder = function (line) {
        return line += "|";
    };
    RenderInConsole.prototype.fillRowWithIcons = function (checkboard, i, consoleOutput) {
        for (var j = 0; j < checkboard.length; j++) {
            var currentField = checkboard[i][j];
            consoleOutput += this.getFieldIcon(currentField);
        }
        return consoleOutput;
    };
    RenderInConsole.prototype.updateFields = function (checkboardToUpdate) {
        var _this = this;
        this.aquarium.getContent().forEach(function (aquariumElement) {
            var transform = aquariumElement.getTransform();
            var oldFieldValue = checkboardToUpdate[transform.x][transform.y];
            var newFieldValue = aquariumElement.getTypeNumber();
            if (_this.isOcuppiedByFish(oldFieldValue)) {
                newFieldValue = _this.COLISION;
            }
            checkboardToUpdate[transform.x][transform.y] = newFieldValue;
        });
    };
    RenderInConsole.prototype.takeAquarium = function (newAquarium) {
        this.aquarium = newAquarium;
    };
    RenderInConsole.prototype.isOcuppiedByFish = function (oldFieldValue) {
        return oldFieldValue != this.EMPTY_FIELD;
    };
    RenderInConsole.prototype.clearPreviousDrawing = function () {
        console.clear();
    };
    RenderInConsole.prototype.createNewEmptyCheckboard = function (aquariumSize) {
        var newCheckboard = [];
        for (var i = 0; i < aquariumSize.width; i++) {
            newCheckboard[i] = [];
            for (var j = 0; j < aquariumSize.height; j++) {
                newCheckboard[i][j] = this.EMPTY_FIELD;
            }
        }
        return newCheckboard;
    };
    RenderInConsole.prototype.getFieldIcon = function (fishNumber) {
        switch (fishNumber) {
            case this.ABSTRACT_FISH:
                return " X ";
            case this.SALMON:
                return " o ";
            case this.SHARK:
                return " R ";
            case this.SHARK_FED:
                return ">=D";
            case this.COLISION:
                return "BUM";
            default:
                return " . ";
        }
    };
    RenderInConsole.prototype.drawTopBorder = function (width) {
        var line = this.createTextPattern(width, "~~~");
        this.drawLine(line);
    };
    RenderInConsole.prototype.drawBottomborder = function (width) {
        var line = this.createTextPattern(width, "___");
        this.drawLine(line);
    };
    RenderInConsole.prototype.createTextPattern = function (width, text) {
        var line = "";
        line = this.addBorder(line);
        for (var i = 0; i < width; i++) {
            line += text;
        }
        line = this.addBorder(line);
        return line;
    };
    return RenderInConsole;
}());
exports.RenderInConsole = RenderInConsole;
