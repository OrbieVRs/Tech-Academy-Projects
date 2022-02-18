var X = 10; // global variable
function Add_numbers_1() {
    var Y = 10 // local variable
    document.write(20 + X + "<br>");
    console.log(15 + Y);
}
function Add_numbers_2() {
    document.write(X + 100);
    console.log(Y + 100);
}
//calling the functions
Add_numbers_1();
Add_numbers_2();

if (1 < 2) { // Always true and if statement runs
    document.write("The left number is smaller than the number on the right.");
}

function get_Date() {
    if (new Date().getHours() < 18) { // If the time is before 6:00pm true, else program doesnt run
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Age
function Age_Function() {
    Age = document.getElementById("Age").value; // gets value of input, saves to age
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //
}

//Time
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // True if time is after midnight (12:00am) and before midday (12:00pm)
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // True if time is during or after midday (12:00pm) and before 6:00pm
        Reply = "It is afternoon.";
    }
    else { // Unconditional true if the previous are false
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}