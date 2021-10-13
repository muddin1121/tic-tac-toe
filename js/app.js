
/*---------------------------- Variables (state) ----------------------------*/
let turn
let board = []

let isWinner



/*-------------------------------- Constants --------------------------------*/

const winningMessage = () => `Player ${turn} is the winner`
const drawMessage = () => `Game is a DRAW!`
const currentPlayerTurn = () => `It is currently Player ${turn} turn.`






/*------------------------ Cached Element References ------------------------*/

let squares = document.querySelectorAll('.gameBoard')

const gameStatus = document.getElementById('message')
let boardElement = document.querySelector('.board')



/*----------------------------- Event Listeners -----------------------------*/

boardElement.addEventListener('click',handleClick)

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

  
const winningArray = [  [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [6,4,2],
                        [0,4,8]   ]

function handleClick(evt){
  if(board[parseInt(evt.target.id.replace('sq',''))]!==null){
    return
  }
board[(evt.target.id.replace("sq",""))]=turn
turn = turn * -1


render()



}


