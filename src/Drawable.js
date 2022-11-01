export default class Drawable {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
    }

    draw() {}
}

Drawable.BACKGROUND_COLOR = "#895530";
Drawable.GRID_SIZE = 60;