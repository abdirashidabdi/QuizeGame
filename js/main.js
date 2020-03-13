
// buttonJoin.addEventListener('click', joinGame);

// function randomGamePin(){
//     window.addEventListener('load', (event) => {
//         gamePin = Math.floor(100000 + Math.random() * 900000)
        
    
//     });
// }

// function joinGame(){
//     randomGamePin();
    // if(gameInput.value == gamePin){
    //     if ((window.event.keyCode = 13 || buttonJoin.event == 'click')){
    //         setTimeout(function(){document.location.href = "http://127.0.0.1:5501/form.html"},500);
    //        alert('joined The game')
    //     }
    // }
    // else if(gameInput.value !== gamePin){
    //    alert("Game Pin is not Valid")
    // }
    // else if(gameInput.value == ""){
    //    alert("Game Pin is required")
    // }
// }


let buttonJoin = document.getElementById('btn');
let showGamePin = document.getElementById('pin');
class quizGame {
    constructor(gamePin = ''){
        this.gamePin = gamePin
    }
    static randomGamePin(){
        return (this.gamePin = Math.floor(100000 + Math.random() * 900000))
    }
    static getInput(){
            let gameInput = document.querySelector('#input').value;
            return gameInput

            

    }
    static joinGame(){
        document.getElementById('pin').innerHTML= randomPin ;
        if(gameInput.value == randomPin){
            if ((window.event.keyCode = 13)){
                setTimeout(function(){document.location.href = "http://127.0.0.1:5501/form.html"},500);
               alert('joined The game')
            }
        }
        else if(gameInput !== randomPin){
           alert("Game Pin is not Valid")
        }
        else if(gameInput == ""){
           alert("Game Pin is required")
        }
    }
}


randomPin = quizGame.randomGamePin()
// document.querySelector('.join-form').addEventListener('submit',gI)
// gI = quizGame.getInput()
//Jg = quizGame.joinGame()
console.log(`game pin is ${randomPin} `)