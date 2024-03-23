#! /usr/bin/env node
import inquirer from "inquirer"; //cli number guessing game
import chalk from "chalk";
console.log(chalk.red("Welcome to the guess number game!"));
let randomnumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "please guess a random number",
        type: "number",
        value: "userGuessNumber",
    },
]);
if (answer.userGuessNumber === randomnumber) {
    console.log(chalk.bgCyan("you guess a right number"));
}
else {
    console.log(chalk.bgCyan(" you guess a wrong number ! please select a right number"));
}
console.log(chalk.gray("the game is over now"));
