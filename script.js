/*----- constants -----*/
const players = {
    '1': {
        name: '',
        score: 0
    },
    '-1': {
        name: '',
        score: 0
    }
};








/*----- app's state (variables) -----*/
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready())
} else {
    ready();
}   

function ready() {

}





/*----- cached element references -----*/




 /*----- event listeners -----*/



/*----- functions -----*/

class friendsMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById("time-remaining");
        this.ticker = document.getElementById("flips");
        this.audioController = new audioController();
    }
    // this initial function that we will call on when we start/restart/lose"
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card) {
        if(this.canflipCard(card)) {
            //this.audioController.flip = 
            //Increase the count for the # of clicks as well as update the counter
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
        }
    }

    // *Statement only true if all returns false;  //
    // If this statement retuurns true, user can flip the card  //
    canFlipCard(card) {
       return true;
       // return !this.busy && !this.matchedCards.includes(card) && !== this.cardToCheck;
    }
} 





// background music //
class AudioController {
    constructor();
    this.bgMusic = new Audio("C:\Users\Sam\Documents\GitHub\MeMatch\assets\audio\I ll be there for you - The Rembrandts - Friends song.mp3")
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
 }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    gameOver() {
        this.stopMusic() {
    }
}

let audioController = new audioController();
audioController.startMusic();
