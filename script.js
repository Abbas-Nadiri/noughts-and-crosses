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
        counter++;

        if (!(Gameboard.getBoard().includes(null))) {
            loop = false;
        }
    };
};

playGame();
