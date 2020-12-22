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