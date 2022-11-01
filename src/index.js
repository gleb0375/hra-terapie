import Game from "./Game.js";
import Gui from "./Gui.js";

let game;
let gamePaused;
let timePassed = 0;

const gui = new Gui();
gui.newGameCallback = (difficulty) => {
    game = new Game(difficulty);
    gamePaused = false;
    timePassed = 0;

    then = Date.now();
    loop();
}
gui.pauseGameCallback = (status) => {
    gamePaused = status;
}


const fps = 30;
const interval = 1000 / fps;
let now;
let then;
let delta;
function loop() {
    requestAnimationFrame(loop);

    now = Date.now();
    delta = now - then;
    if (delta > interval) {
        then = now - (delta % interval);
        game.update();
        game.draw();

        if (!gamePaused) {
            timePassed += delta;
        }

        gui.updateStats(timePassed, game.clicksCount, game.wrongCount);
        
        if (!gamePaused && game.victory) {
            gui.victory();
        }
    }
}
 
document.body.addEventListener('click', (e) => {
    if (!gamePaused && game) {
        game.click(e);
    }
})