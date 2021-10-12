
/*---------------------------- Variables (state) ----------------------------*/
let turn
let board = []

let isWinner



/*-------------------------------- Constants --------------------------------*/

const winningMessage = () => `Player ${turn} is the winner`
const drawMessage = () => `Game is a DRAW!`
const currentPlayerTurn = () => `It is currently Player ${turn} turn.`






/*------------------------ Cached Element References ------------------------*/

let squares = document.querySelectorAll('#sq')

const gameStatus = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  board = [
    1, null, null,
    null, -1, null,
    null, null, null,
  ]
  isWinner = null;
  turn = 1
  render ()

  
}

function render(){
  squares.forEach(function(square, idx){
  
    if (board[idx] === 1 ){
      square.style.backgroundColor = 'green'
      square.innerText= 'X'
    }
    else if (board[idx] === -1 ){ 
      square.style.backgroundColor = 'yellow'
      square.innerText= 'O'
    }
  })
  
  
  
  if (isWinner===-1 || isWinner===1){
    winningMessage()
  }
  else if (isWinner==='T'){
    drawMessage()
  }
  else{
    currentPlayerTurn()
  }



  }
  

