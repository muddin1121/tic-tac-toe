
/*---------------------------- Variables (state) ----------------------------*/
let turn
let board = [null, null, null, null, null, null, null, null, null]
let isWinner
let bob 




/*-------------------------------- Constants --------------------------------*/


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
      square.style.backgroundColor = "#E9DEFF"
      square.innerText= ''
    }
  })
  
  if (isWinner===-1){
    gameStatus.innerText = `AYO! O Wins!`
    gameStatus.style.color = "pink"
  }
  else if(turn===1 && !isWinner){
    gameStatus.innerText = "Player - X Turn"
    gameStatus.style.color = "paleturquoise"
  }
  else if(turn===-1 && !isWinner){
    gameStatus.innerText = "Player - O Turn"
    gameStatus.style.color = "pink"
    
  }
  else if(isWinner===1){
    gameStatus.innerText = `AYO! X Wins!`
    gameStatus.style.color = "paleturquoise"
  }
  else if (isWinner==='T'){
    gameStatus.innerText =  `IT IS A TIE!!!`
    gameStatus.style.color = "tan"
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


