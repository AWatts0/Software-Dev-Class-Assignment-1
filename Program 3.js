
const rls = require("readline-sync");
//ask user for coordinates
//check if they hit a ship
//display the results.
// loop until user writeHeapSnapshot, or runs out of missles.


//DATA

const shipMap = [
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

const shotMap = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];


const maxMissles = [30]; 
let misslesShot = 0;
let shotLocation
//ship sizes(arrays)
let numHits = 0;
//how many ships are hit
//how many ships are sunk
let input
let r
let c

    

//(extra idea: Scoring, high scores)
//


//FUNCTIONS

//load map with ships TODO: automate it.
//get user input
//check if missle shot is a hit or not.
//check if user input is valid (add later)
//check if all ships are sunk.

//Mock Function
function checkForHit()
{
    if (shipMap[r][c]==1)
    {
        shotMap[r][c]=2;
        numHits++;
        console.log("It's a hit!");
        //increase missleshot
        misslesShot++;
    }
    else
    {
        shotMap[r][c]=3;
        console.log("Sploosh!!");
        //increase missleshot
        misslesShot++;
    } 
    console.log("You have",maxMissles-misslesShot,"missles left!");
}

function allSunk()
{
    //intially set this to be true
    let allShipsSunk = true;
    //build loops to look through the entire arays
    for(row=0;row<shipMap.length;row++)
    {
        for(col=0;col<shipMap.length;col++)
        {
            //search array for any 1's.  if there is, change from true to false.
            if (shipMap[row][col] == 1)
            {
                allShipsSunk = false;
                    
            }
             
        }
    }
    return(allShipsSunk);
}

//Outter Structure of the program  (framework, skeleton, scaffolding)

console.log("Welcone to BATTLESHIP!")
console.log("You have 30 missles to sink all 5 ships!")
console.table(shotMap);
while(misslesShot < maxMissles)
{
    //load map with ships TODO: automate it.
    //get user input
    shotLocation = rls.question("Where would you like to fire? (ex: A1): ");
    //check if user input is valid (add later)
    //duplicate shotLocation to input
    input=shotLocation
    //convert input
    convertInput();
    console.log("Firing at "+shotLocation);
    //check if the shot location matches where a ship is in the ship map array
    checkForHit();            
    //check if all ships are sunk.
    gridPrint(shotMap);
    //check if all ships are sunk
    const sunkCheck = allSunk()
    if (sunkCheck==true)
    {
        console.log("All Ships Sunk! You Win!");
        console.log("You had",numHits,"of",misslesShot,"missles hit!");
        break
    }
}


if (misslesShot == maxMissles)
{
    console.log("Sorry, all shots fired. You lose!\nPlease Play Again!")
}







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


function gridPrint ()
{
for(let row=0;row<shotMap.length;row++)
{
    if (row ==0)
        {
            process.stdout.write("  A  B  C  D  E  F  G  H  I  J\n");
        }
        for(let col=0;col<shotMap.length;col++)
        {
            if (col==0)
            {
                process.stdout.write(row.toString());
            }

            if(shotMap[row][col] == 0)
            {
                process.stdout.write("   ");
            }
            else if(shotMap[row][col] == 2)
            {
                process.stdout.write(" X ");
            }
            else if(shotMap[row][col] == 3)
            {
                process.stdout.write(" O ");
            }
        }
        //we are at the end of a row
        process.stdout.write('\n');
        
    }
}