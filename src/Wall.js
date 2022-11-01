import Drawable from "./Drawable.js";

export default class Wall extends Drawable {
    x;
    y;
    width;
    height;

    constructor(x = 0, y = 0, width = Drawable.GRID_SIZE, height = Drawable.GRID_SIZE) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.wallType = Math.floor(Math.random() * Wall.IMAGES.length);
        this.draw();
    }

    draw() {
        this.ctx.drawImage(Wall.IMAGES[this.wallType], this.x, this.y, 60, 60);
    }
}


const image = new Image(100, 100);
image.src = 'images/wall_1.png';
const image2 = new Image(100, 100);
image2.src = 'images/wall_2.png';
const image3 = new Image(100, 100);
image3.src = 'images/wall_3.png';

Wall.IMAGES = [
    image,
    image2,
    image3
]