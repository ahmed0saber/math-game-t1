const firstNumber = Math.ceil(Math.random() * 10);
const secondNumber = Math.ceil(Math.random() * 10);
const operation = ["+", "-", "*", "%"];
const randomOperation = Math.floor(Math.random() * (operation.length));
const operator = operation[randomOperation];
// let num = "";
// let count = 0;
let results;
switch (operator) {
    case '+':
        results = firstNumber + secondNumber;
        break;
    case '-':
        results = firstNumber - secondNumber;
        break;
    case '*':
        results = firstNumber * secondNumber;
        break;
    case '%':
        results = firstNumber % secondNumber;
        break;
    default:
        results = "notValid"
        break;
}

console.log(results)
const Question = document.querySelector("#question");
Question.innerText = firstNumber + `${operator}` + secondNumber + "=";
const buttons = document.querySelectorAll("input[type ='button']");
const result = document.querySelector('#result');
const Score = document.querySelector("#score");

let num = "";
let count = 0;
Score.innerText = count
buttons.forEach((btn, i) => {
   
    btn.addEventListener("click", (e) => {
        let value = e.target.value;
        num += value
        result.value = num;
        if (e.target.value == "Clear") {
            result.value = ""
        }
        console.log(num)
        if (e.target.value == "Enter") {
           
            
            if (parseInt(num) ==results) {
                alert("Right Answer")
                count+=10;
                Score.innerHTML =count;
                

                
            }
            window.location.reload();
            result.value=" "
            // console.log(result.value)
            // Score.innerText = score;
        }


    })


})

