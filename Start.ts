import { Aquarium } from "./aquarium/Aquarium";
import { Transform } from "./engine/Transform";
import { RenderInConsole } from "./aquarium/RenderInConsole";
import { AbstractFish } from "./aquarium/AbstractFish";
import { Salmon } from "./aquarium/Fishes/Salmon";
import { Shark } from "./aquarium/Fishes/Shark";

var aquarium;
const renderer:RenderInConsole = new RenderInConsole();


function setDefault() {
    aquarium = new Aquarium();
    renderer.takeAquarium(aquarium);

    const fish = new Salmon();
    const fishTransform = new Transform();
    fishTransform.speed = 2;
    fish.setTransform(fishTransform);
    aquarium.add(fish);

    const fish3 = new Salmon();
    const fishTransform3 = new Transform();
    fishTransform3.speed = 1;
    fish3.setTransform(fishTransform3);
    aquarium.add(fish3);

    const fish2 = new Shark();
    const fishTransform2 = new Transform();
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