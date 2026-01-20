let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#comp-score");

const gencomchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}

const drawgame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw! play again";
    msg.style.backgroundColor = "black";
}
const showwinner = (userwin, userchoice, comchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `you win! ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        comscorepara.innerText = compscore;
        console.log("you lose!");
        msg.innerText = `you lose! ${comchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    // computer choice
    const comchoice = gencomchoice();
    console.log("computer choice", comchoice);

    if (userchoice === comchoice)
    {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === 'rock') {
            userwin = comchoice === "paper" ? false : true;       
        }
        else if (userchoice === paper) {
            userwin = comchoice === "scissor" ? false : true;
        }
        else {
            userwin = comchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, comchoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});