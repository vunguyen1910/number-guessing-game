let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(randomNumber);
let numberOfGuesses = 10;
let history = '';
let historyRound='';
let round = 1;
let bestScore = "";
let numArray = []
function mainGuess(){
    const guess = parseInt(document.getElementById("number").value);
    if(numberOfGuesses == 0){
        document.getElementById('result').innerHTML = `GAME OVER!`;
        return 0;
    }
    if(guess < randomNumber){
        document.getElementById('result').innerHTML = guess + " is Too Low!";
        if(numArray.includes(guess)){
            document.getElementById('result').innerHTML = 'your number was exist';
        }
    }
    if(guess > randomNumber){
        document.getElementById('result').innerHTML = guess + " is Too High!";
        if(numArray.includes(guess)){
            document.getElementById('result').innerHTML = 'your number was exist';
        }
    }
    if(guess == randomNumber){
        document.getElementById('result').innerHTML = guess + " is Correct!";
        return numberOfGuesses;

    }
    numArray[numberOfGuesses] = guess;
    numberOfGuesses = numberOfGuesses -1;
    document.getElementById('numberOfGuesses').innerHTML = numberOfGuesses;
    document.getElementById("number").value = '';
    history = history + ' ' + guess;
    document.getElementById("Remaining").innerHTML= history;
}
function resetGame(){
    // best scroce last ground
    let scroce = 0;
    if(mainGuess() != 0){
        numberOfGuesses = numberOfGuesses + 1;
        scroce = 10 - numberOfGuesses;
    }
    randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    numberOfGuesses = 10;
    document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
    document.getElementById('result').innerHTML = " ";
    history ="";
    document.getElementById("Remaining").innerHTML= history;
    document.getElementById("number").value = '';
    //print round

    round = round + 1;
    if(scroce > 0){
        historyRound = historyRound + "<br> Your best ground " + round + " was " + scroce;
    }
    else{
        historyRound = historyRound + "<br> Round " + round + ": you failed";
    }
    document.getElementById("round").innerHTML = "Round " + round;
    document.getElementById("bestScore").innerHTML = historyRound;
}