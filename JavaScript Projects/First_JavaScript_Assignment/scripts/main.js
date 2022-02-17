// This is actually the code for an ARG I am making as a side project based on what I am learning through The Tech Academy
/**
 * multi
 * line
 * comment
 * :)
 */

var alphabet = ["\x61", "\x62", "\x63", "\x64", "\x65", "\x66", "\x67", "\x68", "\x69", "\x6A", "\x6B", //0,10
"\x6C", "\x6D", "\x6E", "\x6F", "\x70", "\x71", "\x72", "\x73", "\x74", "\x75", "\x76", "\x77", "\x78", //11,23
"\x79", "\x7A", "\x3D", "\x30", "\x31", "\x32", "\x33", "\x34", "\x35", "\x36", "\x37", "\x38", "\x39", //24, 36
"\x41", "\x42", "\x43", "\x44", "\x45", "\x46", "\x47", "\x48", "\x49", "\x4A", "\x4B", "\x4C", "\x4D", //37, 49
"\x4E", "\x4F", "\x50", "\x51", "\x52", "\x53", "\x54", "\x55", "\x56", "\x57", "\x58", "\x59", "\x5A"] //50, 62

function checkPswd() {
    
    let confirmPassword = alphabet[4] + alphabet[59] + alphabet[36] + alphabet[28] + alphabet[45] + alphabet[44]
                        + alphabet[3] + alphabet[11] + alphabet[1] + alphabet[13] + alphabet[53] + alphabet[6]
                        + alphabet[3] + alphabet[43] + alphabet[36] + alphabet[21] + alphabet[45] + alphabet[43]
                        + alphabet[62] + alphabet[7] + alphabet[2] + alphabet[6] + alphabet[26] + alphabet[26];
    var password = document.getElementById("pwd").value;
    
    if (password == confirmPassword) {
        //window.location="welcome.html";
        alert("correct");
    }
    else{
        alert(confirmPassword);
        document.write("you have some ammount of attempts left");
    }
}