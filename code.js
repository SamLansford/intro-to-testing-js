// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(input) {
    console.log(typeof input)
    if (input === undefined || input === true || input === false) {
        return ("Hello World!");
    // } else if (input === "Alex") {
    //     return ("Hello, Alex!");
    // } else if (input === "Jane") {
    //     return ("Hello, Jane!");
    // } else if (input === "Pat") {
    //     return ("Hello, Pat!");
    } else if (input != null && typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return ("Bad data")
    }
}

function isFive(input) {
    console.log(typeof input);
    if (input === 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(n) {
    console.log(typeof n);
    if (n % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    let vowels = ["A","a","E","e","I","i","O","o","U","u"]
    if (vowels.includes(input)) {
        return true;
    } else {
        return false;
    }
}