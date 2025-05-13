let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const compChoiceDisplay = document.querySelector("#comp-choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const getEmoji = (choice) => {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "✌️";
    return "";
};

const drawGame = () => {
    msg.innerText = "It's a Draw! Play again.";
    msg.className = "draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.className = "win";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.className = "lose";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    compChoiceDisplay.innerText = `${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} ${getEmoji(compChoice)}`;
    
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
