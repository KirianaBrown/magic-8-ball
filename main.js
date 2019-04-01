/*

  1. get value from input field and if null then error else 
  2. generate random number using math methods
  3. random number = the src image update to replace the magic 8 ball
  4. reset button to revert back and ask a new question
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
    let input = document.querySelector('#inputField').value;
    console.log(input)
})