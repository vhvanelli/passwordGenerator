const textPassword = document.getElementById("text-password");
const button = document.getElementById("bt-generate");

generate = () => {
    const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
     "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", 
     "8", "9", "0", "!", "@", "#", "$", "%", "&", "*"]
    let password = "";
    const passwordLenght = 16;
    let indexChar;

    for(i = 0; i < passwordLenght; i++){
        indexChar = (Math.floor(Math.random() * char.length))

        password += char[indexChar]
        console.log(indexChar);

    }
   textPassword.value = password;
}
button.addEventListener("click", generate);