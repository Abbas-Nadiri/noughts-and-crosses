const Gameboard = (function() { 
    let board = Array(9).fill(null);
    return {
        getBoard: function() {
            return board;
        }
        /*add methods for mutating board array elements i.e. putting in Xs and Os*/
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
    const player1 = createPlayer(prompt("Enter player 1: "));
    const player2 = createPlayer(prompt("Enter player 2: "));
    console.log(player1, player2);
    console.log(Gameboard.getBoard());
};

playGame();

