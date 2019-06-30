/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Two different ways to edit the values of selected element in webpage
// Setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// Getter
//var x = document.querySelector('#score-' + activePlayer).textContent; 
//console.log(x);

/*eslint-env browser*/

var scores, roundScore, activePlayer, gamePlaying, finalScore, previousDice;

init();

// Anonymous function; has no name.
//document.querySelector('.btn-roll').addEventListener('click', function() {
//    if (gamePlaying) {
//        // 1. Random number
//        var dice = Math.floor(Math.random()*6) + 1;
//    
//        // 2. Display the result
//        var diceDOM = document.querySelector('.dice');
//        diceDOM.style.display = 'block';
//        diceDOM.src = 'dice-' + dice + '.png';
//
//        // 3. Update round score, if rolled number !== 1
//
//        if(dice !== 1) {
//            // Add to current score
//            roundScore += dice;
//            document.querySelector('#current-' + activePlayer).textContent = roundScore;
//        } else {
//            // Change to next player
//            nextPlayer();
//        }
//    }
//});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        previousDice = 0;
        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]; // update the score board

        // Check if player won the game
        
        if (scores[activePlayer] >= finalScore) {
            document.getElementById('name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
    
})

function nextPlayer() {
     // Change to next player
    
    document.getElementById('current-' + activePlayer).textContent = '0';
//        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousDice = 0;
//        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

    // Another method rather than add/remove class is to use toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
    console.log('Previous score (next player): ' + previousDice);
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    p0Dice = 0;
    p1Dice = 0;
    previousDice = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.final-score').value = '';
    finalScore = 20;

    // Selecting ID
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}


/*
 New Rules:
 
 1. A player loses his ENTIRE score when he rolls two 6 in a row.
    After that, the turn switches to the other player.
    (Hint: Save previous dice roll in a separate variable)
   
 2. Add an input field to the HTML where players can set the winning score, so that
    they can change the predefined score of 100.
    (Hint: You can read that value with the .value property in JavaScript. Use google!)
    
 3. Add another dice to the game, so that there are two dices now. 
    The player looses his current score when one of them is a 1.
    (Hint: you will need CSS to position the second dice, so take a look at the css code for the first one.)
    
 */

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var firstDiceRoll = Math.floor(Math.random() * 6) + 1;
        var secondDiceRoll = Math.floor(Math.random() * 6) + 1;
        var currentDice = firstDiceRoll + secondDiceRoll;
        
        console.log('Player ' + (activePlayer+1) + '\'s turn');
        console.log('First die: ' + firstDiceRoll);
        console.log('Second die: ' + secondDiceRoll + '\n');
        console.log('Previous score (start of roll): ' + previousDice);
        
        // Carry on
        // Display the result
        var diceDOM = document.querySelector('.dice');  // First die
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + firstDiceRoll + '.png';

        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-2').src = 'dice-' + secondDiceRoll + '.png';
        
        // 2. Update round score, if rolled number !== 1
        if (firstDiceRoll === 1 || secondDiceRoll === 1) {
            // Change to next player
            console.log('Previous score (rolled 1): ' + previousDice);
            previousDice = 0;
            nextPlayer();
        } else if (currentDice === previousDice && previousDice === 6) {
            // Player loses his entire score
            document.getElementById('score-' + activePlayer).textContent = '0';
            console.log('Previous score (matched): ' + previousDice);
            previousDice = 0;
            nextPlayer();
        } else {
            // Add to current score
            roundScore += currentDice;
            previousDice = currentDice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        
    }
    
});

document.querySelector('.final-score').addEventListener('input', function() {
    finalScore = document.getElementById('fscore').value;
})


















