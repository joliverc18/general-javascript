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

var scores, roundScore, activePlayer, gamePlaying, finalScore;

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

        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]; // update the score board

        // Check if player won the game
        
        if (scores[activePlayer] >= finalScore) {
            document.getElementById('name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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
//        document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');

    // Another method rather than add/remove class is to use toggle
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    previousDice = 0;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    p0Dice = 0;
    p1Dice = 0;
    document.querySelector('.dice').style.display = 'none';
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
 */

var previousDice = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var currentDice = Math.floor(Math.random()*6) + 1;;
        
        // 1'. Check against previous dice roll
        if (currentDice !== 6) {
            // Carry on
            // 2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + currentDice + '.png';

            // 3. Update round score, if rolled number !== 1

            if(currentDice !== 1) {
                // Add to current score
                roundScore += currentDice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                // Change to next player
                nextPlayer();
            }
            
        } else {
            // Check against previous dice
            if (currentDice !== previousDice) {
                // Store currentDice to previousDice
                previousDice = currentDice;
            } else {
                // Player loses his entire score
                document.getElementById('score-' + activePlayer).textContent = '0';
                nextPlayer();
            }
        }
    }
});

document.querySelector('.final-score').addEventListener('input', function() {
    finalScore = document.getElementById('fscore').value;
})


















