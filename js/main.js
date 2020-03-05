// joinGame class
class joinGame {
  // Generate random game pin
  static generatePin() {
    const randomPin = Math.floor(Math.random() * 1000000 + 1);
    return randomPin;
  }

  // store game pin in cookies
  static storePin() {
    let gamePin = joinGame.generatePin();
    return (document.cookie = gamePin);
  }

  // retrieve game pin from cookies
  static retrievePin() {
    let PIN = document.cookie;
    document.getElementById("pin").innerText = PIN;
    return PIN;
  }
  static getInputValue(gameInput) {
    let inputValue = gameInput;
    joinGame.join(inputValue);
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
    }
  }

  // clearField
}

// addEventLister to the form
document
  .querySelector(".join-form")
  .addEventListener("submit", joinGame.getInputValue);
// g = joinGame.generatePin();
// s = joinGame.storePin();
// r = joinGame.retrievePin();
// get = joinGame.getInputValue();
// j = joinGame.join();
