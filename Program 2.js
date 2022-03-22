const rls = require("readline-sync");
const fs = require("fs");

//Program runs and then goes through the CSV file asking the user to select one of the options from each question.
//need to change file path per computer user/currently.
// const questions = fs.readFileSync("C:/Users/w0194038/Documents/School/Software Dev/Assignment 2/P2 - Aardvark/the_choices_file.csv", "utf-8");
// let story = fs.readFileSync("C:/Users/w0194038/Documents/School/Software Dev/Assignment 2/P2 - Aardvark/the_story_file.txt", "utf-8");
const questions = fs.readFileSync("D:/Documents/School Work/Software Dev/Assignment 2/P2 - Aardvark/the_choices_file.csv", "utf-8");
let story = fs.readFileSync("D:/Documents/School Work/Software Dev/Assignment 2/P2 - Aardvark/the_story_file.txt", "utf-8");


const messageQ = "Please select "
const colon = ":"
let r
let c

const arrAnswers = [];

const arrQuestions = questions.split("\r\n");
//split each line in the arrary into it's own array.

// const arrValue = arrQuestions[0].split(",");
// const arrValue2 = arrQuestions[1].split(",");
// console.log(arrValue);
// console.log(arrValue2);
//change to a loop

for (let arrSplit = 0; arrSplit<arrQuestions.length; arrSplit++)
{
    arrQuestions[arrSplit] = arrQuestions[arrSplit].split(",")
}

//create each question as a seperate array.  Then have the console ask the user for input on each question, 
// where the [X][0] place of the array is the question and each of the following is the answers.
//have each answer display with a letter or number input, and the user only inputs that number or letter.
// arrLines[line]= (line+1+": "+arrLines[line]);
// console.log(arrQuestions);
function questionAsk(r,c)
{
console.log(messageQ+arrQuestions[r][0]+colon);
for (let choices = 1; choices<arrQuestions.length-1; choices++)
{
console.log(choices+": "+arrQuestions[r][choices])
}
let input = rls.question("");
//make sure the user's input is an acceptable input

    while (isNaN(input) || input > arrQuestions[r].length-1 || input <=0)
    {
        if (isNaN(input))
        {
            console.log("Sorry that's not a number.")
            input = rls.question("");
        }
        else
        {
            console.log("Sorry, that number is a viable option.")
            input = rls.question("");   
        }
    }
//take number input and change it into the text from the array
input = arrQuestions[r][input];
//capitaize the answer words
input = input.toUpperCase();
//push answers into an array
arrAnswers.push(input);
}

//loop through function the get an answer for each input.
for (answerGet = 0; answerGet<arrQuestions.length; answerGet++)
{
questionAsk(answerGet);
}

// console.log(arrAnswers);

//replace the placeholders in the story with the answer text from the answer array

for (let i=0;i<arrAnswers.length;i++)
{
story = story.replace("_"+(i+1)+"_", arrAnswers[i]);
//add a loop to search the rest of the story for the found number in case there's multiples.  
//If there are, it will remove one from the counter varible, essently resetting this round and it will seach again for another instance.
if (story.includes(i+1))
    {
        i--;
    }
}
console.log(story);
