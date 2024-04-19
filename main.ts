// project words count
import { count } from "console";
import inquirer from "inquirer";
const answer: {
    sentence:"string"
 } = await inquirer.prompt({
        name:"sentence",
        type:"input",
        message:"count in words"})
        const word = answer.sentence.trim().split(" ")
        console.log(`sentence words count is ${word.length}`)

