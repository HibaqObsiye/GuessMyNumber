'use strict';

console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = "Correct Number!"
const secretNumber = Math.trunc(Math.random() * 2) + 1;
const valueCheck = document.querySelector('.number').textContent  = secretNumber
let score = document.querySelector('.score').textContent
  
document.querySelector('.score').textContent = 10

 document.querySelector('.guess').value = 33



document.querySelector('.btn.check').addEventListener("click", showNumber)
document.querySelector('.btn.again').addEventListener("click", clearNumber)

function showNumber(){
  const guess = document.querySelector('.guess').value
  
  if(!guess){
    document.querySelector('.message').textContent = "No number"
  } 
 
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = "too high"  
    score--
    document.querySelector('.score').textContent = score
  }
  else if(guess < secretNumber){
    document.querySelector('.message').textContent = "too low" 
    score--
    document.querySelector('.score').textContent = score
  }
  else{
    document.querySelector('.message').textContent = "Correct Number" 
  }
}


function clearNumber(){
    document.querySelector(".guess").value = ""
}



