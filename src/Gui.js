const menuIcon = document.querySelector("#gui #menu-icon");
const gameUI = document.querySelector("#gui #game-ui");
const menu = document.querySelector("#gui #menu");
const menuImg = document.querySelector("#gui #menu #menu-img");
const menuImgVictory = document.querySelector("#gui #menu #menu-img-victory");
const guiElement = document.querySelector("#gui");
const newGameButton = document.querySelector("#gui #new-game");
const continueGameButton = document.querySelector("#gui #continue-game");
const results = document.querySelector("#gui #results");

const timePassedEls = document.querySelectorAll("#gui .time-passed");
const clicksCountEls = document.querySelectorAll("#gui .clicks-count");
const wrongCountEls = document.querySelectorAll("#gui .wrong-count");
const scoreEl = document.querySelector("#gui #score");

const victory = document.querySelector("#gui #victory");

export default class Gui {
    newGameCallback;
    pauseGameCallback;
    showStats;
    score;

    constructor() {
        menuIcon.onclick = (e) => {
            if (menu.style.display == "none") {
                this.toggleMenu(true);
            } else {
                this.toggleMenu(false);
            }   
        }

        newGameButton.onclick = (e) => {
            this.toggleMenu(false);
            this.newGameCallback(0);
            continueGameButton.style.display = "block";
            victory.style.display = "none";
            scoreEl.innerText = "";
            results.style.display = "block";
            menuImgVictory.style.display = "none";
            menuImg.style.display = "block";
        }

        continueGameButton.onclick = (e) => {
            this.toggleMenu(false);
        }
    }

    gameEnd() {
        continueGameButton.style.display = "none"
    }

    toggleMenu(show = true) {
        if (!show) {
            guiElement.classList.remove("dark");
            menu.style.display = "none";
            gameUI.style.display = "block";
            this.pauseGameCallback(false);
        } else {
            guiElement.classList.add("dark");
            menu.style.display = "flex";
            gameUI.style.display = "none";
            this.pauseGameCallback(true);
        }
    }

    updateStats(timePassed, clicksCount, wrongCount) {
        timePassedEls.forEach(el => el.innerText = Math.round(timePassed / 1000) + "s");
        clicksCountEls.forEach(el => el.innerText = clicksCount);
        wrongCountEls.forEach(el => el.innerText = wrongCount);
        this.score = 1000000 / Math.sqrt(Math.round(timePassed / 1000)) / Math.log(clicksCount) / (wrongCount + 1);
    }

    victory() {
        victory.style.display = "block";
        continueGameButton.style.display = "none";
        scoreEl.innerText = this.score.toFixed();
        menuImgVictory.style.display = "block";
        menuImg.style.display = "none";
        this.toggleMenu(true);
    }
}