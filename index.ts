#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 +1 );
const answers = await inquirer.prompt([
  {
    name: "randomNumber",
    type: "number",
    message: "enter the guessed number",
  },
]);
if (answers.randomNumber === randomNumber) {
  console.log("Conrats You guessd th right number");
} else {
  console.log("try again");
}

