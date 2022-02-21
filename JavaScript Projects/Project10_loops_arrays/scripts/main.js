function Call_Loop() {
    var digit = "";
    var i = 1;
    while (i < 11) { // runs until i = 11 (10x)
        digit += "<br>" + i;
        i++;            // increments i by 1
    }
    document.getElementById("Loop").innerHTML = digit;
}

// for loops
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var i;
function For_Loop() {
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// Arrays
function Cat_Pics() {
    var catPicture = [];            // initialized catPicture
    catPicture[0] = "sleeping";
    catPicture[1] = "playing";
    catPicture[2] = "eating";
    catPicture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + catPicture[2] + ".";
}

//Constant variable
function Constant_Function () {
    const MUSICAL_INSTRUMENT = {type:"guitar", brand:"Fender", color:"black"}; // Constants are variables that cannot be change once declared and are denoted by ALL_UPPERCASE
    MUSICAL_INSTRUMENT.color = "blue";
    MUSICAL_INSTRUMENT.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + MUSICAL_INSTRUMENT.type + " was " + MUSICAL_INSTRUMENT.price;
}

// let 
var numberA = 82;       // numberA initialized and declared as 82
console.log(numberA);   // numberA is 82
{
    let numberA = 33;   // numberA is redeclared as 33
    console.log(numberA); // numberA is 33
}
console.log(numberA);   // numberA is 82
console.log(null);      // console break
var numberB = 82;       // numberB initialized and declared as 82
console.log(numberB);   // numberB is 82
{
    var numberB = 33;   // numberB is redeclared as 33
    console.log(numberB); // numberB is 33
}
console.log(numberB);   // numberB is 33

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model; //outputs "The car is a 2021 red Dodge Viper"
    }
};
console.log(car.description());                                                     // outputs to console car.description()
document.getElementById("Car_Object").innerHTML = toString(car.description()); // Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')    I do not know why this occurs