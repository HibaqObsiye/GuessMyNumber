'use strict';

console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = "Correct Number!"
const secretNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//const valueCheck = document.querySelector('.number').textContent 

document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 33



document.querySelector('.btn.check').addEventListener("click", showNumber)
document.querySelector('.btn.again').addEventListener("click", clearNumber)

function showNumber(){
  const guess = document.querySelector('.guess').value
  
  if(!guess){
    document.querySelector('.message').textContent = "No number"
  } 
 
  else if(guess > secretNumber[secretNumber.length -1]){
    document.querySelector('.message').textContent = "too high"  
  }
  else if(guess < secretNumber[0]){
    document.querySelector('.message').textContent = "too low" 
  }
  else{
    document.querySelector('.message').textContent = "Correct Number" 
  }
}

function clearNumber(){
    document.querySelector(".guess").value = ""
}



