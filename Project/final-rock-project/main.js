

const score = JSON.parse(localStorage.getItem('score')) || {
       wins:0,
       losses:0,
       ties:0
}

// document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},  Ties: ${score.ties}, Losses: ${score.losses}`

updateScore();
    // wins:0,
    // losses:0,
    // ties:0
  /*  if(score===null){
    score = {
       wins:0,
       losses:0,
       ties:0
 };
    }
*/
// console.log(JSON.parse(localStorage.getItem('score')));


//  Game function 
function playGame(player){
  const computerMove = pickComuputerMove()
     let result='';

if(player === 'rock'){
 if(computerMove === 'rock') {
    result='Tie' 
 }else if(computerMove === 'paper') {
    result='You loose' 
 } else  if (computerMove === 'scissors') {
    result='You win' 
 }

}
else if(player === 'paper'){
 if (computerMove === 'rock') {
 result='You  win' 
 }else if(computerMove === 'paper') {
    result='Tie' 
 } else  if (computerMove === 'scissors') {
    result='you loose' 
}
}
else if (player==='scissors'){
 if (computerMove === 'rock') {
    result='You loose' 
 }else if(computerMove === 'paper') {
    result='You win' 
 } else  if (computerMove === 'scissors') {
    result='Tie' 
 }
}

if(result ==='You win'){
  score.wins +=1
}else if(result ==='You loose'){
 score.losses +=1
}else if(result ==='Tie'){
 score.ties +=1
}
localStorage.setItem('score',JSON.stringify(score))

updateScore();
document.querySelector('.js-result').innerHTML=result   
document.querySelector('.js-move').innerHTML=` You.
<img src="${player}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`

//  alert(`You picked ${player}. Computer picked ${computerMove}.${result} 
//  Wins: ${score.wins},  Ties: ${score.ties}, Losses: ${score.losses}
//  `)
}

function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},  Ties: ${score.ties}, Losses: ${score.losses}`
}
//  let computerMove='';
function pickComuputerMove(){
 const randomNumber = Math.random();
 console.log(randomNumber)
 // let computerMove=''; move out of scope
 let computerMove='';  // to access computer move out of function using return statement
if (randomNumber>=0 && randomNumber<1/3) {
computerMove ='rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
computerMove ='paper'
}else if(randomNumber>=2/3 && randomNumber<1){
    computerMove ='scissors'
}
console.log(computerMove)
return computerMove;                              
}
