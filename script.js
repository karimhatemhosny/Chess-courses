let index = 0;
let choosenEngine;
let engines = ['stockfish', 'torch', 'komodo dragon', "lc0"]
let engineDiv = document.querySelector('#engines')
let leftButton = document.querySelector('#goLeft')
let rightButton = document.querySelector('#goRight')

function rFunction(){
    if(index === engines.length - 1){
        return;
    } else{
        index++
        engineDiv.innerHTML = 
        `   <h1>Assisted with the best advanced engines<br>Such as:</h1>
        <button id="goLeft" onclick="lFunction()">&lt;</button>
        <button id="goRight" onclick="rFunction()">&gt;</button>
        <img id="engineIMG" src="images/${engines[index]}.png" draggable="false">
        <p id="engineName">${engines[index]}</p>`
    } 
}
function lFunction(){
    if(index === 0){
        return;
    } else{
    index--
    engineDiv.innerHTML = 
    `   <h1>Assisted with the best advanced engines<br>Such as:</h1>
        <button id="goLeft" onclick="lFunction()">&lt;</button>
        <button id="goRight" onclick="rFunction()">&gt;</button>
        <img id="engineIMG" src="images/${engines[index]}.png" draggable="false">
        <p id="engineName">${engines[index]}</p>`
    }
}