let buttonJoin = document.querySelector(".btn");
let gamePin = 469884;
let gameInput = document.querySelector('#input');

buttonJoin.addEventListener('click', joinGame);

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
    }
}
