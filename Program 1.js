const fs = require("fs");

//need to change file path currently for each file you want to run this one, as well as each computer.
// const contents = fs.readFileSync("C:/Users/w0194038/Documents/School/Software Dev/Assignment 2/ateam_Original.txt", "utf-8");
const contents = fs.readFileSync("D:/Documents/School Work/Software Dev/Assignment 2/ateam_Original.txt", "utf-8");

const arrLines = contents.split("\r\n");
const remove = Math.floor(Math.random()*arrLines.length);

// console.log(remove);
const orMsg = "---------------------------------\nOriginal Text\n---------------------------------";
const altMsg = "---------------------------------\nAltered Text\n---------------------------------";
console.log(orMsg);
console.log(contents);
console.log("\n\r");


for(let line=0;line<arrLines.length;line++)
{
    //remove random line first
    if(line==remove)
    {
        arrLines[line] = "";
    }
    //check for length of each line and then capitalize or not accordingly.
    else if(arrLines[line].length>=20)
    {
        //clowercase lines larger than 20 characters
        arrLines[line] = arrLines[line].toLowerCase();
        arrLines[line]= (line+1+": "+arrLines[line]);
    }
    else
    {
        //Capilize line lines shorter than 20 characters
        arrLines[line] = arrLines[line].toUpperCase();
        arrLines[line]= (line+1+": "+arrLines[line]);
    }
}


// console.log(arrLines);
console.log(altMsg);
const alteredContent = arrLines.join("\n");
console.log(alteredContent);



fs.writeFileSync("Text Altered.txt", alteredContent);