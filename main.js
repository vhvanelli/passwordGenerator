const inputPassword = document.getElementById("input-password");
const button = document.getElementById("bt-generate");
const clickCopy = document.getElementById("copy");

let password = "";

generate = () => {
    password = "";

    const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
     "Z","1", "2", "3", "4", "5", "6", "7","8", "9", "0", "!", "@", "#", "$", "%", "&", "*"]

    const passwordLenght = 16;
    let indexChar;


    for(i = 0; i < passwordLenght; i++){
        indexChar = (Math.floor(Math.random() * char.length));

        password += char[indexChar];
    }
    inputPassword.value = password;
}

copyPassword = () =>{
    var copyPass = document.getElementById("input-password");

    /* Select the text field */
    copyPass.select();
    copyPass.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the password: " + copyPass.value);
}

button.addEventListener("click", generate);
clickCopy.addEventListener("click", copyPassword)