import Drawable from "./Drawable";

export default class Target extends Drawable {
    x;
    y;

    constructor(x = 0, y = 0) {
        super();
        this.x = x;
        this.y = y;
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.drawImage(Target.IMAGE, this.x - 20, this.y - 20, 100, 100);
    }
}

const image = new Image(1182, 1137);
image.src = 'images/bed.png';

Target.IMAGE = image;