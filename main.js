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



document.querySelector('.btn-shake').addEventListener('click', function() {

    // 1. Get the input value 
    let input = document.querySelector('#inputField').value;
    // console.log(input)

    // 2.  If empty display error else update the src of the image with the random number generated

    if (input === '') {
        document.querySelector('.no-input-message').style.display = 'block';
    } else {
        document.querySelector('.no-input-message').style.display = 'none';
        let randomNumber = Math.floor(Math.random() * 5 + 1);
        let magicBall = document.querySelector('.game-ball');
        magicBall.src = './src/assets/ball-' + randomNumber + '.png';
    }
})