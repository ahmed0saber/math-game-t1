const questionHolder = document.querySelector("#question");
const buttons = document.querySelectorAll("input[type ='button']");
const resultHolder = document.querySelector('#result');
const scoreHolder = document.querySelector("#score");
const gameContainer = document.querySelector(".game-container")
const submitFormContainer = document.querySelector(".submit-form-container")
const gameoverScreenContainer = document.querySelector(".gameover-screen-container")
let currentResult = 4, currentNumber = "", currentScore = 0;

buttons.forEach(btn => btn.addEventListener("click", e => handleInput(e)))

function handleInput(e){
    if (e.target.value == "Clear") {
        resultHolder.value = ""
        currentNumber = ""
    }else if (e.target.value == "Enter") {
        if(currentNumber === ""){
            alert("Type your answer first")
            return
        }
        if (parseInt(currentNumber) == currentResult) {
            alert("Right Answer")
            currentScore += 10;
            scoreHolder.innerHTML = currentScore;
            resultHolder.value = ""
            currentNumber = ""
            generateNewQuestion()
        }else{
            alert("Wrong Answer")
            showSubmitScoreForm()
        }
    }else{
        let currentChar = e.target.value;
        currentNumber += currentChar
        resultHolder.value = currentNumber;
    }
}

function generateNewQuestion(){
    const firstNumber = Math.ceil(Math.random() * 10);
    const secondNumber = Math.ceil(Math.random() * 10);
    const operation = ["+", "-", "*", "%"];
    const randomOperation = Math.floor(Math.random() * (operation.length));
    const operator = operation[randomOperation];
    switch (operator) {
        case '+':
            currentResult = firstNumber + secondNumber;
            break;
        case '-':
            currentResult = firstNumber - secondNumber;
            break;
        case '*':
            currentResult = firstNumber * secondNumber;
            break;
        case '%':
            currentResult = firstNumber % secondNumber;
            break;
        default:
            currentResult = "notValid"
            break;
    }
    questionHolder.innerText = firstNumber + `${operator}` + secondNumber + "= ??";
}
generateNewQuestion()

function showSubmitScoreForm(){
    gameContainer.style.display = "none"
    submitFormContainer.style.display = "flex"
}

const usernameInput = document.querySelector(".submit-form-container input")
const submitBtn = document.querySelector(".submit-form-container button")
submitBtn.addEventListener("click", submitScoreToLocalStorage)
function submitScoreToLocalStorage(){
    let leaderboardData = []
    if(usernameInput.value.trim().length < 1){
        alert("Username is required")
        return
    }
    leaderboardData = getLeaderboardDataFromLocalStorage()
    leaderboardData.push({
        username: usernameInput.value,
        score: currentScore
    })
    setLeaderboardDataToLocalStorage(leaderboardData)
    showGameOverScreen()
}

function getLeaderboardDataFromLocalStorage(){
    if(localStorage.getItem("leaderboard")){
        return JSON.parse(localStorage.getItem("leaderboard"))
    }
    return []
}

function setLeaderboardDataToLocalStorage(data){
    localStorage.setItem("leaderboard", JSON.stringify(data))
}

function showGameOverScreen(){
    submitFormContainer.style.display = "none"
    gameoverScreenContainer.style.display = "flex"
}