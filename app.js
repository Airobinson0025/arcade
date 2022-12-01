//**********PLAYER INPUT & RRENDERING*********
//**********add HTML elements to DOM + addEventListener to Start Button**********
let p1name = document.querySelector('#p1Name');
let p2name = document.querySelector('#p2Name');
let p1display = document.querySelector('#displayP1');
let p2display = document.querySelector('#displayP2');
let startButton = document.querySelector('.startButton');



function displayPlayerOne() {

    p1display.innerText = "Player X: " + p1name.value;
}
startButton.addEventListener('click', displayPlayerOne)

function displayPlayerTwo() {
    p2display.innerText = "Player O: " + p2name.value;
}
startButton.addEventListener('click', displayPlayerTwo)

function displayCPU() {
    if (p2name.value == "") {
        p2display.innerText = "Player O: CPU";
    }
}
startButton.addEventListener('click', displayCPU)

function playerTurnDisplay() {
    let turnDisplay = document.querySelector('#turnDisplay');
    if (turnDisplay.innerText = "Enter Player Names + Click Start Button") {
        return turnDisplay.innerText = "Player X Goes First!"
    }
}
startButton.addEventListener('click', playerTurnDisplay)





// ***********2 Player BOARD DECLERATIONS & FUNCTIONS*********
let gameBoard = document.querySelector('.board');
let boxes = Array.from(document.getElementsByClassName('boardBox'));
let resetButton = document.querySelector('#resetButton')
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let spaces = Array(9).fill(null)


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))

}
//******ASSIGN PLAYERS, ADD playerHasWon FUNCTION*******
function boxClicked(event) {
    const id = event.target.id
    if (!spaces[id]) {
        spaces[id] = currentPlayer
        event.target.innerText = currentPlayer;

        if (playerHasWon() !== false) {
            turnDisplay.innerText = "Player " + currentPlayer + " has won!!!"
            let winningsSpaces = playerHasWon()
            
        }
        currentPlayer = currentPlayer == player1 ? player2 : player1;
    }
}
startGame()

//******MAKING WIN COMBOS AN ARRARY******
const winCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
//*****LOOPS THROUGH winCombs TO DICTATE THE WINNER OF THE GAME*****
function playerHasWon() {
    for (const condition of winCombs) {
        let [a, b, c] = condition

        if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
            return [a, b, c]
        }
    }
    return false;

}


resetButton.addEventListener('click', restartGame)
//*****RESTARTS GAME************ 
function restartGame() {
    spaces.fill(null)

    boxes.forEach(box => {
        boxes.innnerText = '';


    })

    turnDisplay.innerText = "Enter Player Names + Click Start Button"

    currentPlayer = player1;
}

startGame()







