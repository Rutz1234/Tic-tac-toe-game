let board = document.querySelector(".board");
let cells = document.querySelectorAll(".cell");
let restartBtn = document.querySelector("#restart");
let statusDisplay = document.querySelector("#status");

let currentPlayer='X';
let boardState=[' ',' ',' ',' ',' ',' ',' ',' ',' ',];
let gameActive = true;
let msg =document.querySelector('#msg')
const winConditions=[[0,1,2], [3,4,5], [6,7,8],
                   [0,3,6], [1,4,7], [2,5,8], 
                   [0,4,8],[2,4,6]];


cells.forEach(cell => cell.addEventListener("click",handleCellClick));
restartBtn.addEventListener('click',restartGame);




function checkWin(){
    for(let condition of winConditions)
        {
            const [a,b,c]=condition;
            if(boardState[a]!=' '&& boardState[a]===boardState[b] && boardState[b]===boardState[c])
                return true;
        }

        return false;
}

function handleCellClick(clickedCellEvent)
{
    const clickedCell=clickedCellEvent.target;
    const clickedCellIndex=parseInt(clickedCell.getAttribute('data-index'));

    if(boardState[clickedCellIndex] !==' ' || !gameActive)
        {
            return;
        }
    boardState[clickedCellIndex]=currentPlayer;
    clickedCell.innerHTML=currentPlayer;

    if(checkWin())
    {
        gameActive=false;
        statusDisplay.innerHTML = `Player ${currentPlayer} wins!`;
    }
    else if(!boardState.includes(' ')){
        gameActive=false;
        statusDisplay.innerHTML = `It's a draw!`;

    }
    else{
        currentPlayer=currentPlayer=== 'X' ? 'O': 'X';
    }
       
}

function restartGame(){
    gameActive = true;
    currentPlayer='X';
    boardState=[' ',' ',' ',' ',' ',' ',' ',' ',' ',];
    cells.forEach(cell => cell.innerHTML=' ');
    statusDisplay.innerHTML = '';
}