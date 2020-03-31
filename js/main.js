<<<<<<< HEAD
document.querySelector(".join-form").addEventListener("submit", get);

// joinGame class
class joinGame {
  // Generate random game pin
  static generatePin() {
    const randomPin = Math.floor(Math.random() * 1000000 + 1);
    return randomPin;
  }
=======
let buttonJoin = document.querySelector(".btn");
let gamePin = 469884;
let gameInput = document.querySelector('#input');
>>>>>>> 8698ed759a9dac0583ef58facb2027bc8e5d8465

buttonJoin.addEventListener('click', joinGame);

<<<<<<< HEAD
  // retrieve game pin from cookies
  static retrievePin() {
    let PIN = document.cookie;
    document.getElementById("pin").innerText = PIN;
    return PIN;
  }
  static getInputValue() {
    let inputValue = document.querySelector(".gameInput").value;
    gameInput = joinGame.getInputValue(inputValue);
    // joinGame.join(inputValue);
    return inputValue;
  }

  //Join method
  static join(inputValue) {
    let joinPin = r;
    let input = inputValue;
    console.log(input);
    if (input === joinPin) {
      console.log(input);
      window.location.href = "http://www.w3schools.com";
    } else if (input == "") {
      alert("game pin can not be blank");
    } else if (input !== joinPin) {
      alert("invalid game pin");
=======
function joinGame(){
    if(gameInput.value == gamePin){
        if ((window.event.keyCode = 13 || buttonJoin.event == 'click')){
            window.location.assign("http://127.0.0.1:5501/form.html");
           alert('joined The game')
        }
    }
    else if(gameInput.value !== gamePin){
       alert("Game Pin is not Valid")
    }
    else{
       alert("Game Pin is required")
>>>>>>> 8698ed759a9dac0583ef58facb2027bc8e5d8465
    }
}
<<<<<<< HEAD

// addEventLister to the form
g = joinGame.generatePin();
s = joinGame.storePin();
r = joinGame.retrievePin();
get = joinGame.getInputValue();
j = joinGame.join();
=======
>>>>>>> 8698ed759a9dac0583ef58facb2027bc8e5d8465
