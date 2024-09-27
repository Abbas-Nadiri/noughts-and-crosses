function Gameboard() {
    gameboard = [];

}

let counter = 0; 
function Player(name, symbol) {
    if (counter == 0) {
        symbol = "X";
    } else {
        symbol = "O"
    };
    counter++;
    return {name, symbol};
}

console.log(Player("sigma thomas shelby"), Player("new yogurt male"));