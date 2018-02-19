"use strict";
exports.__esModule = true;
var Aquarium_1 = require("./aquarium/Aquarium");
var Transform_1 = require("./engine/Transform");
var RenderInConsole_1 = require("./aquarium/RenderInConsole");
var Salmon_1 = require("./aquarium/Fishes/Salmon");
var Shark_1 = require("./aquarium/Fishes/Shark");
var aquarium;
var renderer = new RenderInConsole_1.RenderInConsole();
function setDefault() {
    aquarium = new Aquarium_1.Aquarium();
    renderer.takeAquarium(aquarium);
    var fish = new Salmon_1.Salmon();
    var fishTransform = new Transform_1.Transform();
    fishTransform.speed = 2;
    fish.setTransform(fishTransform);
    aquarium.add(fish);
    var fish3 = new Salmon_1.Salmon();
    var fishTransform3 = new Transform_1.Transform();
    fishTransform3.speed = 1;
    fish3.setTransform(fishTransform3);
    aquarium.add(fish3);
    var fish2 = new Shark_1.Shark();
    var fishTransform2 = new Transform_1.Transform();
    fishTransform2.speed = 3;
    fish2.setTransform(fishTransform2);
    aquarium.add(fish2);
}
function mainLoop() {
    aquarium.update();
    renderer.render();
}
setDefault();
setInterval(mainLoop, 400);
