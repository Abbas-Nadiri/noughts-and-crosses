function Gameboard(symbol, move) {
    let gameboard = [null, null, null, null, null, null, null, null, null];
    gameboard.splice(move - 1, 1, symbol);
    console.log(gameboard);
}

let counter = 0; 
function Player(name, symbol) {
    while (counter < 2) {
        if (counter == 0) {
            symbol = "X";
        } else {
            symbol = "O"
        };
        counter++;
        return {name, symbol};
    }
}

function playGame() {
    let p1 = Player(prompt("Player One Name:"));
    let p2 = Player(prompt("Player Two Name:"));
    console.log(p1, p2);

    turnCounter = 0;
    if (turnCounter % 2 == 0) {
        let move = Number(prompt("Enter board position to place counter 1-9:"));
        Gameboard(p1.symbol, move);
    }
}

playGame();
