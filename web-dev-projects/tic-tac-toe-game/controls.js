let boxes = document.getElementsByClassName("tile");
let playerTurn = 1;
let turn = document.getElementById("turn");
let gameover = false
let modalTitle = document.getElementById('exampleModalLongTitle');


const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const playerTicker = {
    1: 'X',
    2: 'O'
}

const singleClick = (index) => {
    if(!gameover && !boxes[index].innerText){
        boxes[index].innerText = playerTurn === 1 ? playerTicker[1] : playerTicker[2];
        let winner = checkWinner();
        if(winner){
            gameover = true
            modalTitle.innerText = winner  === 'X' ? 'Player X Won' : 'Player O Won';
            document.getElementById('popup-btn').click();
            return
        }
        playerTurn = playerTurn === 1 ? 2 : 1;
        turn.innerText = `Turn For Player ${playerTurn === 1?'X':'O'}`
    }
}

const checkWinner = () =>{
    for(let i=0; i<winningConditions.length;i++){
        combination = winningConditions[i];
        if(boxes[combination[0]].innerText === boxes[combination[1]].innerText && boxes[combination[1]].innerText === boxes[combination[2]].innerText && boxes[combination[0]].innerText !== ''){
            addStyling(combination);
            return boxes[combination[0]].innerText;
        }
    }
    return
}

const addStyling = (indexArray) =>{
    indexArray.forEach(index => boxes[index].style.color = "green");
    indexArray.forEach(index => boxes[index].style.backgroundColor = "lightgreen");
}