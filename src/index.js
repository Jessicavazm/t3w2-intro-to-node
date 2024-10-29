// import inquirer
// const inquirer = require ("inquirer").default;
const promptSync = require ("prompt-sync")();


console.log("Dice roller app starting...");

/**
 * Roll a random side dice from a variable-sided dice
 * @param {number} [diceSide=6] Number of sides from the dice
 * @returns {number} Returns the side the dice rolled
 */
function rollDice(diceSide=6) {
    if (diceSide <= 0) {
        throw new Error("Number should be greater than 0.")
    }
    let result = 0;
    result = Math.ceil(Math.random() * diceSide);
    return result;
}

// console.log("The side you rolled is: " + rollDice()) 

// const prompt = inquirer.createPromptModule();

// Part of the inquirer code
// prompt([
//     {
//         type: "number",
//         name: "dice_side",
//         message: "How many sided dice do you want to roll?"
//     }
// ]).then((answer) => {
//     console.log(rollDice(answer.dice_side))
// });

// Using promptSync + try block for error handling
const diceSide = promptSync("How many sided dice you want to roll? ")

try {
    parsedDiceSide = parseInt(diceSide);
    if (isNaN(parsedDiceSide)) {
        throw new Error ("Please enter a valid number. ")
    }
    const diceResult = rollDice(parsedDiceSide);
    console.log(`You rolled a ${diceResult}- sided dice. `);
} catch (error){
    console.error("You got an error!");
    console.log(error);
}