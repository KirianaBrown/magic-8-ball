/*
            MAGIC 8 BALL CODE - KB MARCH / APRIL 2019
                    GITHUB REPO: MAGIC-8-BALL 

    STRUCTURE
    1. get value from input field and if null then error else 
    2. generate random number using math methods
    3. random number = the src image update to replace the magic 8 ball
    4. reset button to revert back and ask a new question and hide the error message
    5. add shake annimation
*/

// Global Variables

const gameBall = document.querySelector('.game-ball');
const btnShake = document.querySelector('.btn-shake');
const btnReset = document.querySelector('.btn-reset');
let userInput = document.querySelector('#inputField');;

// Call Init Function 

init();

// Call Shake button function

btnShake.addEventListener('click', function() {

    console.log(userInput.value.length);

    // View User input and check for if blank
    if (userInput.value.length === 0) {
        document.querySelector('.no-input-message').style.display = 'block';
        console.log('empty input field')
    } else {
        document.querySelector('.no-input-message').style.display = 'none';
        console.log('not empty')

        // Apply shake class
        gameBall.classList.add('apply-shake')

        // Generate random number
        let randomNumber = Math.floor(Math.random() * 5 + 1);

        // Update src of image using the random number
        setTimeout(function() {
            gameBall.src = './src/assets/ball-' + randomNumber + '.png';
            console.log('update the content in the ball')
        }, 800);

        // Display the reset button as well
        btnReset.style.display = 'inline';

        // Check for end of animation and change classes
        gameBall.addEventListener('animationend', function() {
            console.log('animation has ended');
            gameBall.classList.remove('apply-shake');
        })
    }
})

// Respond to enter key

userInput.addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        btnShake.click();
    }
})

// Game reset 
btnReset.addEventListener('click', function() {
    document.getElementById('myForm').reset();

});

// Create init Function

function init() {
    console.log('reset button');

    // Set value to null
    userInput.value === '';
    // Set src image to the magic 8 ball 
    gameBall.src = './src/assets/ball-0.png';
    // Hide reset button
    btnReset.style.display = 'none';
    btnShake.style.display = 'inline';
    // Remove the shake class form game ball
    gameBall.classList.remove('.apply-shake');
    console.log(userInput.value);

}

/*
    6th April - Updates to push:
        Refactor code by creating global reusable variables. Set up an init function to reset the application which gets called when the user selects reset. 

        TO DO:
            * Update images with new responses
            * Create central 8 ball image
*/