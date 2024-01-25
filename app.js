let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice =()=>{
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = `game was draw / play again`;
    msg.style.backgroundColor ="black";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore ;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`computer wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGAme = (userChoice) =>{
    const compChoice = genComputerChoice(); 

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false:true ;
        }
        else{
            userWin = compChoice==="rock" ?false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGAme(userChoice);
    })
})