// calculate

// addition

let collect2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = no1 + "+" + no2;
    document.getElementById("result").innerHTML = eval(final);
    document.getElementById("notice").innerHTML = " ";

}


// subtraction

let subtract2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = no1 + "-" + no2;
    document.getElementById("result").innerHTML = eval(final);
    document.getElementById("notice").innerHTML = " ";
    if(no1 < no2){
        document.getElementById("notice").innerHTML = "The number is negative";
    }

}


// multiply

let multiply2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = no1 + "*" + no2;
    document.getElementById("result").innerHTML = eval(final);
    document.getElementById("notice").innerHTML = " ";

}




// divide

let divide2No = () => {
    let no1 = +prompt("Enter the first NO");
    let no2 = +prompt("Enter the Second NO");
    let final = no1 + "/" + no2;
    document.getElementById("result").innerHTML = eval(final);
    document.getElementById("notice").innerHTML = " ";
    if(Math.ceil(eval(final)) != eval(final)){
        document.getElementById("notice").innerHTML = "This is a number containing fractures";
    }
}


// ==============================================================================
