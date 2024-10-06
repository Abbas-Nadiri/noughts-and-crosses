const Gameboard = (function() { 
    let board = Array(9).fill(null);
    return {
        getBoard: function() {
            return board;
        },
        makeMove: function(symbol, position) {
            board.splice(position - 1, 1, symbol);
        },
        checkPosition: function(position) {
            return board[position - 1];
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

function playGame() {
    const player1 = createPlayerFactory("One");
    const player2 = createPlayerFactory("Two");
    console.log(player1, player2);
    console.log(Gameboard.getBoard());

    let loop = true;
    counter = 0;
    while (loop == true) {
        currentTurn = null;
        if (counter % 2 == 0) {
            currentTurn = player1;
        } else if (counter % 2 == 1) {
            currentTurn = player2;
        };

        let condition = true;
        while (condition == true) {
            let move = prompt(`Player ${currentTurn.name}, enter your move (1-9):`);
            if (Gameboard.checkPosition(move) === null) {
                Gameboard.makeMove(currentTurn.symbol, move);
                break;
            } else {
                alert("Invalid choice. Try again.");
            };
        }
        for (let i = 0; i < 9; i += 3){
            console.log(Gameboard.getBoard().slice(i, i + 3));
        }
        console.log(" ");
        
        if (!(Gameboard.getBoard().includes(null)) && Gameboard.winCondition() == false) {
            loop = false;
            console.log("Draw!")
        } else if (Gameboard.winCondition() == true) {
            loop = false;
            console.log(`${currentTurn.name} wins!`)
        }
        counter++;
    };
};

playGame();
