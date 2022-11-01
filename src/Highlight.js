import Drawable from "./Drawable.js";

export default class Highlight extends Drawable {
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
        this.draw();
    }

    draw() {
        this.ctx.fillStyle = Drawable.HIGHLIGHT_COLOR;
        this.ctx.drawImage(Highlight.IMAGE, this.x, this.y, 60, 60);
    }
}

const image =  new Image(100, 100);
image.src = 'images/highlight_2.png';
Highlight.IMAGE = image;