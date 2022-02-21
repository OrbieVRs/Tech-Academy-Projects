function Color_Function() {
    var colorOutput;
    var colors = document.getElementsByName("Color_Input");
    var colorString = " is a great color!";
    for (var i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            switch(colors[i].value) {
                case "Red":
                    colorOutput = "Red" + colorString;
                break;
                case "Yellow":
                    colorOutput = "Yellow" + colorString;
                break;
                case "Green":
                    colorOutput = "Green" + colorString;
                break;
                case "Blue":
                    colorOutput = "Blue" + colorString;
                break;
                case "Pink":
                    colorOutput = "Pink" + colorString;
                break;
                case "Purple":
                    colorOutput = "Purple" + colorString;
                break;
                default:
                    colorOutput = "Something's wrong"
                    
            }

        } 
    }
    /*switch(colors.checked) {
        case "Red":
            colorOutput = "Red" + colorString;
        break;
        case "Yellow":
            colorOutput = "Yellow" + colorString;
        break;
        case "Green":
            colorOutput = "Green" + colorString;
        break;
        case "Blue":
            colorOutput = "Blue" + colorString;
        break;
        case "Pink":
            colorOutput = "Pink" + colorString;
        break;
        case "Purple":
            colorOutput = "Purple" + colorString;
        break;
        default:
            colorOutput = "Something's wrong"
    }*/
    console.log(colors.checked);
    console.log(colors.value);
    console.log(colors);
    document.getElementById("Output").innerHTML = colorOutput;
}