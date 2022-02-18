var X = 10;
function Add_numbers_1() {
    var Y = 10
    document.write(20 + X + "<br>");
    console.log(15 + Y);
}
function Add_numbers_2() {
    document.write(X + 100);
    console.log(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

if (1 < 2) {
    document.write("The left number is smaller than the number on the right.");
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// Age
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Time
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}