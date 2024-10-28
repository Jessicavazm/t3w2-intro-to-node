// import inquirer
const inquirer = require ("inquirer").default;

console.log("Dice roller app starting...")

/**
 * Roll a random side dice from a variable-sided dice
 * @param {number} [diceSide=6] Number of sides from the dice
 * @returns {number} Returns the side the dice rolled
 */
function rollDice(diceSide=6) {
    let result = 0;
    result = Math.ceil(Math.random() * diceSide);
    return result;
}

// console.log("The side you rolled is: " + rollDice()) 

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "number",
        name: "dice_side",
        message: "How many sided dice do you want to roll?"
    }
]).then((answer) => {
    console.log(rollDice(answer.dice_side))
});