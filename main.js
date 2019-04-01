/*

  1. get value from input field and if null then error else 
  2. generate random number using math methods
  3. random number = the src image update to replace the magic 8 ball
  4. reset button to revert back and ask a new question
  5. add shake annimation


*/




document.querySelector('.btn-shake').addEventListener('click', function() {
    // Generate a random Number
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    // Console log
    console.log(randomNumber)
})