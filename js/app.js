
/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 1
board = [
  null, null, null,
  null, null, null,
  null, null, null,
]

let isWinner



/*-------------------------------- Constants --------------------------------*/

const winningMessage = `Player ${currentPlayer}`
const drawMessage = `Game is a DRAW!`
const currentPlayerTurn = `It is currently Player ${currentPlayer} turn.`






/*------------------------ Cached Element References ------------------------*/
const square1 = document.getElementById('sq0')
const square2 = document.getElementById('sq1')
const square3 = document.getElementById('sq2')
const square4 = document.getElementById('sq3')
const square5 = document.getElementById('sq4')
const square6 = document.getElementById('sq5')
const square7 = document.getElementById('sq6')
const square8 = document.getElementById('sq7')
const square9 = document.getElementById('sq8')
const gameStatus = document.getElementById('message')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [
    square1, square2, square3,
    square4, square5, square6,
    square7, square8, square9,
  ]
  isWinner = null;
  let currentPlayer = 1
  render ()

  
}

function render(){

}