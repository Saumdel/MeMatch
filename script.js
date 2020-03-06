let card = document.getElementsByClassName("card");
let cards = [...card];
let deck = document.getElementsByTagName("deck");
let openedCards = [];
let timeRemaining = document.getElementById("time-remaining");

card[0].addEventListener('click', flipCard);
card[1].addEventListener('click', flipCard);
card[2].addEventListener('click', flipCard);
card[3].addEventListener('click', flipCard);
card[4].addEventListener('click', flipCard);
card[5].addEventListener('click', flipCard);
card[6].addEventListener('click', flipCard);
card[7].addEventListener('click', flipCard);
card[8].addEventListener('click', flipCard);
card[9].addEventListener('click', flipCard);
card[10].addEventListener('click', flipCard);
card[11].addEventListener('click', flipCard);
card[12].addEventListener('click', flipCard);
card[13].addEventListener('click', flipCard);
card[14].addEventListener('click', flipCard);
card[15].addEventListener('click', flipCard);

function flipCard() {
  console.log(this);
  if (this.className === "card chand") {
    this.style.backgroundImage =  'url("assets/images/Chandler.png")'
  } else if (this.className === "card mon") {
    this.style.backgroundImage = 'url("assets/images/Monica.png")'
  } else if (this.className === "card rachel") {
    this.style.backgroundImage = 'url("assets/images/Rachel.png")'
  } else if (this.className === "card phoebe") {
    this.style.backgroundImage = 'url("assets/images/Phoebe.png")'
  } else if (this.className === "card ross") {
    this.style.backgroundImage = 'url("assets/images/Ross.png")'
  } else if (this.className === "card gun") {
    this.style.backgroundImage = 'url("assets/images/Gunther.jpg")'
  } else if (this.className === "card janice") {
    this.style.backgroundImage = 'url("assets/images/Janice.jpg")'
  } else 
    this.style.backgroundImage = 'url("assets/images/Joey.png")'
};


// function cardOpen(){
//   openedCards.push(this);
//   if(card.openedCards[0] === card.openedCards[1]){
//     matchedCards.push(this)
//     matchedCards();
//     alert("You've got a match!")
//   } else  {
//     unmatchedCards();
//     alert("Woops!")
//     this.openedCards.pop;
//     this.openedCards.pop;
//   }
// };

function unmatchedCards(){
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
};

function matchedCards() {
  openedCards[0].classList.add("matched","disable");
  openedCards[1].classList.add("matched","disable");
}



// //Shuffle//
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