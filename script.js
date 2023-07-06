const clickables = document.querySelectorAll(".box");

let currentPlayer = Math.round(Math.random());

let gameBoard = ["", "", "", "", "", "", "", "", ""];

clickables.forEach(element => {
    element.addEventListener("click", e => {
        if (element.textContent == "") {
            changeGameBoard(element.id, currentPlayer);
            if (currentPlayer == 0) {
                element.textContent = "O";
                currentPlayer = 1;
            } else if (currentPlayer == 1) {
                element.textContent = "X";
                currentPlayer = 0;
            } else {
                console.log("Something is wrong here.");
            }
        }
    });
});

function changeGameBoard(playedBox, player) {
    gameBoard[playedBox] = player;
    console.log(playedBox);
    console.log(gameBoard);
}
