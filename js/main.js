let buttonJoin = document.querySelector(".btn");
let gamepin = 469884;
let gameinput = document.querySelector('#input');

buttonJoin.addEventListener('click', joinGame);

function joinGame(){
    if(gameinput.value === gamepin){
        alert('joined game')
    }
}