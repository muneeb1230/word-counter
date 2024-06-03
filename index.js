import inquirer from "inquirer";
let sentence;
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your  sentence to count your words"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word coumt is ${words.length}`);
