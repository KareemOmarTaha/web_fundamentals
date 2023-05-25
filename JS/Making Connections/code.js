var nameElement = document.querySelector(".name");

function changename() {
    var s = "Kareem Taha";
    nameElement.innerText = s; 
    
}
var i = 500;
var x = 2;
var namephill = document.querySelector(".Phill");
var nametodd = document.querySelector(".Todd");

function removename4() {
    namephill.remove();
    x--;
    document.querySelector(".num2").innerText = x;
}

function removename3() {
    namephill.remove();
    x--;
    i++;
    document.querySelector(".num2").innerText = x;
    document.querySelector(".num3").innerText = i ;
    
}

function removename2() {
    nametodd.remove();
    x--;
    document.querySelector(".num2").innerText = x;
}


function removename1() {
    nametodd.remove();
    x--;
    i++;
    document.querySelector(".num2").innerText = x;
    document.querySelector(".num3").innerText = i;
}
