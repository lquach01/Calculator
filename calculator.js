var number2 = 0;
var number1 = 0;
var sign = "";
var numNum = 1;


function incrNum(num) {
    if (numNum == 1){
        let sheesh = number1.toString();
        let newNum = sheesh.concat(num);
        number1 = Number(newNum);
        document.getElementById("my-text").innerHTML = newNum;
    } else {
        let sheesh = number2.toString();
        let newNum = sheesh.concat(num);
        number2 = Number(newNum);
        document.getElementById("my-text").innerHTML = newNum;
    }

}

function div() {
    numNum = 2;
    sign = "/";
}

function mult() {
    numNum = 2;
    sign = "X";
}

function add() {
    numNum = 2;
    sign = "+";
}

function sub() {
    numNum = 2;
    sign = "-";
}


function equals() {
    let sol = 0;
    if ((sign.localeCompare("/")) == 0) {
        document.getElementById("my-text").innerHTML = number1/number2;
    } else if ((sign.localeCompare("X")) == 0) {
        document.getElementById("my-text").innerHTML = number1 * number2;
    } else if ((sign.localeCompare("+")) == 0) {
        document.getElementById("my-text").innerHTML = number1 + number2;
    } else if ((sign.localeCompare("-")) == 0) {
        document.getElementById("my-text").innerHTML = number1 - number2;
    } else {
        document.getElementById("my-text").innerHTML = "darn";
    }
}





