/*

  1. get value from input field and if null then error else 
  2. generate random number using math methods
  3. random number = the src image update to replace the magic 8 ball
  4. reset button to revert back and ask a new question and hide the error message
  5. add shake annimation


*/


/*

document.querySelector('.btn-shake').addEventListener('click', function() {
    // Generate a random Number
    let randomNumber = Math.floor(Math.random() * 5 + 1);

    // Console log
    console.log(randomNumber)

    // Update image class of game-ball
    let eightBall = document.querySelector('.game-ball');
    eightBall.src = './src/assets/ball-' + randomNumber + '.png';

})

*/


// Respond to enter key

document.querySelector('#inputField').addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        document.querySelector('.btn-shake').click();
    }
})



document.querySelector('.btn-shake').addEventListener('click', function() {

    // 1. Get the input value 
    let input = document.querySelector('#inputField').value;
    // console.log(input)

    // 2.  If empty display error else update the src of the image with the random number generated

    if (input === '') {
        document.querySelector('.no-input-message').style.display = 'block';
    } else {
        document.querySelector('.no-input-message').style.display = 'none';

        // Apply shake class

        let magicBall = document.querySelector('.game-ball');
        magicBall.classList.add('apply-shake')

        // Generate random number
        let randomNumber = Math.floor(Math.random() * 5 + 1);

        // Update src of image using the random number


        setTimeout(function() {
            magicBall.src = './src/assets/ball-' + randomNumber + '.png';
            console.log('update the content in the ball')
        }, 800);


        // magicBall.src = './src/assets/ball-' + randomNumber + '.png';

        // Hide shake button and display reset button

        // document.querySelector('.btn-shake').style.display = 'none';
        document.querySelector('.btn-reset').style.display = 'inline';

    }
})

// Add and remove shake animation

let element = document.querySelector('.game-ball');
element.addEventListener('animationend', function() {
    console.log('animation has ended');
    element.classList.remove('apply-shake');
})



document.querySelector('.btn-reset').addEventListener('click', function() {

    // change magic 8 ball image back to ball-0
    let magicBall = document.querySelector('.game-ball');
    magicBall.src = "./src/assets/ball-0.png";

    // clear input text field
    document.querySelector('#inputField').value = '';

    // hide reset button and show shake button
    document.querySelector('.btn-shake').style.display = 'inline';
    document.querySelector('.btn-reset').style.display = 'none';
})