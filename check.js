const rls = require("readline-sync");

const arrInput =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let input = rls.question("Input please: ");
//Grab the fist letter/digit of the input
let c
let r

function convertInput()
{
c = (input[0]);
//set r, and the loop will grab it to the end.
r = "";
for (i=1; i<input.length;i++)
{
    r=r+(input[i]);
}
//put c and r in input as an array.
input = [[c],[r]];

// replace letter with number

if (input[0]=="A" || input[0]== "a")
{
    input[0]=["0"];
}
else if (input[0]=="B" || input[0]== "b")
{
    input[0]=["1"];
}
else if (input[0]=="C" || input[0]== "c")
{
    input[0]=["2"];
}
else if (input[0]=="D" || input[0]== "d")
{
    input[0]=["3"];
}
else if (input[0]=="E" || input[0]== "e")
{
    input[0]=["4"];
}
else if (input[0]=="F" || input[0]== "f")
{
    input[0]=["5"];
}
else if (input[0]=="G" || input[0]== "g")
{
    input[0]=["6"];
}
else if (input[0]=="H" || input[0]== "h")
{
    input[0]=["7"];
}
else if (input[0]=="I" || input[0]== "i")
{
    input[0]=["8"];
}
else if (input[0]=="J" || input[0]== "j")
{
    input[0]=["9"];
}

//remove 1 from the number part for mapping

if (input[0,1]=="1")
{
    input[0,1]=["0"];
}
else if (input[0,1]=="2")
{
    input[0,1]=["1"];
}
else if (input[0,1]=="3")
{
    input[0,1]=["2"];
}
else if (input[0,1]=="4")
{
    input[0,1]=["3"];
}
else if (input[0,1]=="5")
{
    input[0,1]=["4"];
}
else if (input[0,1]=="6")
{
    input[0,1]=["5"];
}
else if (input[0,1]=="7")
{
    input[0,1]=["6"];
}
else if (input[0,1]=="8")
{
    input[0,1]=["7"];
}
else if (input[0,1]=="9")
{
    input[0,1]=["8"];
}
else if (input[0,1]=="10")
{
    input[0,1]=["9"];
}

r = input[0,1];
c = input[0,0];

}

convertInput();
console.log(input);
console.log(arrInput[r][c]);