'use strict';

console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = "Correct Number!"

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 33

document.querySelector('.btn.check').addEventListener("click", showNumber)

function showNumber(){
  const guess = document.querySelector('.guess').value
  if(!guess){
    document.querySelector('.message').textContent = "No number"
  }
  
}

