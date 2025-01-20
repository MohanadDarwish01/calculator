// calculate

// addition
let collectNumbers = (x, y) => {
    return eval(x + y) ;
}
let collect2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = collectNumbers(no1, no2);
    document.getElementById("result").innerHTML = final;
    document.getElementById("notice").innerHTML = " ";

}


// subtraction
let subtractNumbers = (x, y) => {
    return eval(x - y) ;
}
let subtract2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = subtractNumbers(no1, no2);
    document.getElementById("result").innerHTML = final;
    document.getElementById("notice").innerHTML = " ";
    if(no1 < no2){
        document.getElementById("notice").innerHTML = "The number is negative";
    }

}


// multiply
let multiplyNumbers = (x, y) => {
    return eval(x * y) ;
}
let multiply2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = multiplyNumbers(no1, no2);
    document.getElementById("result").innerHTML = final;
    document.getElementById("notice").innerHTML = " ";

}




// divide
let divideNumbers = (x, y) => {
    return eval(x / y) ;
}
let divide2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = divideNumbers(no1, no2);
    document.getElementById("result").innerHTML = final;
    document.getElementById("notice").innerHTML = " ";
    if(Math.ceil(final) != final){
        document.getElementById("notice").innerHTML = "This is a number containing fractures";
    }
}


// ==============================================================================
