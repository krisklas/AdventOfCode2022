const fs = require("fs");
let game = fs.readFileSync("test.txt").toString().split("\r");
game = game.toString().split("\n");
let fixedGame = game.toString().split(" ");
fixedGame = fixedGame.toString().split(",")
fixedGame = fixedGame.filter(elm => elm);

// X = 0P. LOOSE Y = 3P. TIE Z = 6P. WIN

var sum = [];

while (fixedGame.length > 0) {
    if (fixedGame[1] == 'X') {
        sum.push(0)
        if (fixedGame[0] == 'A') {
            sum.push(3);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'B') {
            sum.push(1);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'C') {
            sum.push(2);
            fixedGame.splice(0, 2);
        }
    }
    else if (fixedGame[1] == 'Y') {
        sum.push(3)
        if (fixedGame[0] == 'A') {
            sum.push(1);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'B') {
            sum.push(2);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'C') {
            sum.push(3);
            fixedGame.splice(0, 2);
        }
    }
    else if (fixedGame[1] == 'Z') {
        sum.push(6)
        if (fixedGame[0] == 'A') {
            sum.push(2);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'B') {
            sum.push(3);
            fixedGame.splice(0, 2);
        }
        else if (fixedGame[0] == 'C') {
            sum.push(1);
            fixedGame.splice(0, 2);
        }
    }
}

const initialValue = 0;
const sumWithInitial = sum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);