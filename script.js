const clickables = document.querySelectorAll(".box");

let currentPlayer = Math.round(Math.random());

let gameBoard = ["", "", "", "", "", "", "", "", ""];

let currentStatus = document.querySelector("#status");

currentStatus.textContent = "Welcome.";

let playCounter = 0;

let xPlayer = "";
let oPlayer = "";

if (currentPlayer == 0) {
    oPlayer = "Player 1";
    xPlayer = "Player 2";
} else {
    oPlayer = "Player 2";
    xPlayer = "Player 1";
}

clickables.forEach(element => {
    element.addEventListener("click", e => {
        if (element.classList.contains("temp")) {
            changeGameBoard(element.id, currentPlayer);
            if (currentPlayer == 0) {
                element.textContent = "O";
                currentPlayer = 1;
            } else if (currentPlayer == 1) {
                element.textContent = "X";
                currentPlayer = 0;
            } else {
                currentStatus.textContent = "Something is wrong here.";
            }
            element.classList.remove("temp");
            playCounter++;
        }
    });
});

function changeGameBoard(playedBox, player) {
    gameBoard[playedBox] = player;
    statusTurn();
    checkGameBoard();
}

function checkGameBoard() {

    if (playCounter == 8) {
        currentStatus.textContent = "Game ended. Tie.";
    }

    // Top row.
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
        clickables[0].classList.add("win");
        clickables[1].classList.add("win");
        clickables[2].classList.add("win");
    }

    // Middle row.
    if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== "") {
        announceWinner(gameBoard[3]);
        clickables[3].classList.add("win");
        clickables[4].classList.add("win");
        clickables[5].classList.add("win");
    }

    // Bottom row.
    if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== "") {
        announceWinner(gameBoard[6]);
        clickables[6].classList.add("win");
        clickables[7].classList.add("win");
        clickables[8].classList.add("win");
    }

    // Left column.
    if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
        clickables[0].classList.add("win");
        clickables[3].classList.add("win");
        clickables[6].classList.add("win");
    }

    // Middle column.
    if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== "") {
        announceWinner(gameBoard[1]);
        clickables[1].classList.add("win");
        clickables[4].classList.add("win");
        clickables[7].classList.add("win");
    }

    // Right column.
    if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== "") {
        announceWinner(gameBoard[2]);
        clickables[2].classList.add("win");
        clickables[5].classList.add("win");
        clickables[8].classList.add("win");
    }

    // Left diagonal.
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
        clickables[0].classList.add("win");
        clickables[4].classList.add("win");
        clickables[8].classList.add("win");
    }

    // Right diagonal.
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== "") {
        announceWinner(gameBoard[2]);
        clickables[2].classList.add("win");
        clickables[4].classList.add("win");
        clickables[6].classList.add("win");
    }
}



function announceWinner(boxToCheck) {
    if (boxToCheck == "0") {
        currentStatus.textContent = "The winner is " + oPlayer + ", the O player.";
    } else {
        currentStatus.textContent = "The winner is " + xPlayer + ", the X player.";
    }

    clickables.forEach(element => {
        if (element.classList.contains("temp")) {
            element.classList.remove("temp");
        }
    });
}

function statusTurn() {
    if (currentPlayer == 1) {
        currentStatus.textContent = oPlayer + " (O)'s turn.";
    } else {
        currentStatus.textContent = xPlayer + " (X)'s turn.";
    }
}

document.getElementById("reset").addEventListener("click", restartGame);

function restartGame() {
    clickables.forEach(element => {
        element.className = "";
        element.classList.add("box");
        element.classList.add("temp");
        element.textContent = "";
    });

    currentStatus.textContent = "Welcome.";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
}