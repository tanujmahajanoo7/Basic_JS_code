let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    //rock,paper,scissors
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (useWin,userChoice,compChoice) =>{
    if(useWin)
        {
            userScore++;
            userScorePara.innerText = userScore;
            console.log("You win!");
            msg.innerText = `You win your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else
        {
            compScore++;
            compScorePara.innerText = compScore;
            console.log("You lose");
            msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
}

const playGmae = (userChoice) =>{
    console.log("User Choice = ",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);
    if(userChoice===compChoice)
        {
            //Draw Game
            drawGame();
        }
    else
    {
        let userWin = true;
        if(userChoice == "rock")
            {
                //scissor, paper
                userWin = compChoice === "paper" ? false : true;
            }
        else if(userChoice === "paper")
            {
                //rock , scissor
                userWin = compChoice === "scissor" ? false : true;
            }
        else{
            //rock paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGmae(userChoice);
    });
});