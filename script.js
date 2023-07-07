const clickables = document.querySelectorAll(".box");

let currentPlayer = Math.round(Math.random());

let gameBoard = ["", "", "", "", "", "", "", "", ""];

let currentStatus = document.querySelector("#status");

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
        }
    });
});

function changeGameBoard(playedBox, player) {
    gameBoard[playedBox] = player;
    checkGameBoard();
}

function checkGameBoard() {
    // Top row.
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
    }

    // Middle row.
    if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== "") {
        announceWinner(gameBoard[3]);
    }

    // Bottom row.
    if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== "") {
        announceWinner(gameBoard[6]);
    }

    // Left column.
    if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
    }

    // Middle column.
    if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== "") {
        announceWinner(gameBoard[1]);
    }

    // Right column.
    if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== "") {
        announceWinner(gameBoard[2]);
    }

    // Left diagonal.
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== "") {
        announceWinner(gameBoard[0]);
    }

    // Right diagonal.
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== "") {
        announceWinner(gameBoard[2]);
    }
}



function announceWinner(boxToCheck) {
    if (boxToCheck == "0") {
        currentStatus.textContent = "The winner is the O player.";
    } else {
        currentStatus.textContent = "The winner is the X player.";
    }

    clickables.forEach(element => {
        if (element.classList.contains("temp")) {
            element.classList.remove("temp");
        }
    });
}