var number2 = "";
var number1 = "";
var sign = "";
var numNum = 1;


function incrNum(num) {
    if (numNum == 1){
        let sheesh = number1.toString();
        newNum = sheesh.concat(num);
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
    if (numNum == 2) {
        equals();
    }
    numNum = 2;
    sign = "/";
}

function mult() {
    if (numNum == 2) {
        equals();
    }
    numNum = 2;
    sign = "X";
}

function add() {
    if (numNum == 2) {
        equals();
    }
    numNum = 2;
    sign = "+";
}

function sub() {
    if (numNum == 2) {
        equals();
    }
    numNum = 2;
    sign = "-";
}


function equals() {
    let sol = 0;
    if ((sign.localeCompare("/")) == 0) {
        sol = number1/number2;
        document.getElementById("my-text").innerHTML = sol;
    } else if ((sign.localeCompare("X")) == 0) {
        sol = number1 * number2;
        document.getElementById("my-text").innerHTML = sol;
    } else if ((sign.localeCompare("+")) == 0) {
        sol = number1 + number2;
        document.getElementById("my-text").innerHTML = sol;
    } else if ((sign.localeCompare("-")) == 0) {
        sol = number1 - number2;
        document.getElementById("my-text").innerHTML = sol;
    } else {
        document.getElementById("my-text").innerHTML = "darn";
    }

    number1 = sol;
    number2 = "";
    numNum = 1;


}


function reset() {
    number2 = 0;
    number1 = 0;
    sign = "";
    numNum = 1;
    document.getElementById("my-text").innerHTML = "0";
}


