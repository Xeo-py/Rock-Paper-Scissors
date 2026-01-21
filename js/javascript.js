let HumAns=null,humanScore=0;
let ComAns=null,computerScore=0;
function GetComputerChoice()
{
    let num=Math.random();
    if(num>=0 && num<0.34)
    {
        ComAns="rock";
    }
    else if(num>=0.34 && num<0.67)
    {
        ComAns="paper";
    }
    else if(num>=0.67 && num<1)
    {
        ComAns="scissors";
    }
}
function GetHumanChoice()
{
    HumAns=prompt("Enter your Choice!");
}
function playRound()
{
    const humanChoice=HumAns.toLowerCase();
    const computerChoice=ComAns;
    if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper bests Rock.");
        computerScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("You won! Rock bests Scissors.");
        humanScore++;
    }
    else if(humanChoice==="rock" && computerChoice==="rock"){
        console.log("Draw! same choice.");
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        console.log("You lose! Scissors bests paper.");
        computerScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You won! Paper bests rock.");
        humanScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="paper"){
        console.log("Draw! same choice.");
    }
    else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You won! Scissors bests paper.");
        humanScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        console.log("You lose! Rock bests Scissors.");
        computerScore++;
    }
    else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("Draw! same choice.");
    }
}
function playGame()
{
    for(let i=1;i<=5;i++){
        GetHumanChoice();
        GetComputerChoice();
        playRound();
    }
    if(humanScore>computerScore){
        console.log(`You Won!\nYoue Score=${humanScore}\nComputer Score=${computerScore}`);
    }
    else if(humanScore<computerScore){
        console.log(`You Lose!\nYoue Score=${humanScore}\nComputer Score=${computerScore}`);
    }
    if(humanScore===computerScore){
        console.log(`Draw!\nYoue Score=${humanScore}\nComputer Score=${computerScore}`);
    }
}
playGame();