
/*---------------------------- Variables (state) ----------------------------*/
let turn
let board = [null, null, null, null, null, null, null, null, null]
let isWinner
let bob 




/*-------------------------------- Constants --------------------------------*/

const winningMessage = () => `Player ${turn} is the winner`
const drawMessage = () => `Game is a DRAW!`
const currentPlayerTurn = () => `It is currently Player ${turn} turn.`

let winningArray =   [  [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [6,4,2],
                        [0,4,8]   ]




/*------------------------ Cached Element References ------------------------*/

let squares = document.querySelectorAll('.gameBoard')

const gameStatus = document.getElementById('message')
let boardElement = document.querySelector('.board')
const resetBtn = document.getElementById('reset')



/*----------------------------- Event Listeners -----------------------------*/

boardElement.addEventListener('click',handleClick)

resetBtn.addEventListener('click', init)

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
      square.style.backgroundColor = 'paleturquoise'
      square.innerText= 'X'
    }
    else if (board[idx] === -1 ){ 
      square.style.backgroundColor = 'lightpink'
      square.innerText= 'O'
    }
    else if (board[idx] === null) {
      square.style.backgroundColor = "tan"
      square.innerText= ''
    }
  })
  
  if (isWinner===-1){
    gameStatus.innerText = `Congratulations! O Wins!`
  }
  else if(turn===1 && !isWinner){
    gameStatus.innerText = "It's currently player X's turn"
  }
  else if(turn===-1 && !isWinner){
    gameStatus.innerText = "It's currently player O's turn"
  }
  else if(isWinner===1){
    gameStatus.innerText = `Congratulations! X Wins!`
  }
  else if (isWinner==='T'){
    gameStatus.innerText =  `IT IS A TIE: PLAY AGAIN`
  }

    
  }
  

  


function handleClick(evt){
  if(board[parseInt(evt.target.id.replace('sq',''))]!==null){
    return
  }
  else if(isWinner!==null){
    return
  }
  board[(evt.target.id.replace("sq",""))]=turn
  turn = turn * -1

  let winner = getWinner()
  
  function getWinner(){
    winningArray.forEach(function(indexArray){
      
      let idx1 = indexArray[0]
      let idx2 = indexArray[1]
      let idx3 = indexArray[2]
      let theWinner = board[idx1]
      let sum = Math.abs(board[idx1] + board[idx2] + board[idx3])
      if (sum === 3){
        isWinner=theWinner
        return theWinner

      }
      else if(board.includes(null)){
        return 
      }
      else{
        isWinner = "T"
        return "T"
      }
      
    })

  }





  render()
}


