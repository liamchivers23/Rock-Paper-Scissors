const buttons = document.querySelectorAll('.gameBtn')
let playerScore = document.querySelector('.playerScore')
let botScore = document.querySelector('.computerScore')
let gameInfo = document.querySelector('.gameInfo')
const playBtn = document.querySelector('.playBtn')
const newGameBtn = document.querySelector('.newGameBtn')
const modal = document.querySelector('.modal')
const headContainer = document.querySelector('.head-container')

buttons.forEach(btn => {btn.style.display = "none"})
gameInfo.style.display = 'none';

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    let computerSelection = Math.floor(Math.random() * choices.length);
    return choices[computerSelection];
}

playBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    gameInfo.style.display = 'flex'
    headContainer.style.display = 'flex'
    buttons.forEach(btn => {btn.style.display = "flex"})
   

    function playGame(){
        let humanScore = 0;
        let computerScore = 0;
        playerScore.textContent = `Your score - ${humanScore}`
        botScore.textContent = `Computer score - ${computerScore}`
    
        function playRound(humanChoice, computerChoice){
    
            if(humanScore === 5){
                buttons.forEach(btn => {btn.style.display = "none"})
                gameInfo.textContent = "Congratulations! You won!" 
                newGameBtn.style.display ='block'
                //allowing extra clicks after text shows up
            } else if(computerScore === 5){
                
                buttons.forEach(btn => {btn.style.display = "none"})
                gameInfo.textContent = "Thats unfortunate! The computer won!"
                newGameBtn.style.display ='block'
                //allowing extra clicks after text shows up
            } else {
                if(humanChoice === computerChoice){
                    gameInfo.textContent = "It's a draw!"
                } else if( 
                    humanChoice === "rock" && computerChoice === "paper" || 
                    humanChoice === "paper" && computerChoice === "scissors" || 
                    humanChoice === "scissors" && computerChoice === "rock"){
                    computerScore++
                    gameInfo.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`
                } else {
                    humanScore++
                    gameInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}`
                }
                playerScore.textContent = `Your score - ${humanScore}`
                botScore.textContent = `Computer score - ${computerScore}`
            }
        }
    
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                let humanChoice = btn.textContent.toLowerCase();
                let computerChoice = getComputerChoice()
                playRound(humanChoice, computerChoice)
            })
        });

        newGameBtn.addEventListener('click', () => {
            gameInfo.textContent = ''
            humanScore = 0
            computerScore = 0
            playerScore.textContent = `Your score - ${humanScore}`
            botScore.textContent = `Computer score - ${computerScore}`
            buttons.forEach(btn => {btn.style.display = "flex"})
            newGameBtn.style.display = 'none'
        })
    }
    playGame()
})