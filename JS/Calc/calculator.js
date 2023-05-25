let display = document.querySelector("#display");
let callInput = 0;
let variableTwo;
let c;
function press(number) {
    if(display.innerText>0)
    {
        display.innerText = 0
    }
    if (display.innerText == 0) {
        display.innerText = number
    }
    else {
        display.innerText += number
    }
}
function clr() {
    display.innerText = 0
}

// function setOP(x){
// operation=''+x
// }

function addtion() {
    callInput = display.innerText;
    clr();
    c = '+';
}
function multiplication() {
    callInput = display.innerText;
    clr();
    c = '*';
}
function division() {
    callInput = display.innerText;
    clr();
    c = '/';
}
function subtraction() {
    callInput = display.innerText;
    clr();
    c = '-';
}
function calculate() {
    if (c == "+") {
        display.innerText = parseInt(callInput) + parseInt(display.innerText);
    }
    else if (c == '*') {
        display.innerText = parseInt(callInput) * parseInt(display.innerText);
    }
    else if (c == '/') {
        display.innerText = parseInt(callInput) / parseInt(display.innerText);
    }
    else if (c == '-') {
        display.innerText = parseInt(callInput) - parseInt(display.innerText);
    }
}

