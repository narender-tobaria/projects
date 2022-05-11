let password = "";
let signUpInput = document.getElementById("sign-up-input");
let signinInput = document.getElementById("signin-input");
let signUpInputBorder = document.getElementById("sign-up-input").style;
let signinInputBorder = document.getElementById("signin-input").style;
let signUpError = document.getElementById("sign-up-error");
let signinError = document.getElementById("signin-error");
let warning = "red";
let average = "#f06735";
let success = "green";
let normal = "rgb(0, 157, 255)";

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
  }
  
  const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodedArr = codeArr.map(codeArrChar => {
      let index = lookupValues.findIndex((element) => element === codeArrChar)
      return lookupKeys[index]
    })
    return encodedArr.join("")
  }
  
  const decode = (encodedStr) => {
    const codeArr = encodedStr.split("")
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodedArr.join("")
  }



const checkstrongness = () => {
    let inputpass = signUpInput.value;
    let inputsize = inputpass.length;
    if(inputpass != ""){
        if(inputsize < 5){
            signUpError.innerHTML = "Entered Password is very Weak";
            signUpError.style.color = warning;
            signUpInputBorder.borderColor = warning;
        }
        else if(inputsize < 8 ){
            signUpError.innerHTML = "Entered Password is Average";
            signUpError.style.color = average;
            signUpInputBorder.borderColor = average;
        }
        else{
            signUpError.innerHTML = "Entered Password is Strong";
            signUpError.style.color = success;
            signUpInputBorder.borderColor = success;
        }
    }
    else{
        signUpError.innerHTML = "Please Enter Some Value to Create Password";
        signUpError.style.color = warning;
        signUpInputBorder.borderColor = warning;
    }
}

const signup = () => {
    let inputpass = signUpInput.value;
    let inputsize = inputpass.length;
    if(inputsize >= 8){
        signUpError.innerHTML = "Password Saved Successfully";
        signUpError.style.color = success;
        signUpInputBorder.borderColor = normal;
        password = encode(inputpass);
        signUpInput.value = "";
    }
    else{
        checkstrongness();
    }
}


const signin = () => {
    let inputpass = signinInput.value;
    if(inputpass != ""){
        if(inputpass === decode(password)){
            signinError.innerHTML = "Access Granted :- Entered Correct Password";
            signinError.style.color = success;
            signinInputBorder.borderColor = normal;
        }
        else{
            signinError.innerHTML = "Access Denied :- Entered Wrong Password";
            signinError.style.color = warning;
            signinInputBorder.borderColor = warning;
        }
    }
    else{
        signinError.innerHTML = "Please Enter Your Password to Sign In";
        signinError.style.color = warning;
        signinInputBorder.borderColor = warning;
    }
}