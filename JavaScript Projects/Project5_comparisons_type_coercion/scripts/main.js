function types() {
    var some = "110"
    document.getElementById("types").innerHTML = typeof some;
}
console.log(0/0);
console.log(isNaN("This is a string"));
console.log(isNaN('007'));
console.log(2e310);
console.log(-3e310);
console.log(10 > 3);
console.log(10 < 3);
console.log(2 + 2);
document.write(1 == 1);
document.write(3 == 11);
var first = 10;
var second = 10;
document.write(first == second);
first = 82;
second = "82";
document.write(first == second);
first = "Magmar";
second = "Magmar";
document.write(first == second);
document.write("\n");
document.write(5 > 2 && 10 > 4);
document.write("\n");
document.write(5 > 10 && 10 > 4);
document.write("\n");
document.write(5 > 10 || 10 > 4);
document.write("\n");
document.write(5 > 10 || 10 > 20);
document.write("\n");
document.write(!(5 > 10 || 10 > 20));
console.log("10" + 5);
console.log(3 === 10);