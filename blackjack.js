let blackjackGame = {
    'you': {'scoreSpan': '#your-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0},
    'card': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J':10, 'A':[1,11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#hit-button').addEventListener('click', blackjackHit);

function blackjackHit(){
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(card, YOU);
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['card'][randomIndex];
}

function showCard(card, activePlayer) {
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement('img');
        cardImg.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImg);
    // hitSound.play();
    }
}

document.querySelector('#deal-button').addEventListener('click', blackjackDeal);

function blackjackDeal(){
    let yourImages =  document.querySelector(YOU['div']).querySelectorAll('img');
    let dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');

    for(let i=0; i<yourImages.length; i++){
        yourImages[i].remove();
    }
    for(let i=0; i<dealerImages.length; i++){
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-result').textContent = 0;
    document.querySelector('#your-result').style.color = 'white';

    document.querySelector('#dealer-result').textContent = 0;
    document.querySelector('#dealer-result').style.color = 'white';
}

function updateScore(card, activePlayer){
    if(card == 'A'){
        if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
        
    }
}

function showScore(card, activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).innerHTML= activePlayer['score'];
    }
}