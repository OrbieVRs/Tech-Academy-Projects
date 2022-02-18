// the concat() method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //combines part_1 with part_2 thru 4 into whole_sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //takes the 27th through 33rd characters from sentence, assigns them to section
    document.getElementById("Slice").innerHTML = Section;
}

// int to String
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // converts X to a string
}

// precision
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // takes the first 10 characters
}

