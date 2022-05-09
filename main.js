// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//declares variable 'heart' for heart element on the page
const hearts = document.querySelectorAll('.like-glyph')
// console.log(heart)

//adds event listener for 'click' action to each glyph heart on the page and callsback 'clickedHeart' function
for (const glyph of hearts) {
  glyph.addEventListener('click', clickedHeart)
}

function clickedHeart(e) {
    const heart = e.target
    console.log(e.target)
    mimicServerCall()
    .then(function(success) {
      alert(success)
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.classList = 'activated-heart'
      } else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.classList = ' '
        }
        // heart.classList = 'activated-heart'      
      })
      .catch(function (error) {
        alert(error)
        let modalDiv = document.querySelector('#modal')
        modalDiv.classList.remove("hidden")
        setTimeout(function(){
          modalDiv.classList.add("hidden")}, 3000)
      })
  }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
