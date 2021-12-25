//challenge 1
function ageInDays(){
    var year = prompt('Enter your birthyear:');
    var age = (2021-year) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Your age is '+ age +' days.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h1);
}
function resetAnswer(){
    //var resetAns = document.createTextNode(' ')
    //document.getElementById('ageInDays').innerHTML = ' ';
    document.getElementById('ageInDays').remove();
}

//challenge 2
function generateCats(){
    var imgs = document.createElement('img');
    imgs.src = 'C:/Users/noore/OneDrive/Desktop/New folder/glowing-sword.jpg';
    document.getElementById('cats').appendChild(imgs);
}
function resetImgs(){
    document.getElementById('cats').remove();
}

//challenge 3
function rpsGame(input){
    var humanChoice, botChoice;
    humanChoice = input.id;
    botChoice = numberToChoice(ranimg());
    results = decide(humanChoice, botChoice);
    finalMessage = answer(results);

    rpsFrontEnd(results, finalMessage);
}

function ranimg(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decide(humanChoice, botChoice){
    var rpsDB = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

    var hScore = rpsDB[humanChoice][botChoice];
    var bScore = rpsDB[botChoice][humanChoice];

    return [hScore, bScore];
}

function answer([hScore, bScore]){
    if(hScore == 0){
        return {'message': 'You lost', 'color': 'red'};
    }
    else if(hScore == 1){
        return {'message': 'You won', 'color': 'green'};
    }
    else{
        return {'message': 'You tied', 'color': 'yellow'};
    }
}

function rpsFrontEnd(results, finalMessage){
    /*document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();*/

    //document.getElementById('result').innerHTML = "<img src=\"rock.jpg\" alt=\"rock\">";    
    document.getElementById('result').innerHTML = "<h1 style='color:"+finalMessage.color+"';>" + finalMessage.message + "</h1>";
}

//challenge 4
function changeColour(option){
    var colourDB = {
        'red': 'danger',
        'green': 'success',
        'blue': 'primary'
    };

    var temp = document.getElementsByClassName('buttons');
    for(let i=0; i < temp.length; i++){
        temp[i].setAttribute('class', 'buttons btn btn-' + colourDB[option.value]);
    }
}