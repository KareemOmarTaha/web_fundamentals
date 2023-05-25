
function showAlert(clicked_id) {
    alert("This is " + clicked_id);
}

var removetext = document.querySelector(".bottom");
function hideCockie () {
    removetext.remove(); 
}

function c2f(temp) {
    return Math.round (9 / 5 * temp + 32);
}

function f2c (temp) {
    return Math.round (5 / 9 * (temp-32));
}

function changeTemp (element) {
    console.log(element.value) 
    for (var i=1 ; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i)
        var tempVal = tempSpan.innerText ; 
        if (element.value == "C") {
            tempSpan.innerText = f2c(tempVal);
        }
        else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}
