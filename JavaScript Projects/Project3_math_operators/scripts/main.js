function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + subtraction;
}

function multiply_Function() {
    var multiply = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 * 8 = " + multiply;
}

function divide_Function() {
    var divide = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 = " + divide;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("math").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = "25 / 6, the remainder is: " + simple_Math;
}

function negation_Operator() {
    var simple_Math = 10;
    document.getElementById("negative").innerHTML = -simple_Math;
}
var i = 50;
function increment() {
    i++;
    document.getElementById("increase").innerHTML = i;
}

function decrement() {
    i--;
    document.getElementById("decrease").innerHTML = i;
}

function random() {
    document.getElementById("random").innerHTML = Math.random() * 100;
}