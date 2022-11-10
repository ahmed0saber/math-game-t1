let input = document.getElementById("input");

function writing(val) {
    document.getElementById("input").value += val
}

function clearInput() {
    document.getElementById("input").value = "";
}

function enter() {
    let result = eval(num1.textContent + operator.textContent + num2.textContent);
    if (result == document.getElementById('input').value) {
        num1 = Math.floor(Math.random() * 9);
        num2 = Math.floor(Math.random() * 9);
        operator = Math.floor(Math.random() * 4) + 1;
        if (operator == 1) {
            operator = "+";
        } else if (operator == 2) {
            operator = "-";
        } else if (operator == 3) {
            operator = "*";
        } else if (operator == 4) {
            operator = "/";

            var temp = num1;
            num1 *= num2;
            num2 = temp;
        }
        document.getElementById("num1").textContent = num1;
        document.getElementById("num2").textContent = num2;
        document.getElementById("operator").textContent = operator;
        document.getElementById('input').value = "";
        score += 10;
        document.getElementById('score').textContent = score;
    } else if (result !== document.getElementById('input').value) {

    }
    console.log(3)
}