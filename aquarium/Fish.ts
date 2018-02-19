import { GameObject } from "../engine/GameObject";
import { Direction } from "../engine/Direction";



export class Fish extends GameObject {
    public update() {
        super.update();
        this.checkWalls();
      //  console.log(this.transform);
    }
    private checkWalls() {
        const aquariumSize = this.parent.getSize();
        if (this.transform.x > aquariumSize.width-1) {
            this.transform.x = aquariumSize.width-1;
            this.transform.direction = Direction.UP;
        }
        if (this.transform.x < 0) {
            this.transform.x = 0;
            this.transform.direction = Direction.DOWN;
        }
        if (this.transform.y > aquariumSize.height-1) {
            this.transform.y = aquariumSize.height-1;
            this.transform.direction = Direction.LEFT;
        }
        if (this.transform.y < 0) {
            this.transform.y = 0;
            this.transform.direction = Direction.RIGHT;
        }
    }
}