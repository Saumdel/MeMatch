let card = document.getElementsByClassName(`card`);
let cards = [...card];
let deck = document.getElementsByTagName(`deck`);
let openedCards = [];
let timeRemaining = document.getElementById(`time-remaining`);

flipCard();

cardEl.addEventListener('click', cardOpen());


function flipCard() {
  console.log("flipCard");
  this.openedCards.push(card);
  if (this.card.type === "chand") {
    card.style.backgroundImage = url('/assets/images/Chandler.png')
  } else if (this.card.type === "mon") {
    card.style.backgroundImage = url(`assets\images\Monica.png`)
  } else if (this.card.type === "rachel") {
    card.style.backgroundImage =url(`assets\images\Rachel.png`)
  } else if (this.card.type === "phoebe") {
    card.style.backgroundImage = url(`assets\images\Phoebe.png`) 
  } else if (this.card.type === "ross") {
    card.style.backgroundImage = url(`assets\images\Ross.png`)
  } else if (this.card.type === "gun") {
    card.style.backgroundImage = url(`assets\images\Gunther.jpg`)
  } else if (this.card.type === "janice") {
    card.style.backgroundImage = url(`assets\images\Janice.jpg`)
  } else 
    card.style.backgroundImage = url(`assets\images\Joey.png`)
};

function getCardType(card) {
  return card.getElementsByClassName('card')[i];
};


function cardOpen(){
  openedCards.push(this);
  if(openedCards[0].type === openedCards[1].type){
    matchedCards.push(this)
    matchedCards();
    console.log("You've got a match!")
  } else  {
    unmatchedCards();
    console.log("Woops!")
    this.openedCards.pop;
    this.openedCards.pop;
  }
};

function unmatchedCards(){
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
};

function matchedCards() {
  openedCards[0].classList.add("matched","disable");
  openedCards[1].classList.add("matched","disable");
}



//Shuffle//


function shuffleCards(cards) {
  for (let i = cardsArray.length - 1; i > 0; i--) {
    let randIndex = Math.floor(Math.random() * (i + 1));
    cardsArray[randIndex].style.order = i;
    cardsArray[i].style.order = randIndex;
  }
};

//Counter

function moveCounter() {
  this.flips++;
  moveCounter.innerHTML = flips;
  if (flips == 1){
    second = 100;
  }
};
``
function countDown() {
  timeRemaining--;
  this.timeRemaining = timeRemaining;
    if(timeRemaining === 0) {
    alert("Oh no! Looks like we cant be friends!")
  }
};




window.onload.startCountdown();