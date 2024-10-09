const Gameboard = (function() { 
    let board = Array(9).fill(null);
    return {
        getBoard: function() {
            return board;
        },
        makeMove: function(symbol, position) {
            if (board[position] == null) {
                board.splice(position, 1, symbol);
            }

        },
        checkPosition: function(position) {
            return board[position];
        },
        winCondition: function() {
            if (board[0] == board[1] && board[1] == board[2] && board[2] != null ||
                board[3] == board[4] && board[4] == board[5] && board[5] != null ||
                board[6] == board[7] && board[7] == board[8] && board[8] != null ||
                board[0] == board[3] && board[3] == board[6] && board[6] != null ||
                board[1] == board[4] && board[4] == board[7] && board[7] != null ||
                board[2] == board[5] && board[5] == board[8] && board[8] != null ||
                board[0] == board[4] && board[4] == board[8] && board[8] != null ||
                board[2] == board[4] && board[4] == board[6] && board[6] != null
            ) {
                return true;
            } else {
                return false;
            }
        }
    };
})();



const createPlayerFactory = (function() {
    let counter = 0;
    return function Player(name) {
        let symbol;
        if (counter == 0) {
            symbol = "X";
        } else if (counter == 1) {
            symbol = "O";
        }
        counter++;
        if (counter > 1) {
            counter = 0;
        }
        return { name, symbol };
    };
})();


const displayController = (function() {
    const container = document.getElementById("container");
    const textBox = document.getElementById("textBox");
    gridArray = [];
    let currentTurn = null;
    activeGame = true;

    return {
        createGrid: function(player1, player2) {
            for (let i = 0; i < 9; i++) {
                const gridSquare = document.createElement("div");

                gridSquare.addEventListener("click", () => {
                    if (Gameboard.checkPosition(i) == null && activeGame){

                        Gameboard.makeMove(currentTurn.symbol, i);
                        displayController.updateDisplay();

                        if (Gameboard.winCondition()) {
                            textBox.textContent = `${currentTurn.name} wins!`;
                            activeGame = false;
                        } else if (!Gameboard.getBoard().includes(null) && !Gameboard.winCondition()) {
                            textBox.textContent = "It's a draw.";
                            activeGame = false;
                        } else {
                            currentTurn = currentTurn === player1 ? player2 : player1;
                            textBox.textContent = `It's ${currentTurn.name}'s turn.`;
                        };
                    };
                });

                gridSquare.textContent = Gameboard.getBoard()[i];
                gridArray.push(gridSquare);
                container.append(gridSquare);
            };
        },
        updateDisplay: function() {
            for (let i = 0; i < 9; i++) {
                gridArray[i].textContent = Gameboard.getBoard()[i];
            };
        },
        getGridArray: function() {
            return gridArray;
        },
        setInitialTurn: function(player) {
            currentTurn = player;
            textBox.textContent = `It's ${currentTurn.name}'s turn.`;
        }
    };
})();

function playGame() {
    const player1 = createPlayerFactory("X");
    const player2 = createPlayerFactory("O");

    let counter = Math.random() < 0.5 ? 0 : 1;
    const startingPlayer = counter % 2 === 0 ? player1 : player2;

    displayController.setInitialTurn(startingPlayer);
    displayController.createGrid(player1, player2);
};

playGame();

