
/*---------------------------- Variables (state) ----------------------------*/
let turn
let board = []

let isWinner



/*-------------------------------- Constants --------------------------------*/

const winningMessage = `Player ${turn}`
const drawMessage = `Game is a DRAW!`
const currentPlayerTurn = `It is currently Player ${turn} turn.`






/*------------------------ Cached Element References ------------------------*/

let squares = document.querySelectorAll('#sq')

const gameStatus = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  board = [
    null, null, null,
    null, null, null,
    null, null, null,
  ]
  isWinner = null;
  turn = 1
  render ()

  
}

function render(){
  squares.forEach(function(square, idx){
    board[idx]= square
    if (turn === 1 ){ //& element is clicked
      square.style.backgroundColor = 'green'
    }
    else if (turn === -1 ){ //& element is clicked
      square.style.backgroundColor = 'yellow'
    }
  })



  }
  

