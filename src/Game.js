import Drawable from "./Drawable.js";
import Player from "./Player.js";
import Target from "./Target.js";
import Wall from "./Wall.js";
import Highlight from "./Highlight.js";
const mazeGenerator = require('generate-maze');

export default class Game extends Drawable {
    player;
    target;
    walls = [];
    highlights = [];
    possibleMovesHighlighted = false;

    width = 7;
    height = 10;
    map = [];

    clicksCount = 0;
    wrongCount = 0;
    visited = [];
    victory = false;

    constructor() {
        super();
        this.createMaze();
        
        this.player = new Player(60, 60);
        this.target = new Target(1140, 780);

        this.createWalls();
    }

    createMaze() {
        const width = this.width;
        const height = this.height;

        const maze = mazeGenerator(width, height, true, Math.random() * 10000);

        const map = new Array(height * 2 + 1).fill(1).map(() => new Array(width * 2 + 1).fill(1));
        this.visited = new Array(height * 2 + 1).fill(0).map(() => new Array(width * 2 + 1).fill(0));

        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[i].length; j++) {
                const iproj = i * 2 + 1;
                const jproj = j * 2 + 1;
                const obj = maze[i][j];

                map[iproj][jproj] = 0;

                if (obj.top == false) {
                    map[iproj - 1][jproj] = 0;
                }
                if (obj.bottom == false) {
                    map[iproj + 1][jproj] = 0;
                }
                if (obj.left == false) {
                    map[iproj][jproj - 1] = 0;
                }
                if (obj.right == false) {
                    map[iproj][jproj + 1] = 0;
                }
            }
        }

        this.map = map;
    }

    createWalls() {
        const walls = new Array(this.map.length);
        for (let i = 0; i < this.map.length; i++) {
            walls[i] = new Array(this.map[i].length);
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 1) {
                    walls[i][j] = new Wall(i * Drawable.GRID_SIZE, j * Drawable.GRID_SIZE);
                }
            }
        }
        this.walls = walls;
    }

    update() {
        this.player.update();

        if (!this.possibleMovesHighlighted && !this.player.moving) {
            this.highlights = [];
            const playerX = Math.floor(this.player.x / Drawable.GRID_SIZE);
            const playerY = Math.floor(this.player.y / Drawable.GRID_SIZE);

            if (playerX == this.height * 2 - 1 && playerY == this.width * 2 - 1) {
                this.victory = true;
                this.possibleMovesHighlighted = true;
                return;
            }

            for (let i = 0; i <= Math.PI * 2; i += Math.PI / 2) {
                for (let j = 1; j <= Game.MAX_GRIDS_MOVE; j++) {
                    const blockX = Math.round(playerX + Math.cos(i) * j);
                    const blockY = Math.round(playerY + Math.sin(i) * j);

                    if (this.map[blockX][blockY] == 1) {
                        break;
                    } else {
                        this.highlights.push(
                            new Highlight(blockX * Drawable.GRID_SIZE, blockY * Drawable.GRID_SIZE)
                        );
                    }
                }
            }

            this.possibleMovesHighlighted = true;
        }
    }

    draw() {
        this.ctx.fillStyle = Drawable.BACKGROUND_COLOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.possibleMovesHighlighted) {
            this.highlights.forEach(highlight => highlight.draw());
        }
        
        this.walls.forEach(walls => walls.forEach(wall => wall.draw()));
        this.target.draw();
        this.player.draw();
    }

    click = (event) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = (event.clientX - rect.left) * this.canvas.width / rect.width;
        const y = (event.clientY - rect.top) * this.canvas.height / rect.height;
        if (!this.player.moving) {
            this.handleClick(x, y);
        }
    }

    handleClick(x, y) {
        const blockX = Math.floor(x / Drawable.GRID_SIZE);
        const blockY = Math.floor(y / Drawable.GRID_SIZE);

        for (const highlight of this.highlights) {
            const highlightBlockX = Math.floor(highlight.x / Drawable.GRID_SIZE);
            const highlightBlockY = Math.floor(highlight.y / Drawable.GRID_SIZE);
            if (blockX == highlightBlockX && blockY == highlightBlockY) {
                this.possibleMovesHighlighted = false;
                this.player.move(blockX * Drawable.GRID_SIZE, blockY * Drawable.GRID_SIZE);
                this.clicksCount++;

                if (this.visited[blockX] && this.visited[blockX][blockY]) {
                    this.wrongCount++;
                }

                this.visited[blockX][blockY] = 1;
                break;
            }
        }
    }
}

Game.GRIDS_WIDTH = 20;
Game.GRIDS_HEIGHT = 15;
Game.MAX_GRIDS_MOVE = 3;