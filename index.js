#!usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Let's Start the game. "Guess the number and try your luck!."`);
    await sleep();
    rainbowTitle.stop();
    console.log(`ℳ𝒶𝒹ℯ 𝒷𝓎 ℳ𝓊𝒽𝒶𝓂𝓂𝒶𝒹 ℛ𝒶𝓂𝓏𝒶𝓃 𝒜𝓀𝓇𝒶𝓂`);
}
await welcome();
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation, You select a correct number");
}
else {
    console.log("Sorry, You select a wrong number");
}
