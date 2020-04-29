const randomDamage = _ => Math.floor(Math.random() * 10) + 1;
console.log(randomDamage());

//#2
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum === 0 ? opt1 : opt2);

};
console.log(chooseOption("test1", "test2"))

//#3
const attackPlayer = function (health) {
    return health - randomDamage()
}
console.log(attackPlayer(100));

//#4
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`)
};


//#5
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated: ${loser}`)
};


//#6
const isDead = (health) => health <= 0 ? true : false;


//#7
function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        const attacker = chooseOption(player1, player2)
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
        }
        logHealth(player2, player2Health);
        isDead(player2Health);

        if (isDead(player2Health)) {
            logDeath(player1, player2);
            break;
        }

        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Danielle", "Freddie", 200, 200);


//Extended Challenge

// //Challenge 1
// // var size = 5;
// // var i = 0;
// // let line = ""

// // for (var i = 0; i < size; i++) { //iterates rows
// //     for (var j = 0; j < size; j++) //iterates symbols in row
// //         console.log("#")
// //     console.log("\n") //moves to a new row
// // }

// function makeSquare(width) {
//     let line = "";
//     for (let i = 0; i <= width; i++) {
//         for (let j = 0; j <= width; j++) {
//             line += "*";
//         }
//         line += "\n"; // need the term line
//     }
//     return line;
// }
// console.log(makeSquare(6));

// // Challenge 2

// function makeLine(length) {
//     // length has the number of lines the triangle should have
//     var line = "";
//     for (var i = 1; i <= length; i++) {
//         // Enter the first for loop for the number of lines
//         for (var j = 1; j <= i; j++) {
//             // Enter the second loop to figure how many *'s to print based on the current line number in i. So the 1st line will have 1 *, the second line will have 2 *s and so on.
//             line += "*";
//         }
//         // Add a newline after finishing printing the line and move to the next line in the outer for loop
//         line += "\n";

//     }
//     // Print an additional newline "\n" if desired.
//     return line += "\n";
// }
// console.log(makeLine(8));