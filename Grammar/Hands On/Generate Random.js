console.log("Welcome to Random Generation using JavaScript");

function randomFraction(){
    return "Random Fraction is : " + Math.random();
}
//console.log(randomFraction());

function randomWhole(){
    return "Random Whole Number between 0 - 9 is : " + Math.floor(Math.random() * 10) // Here * 10 will give random numbers between 0 - 9.
}
//console.log(randomWhole());

function randomRange (myMin, myMax){
    return "Random between "+ myMax +" and "+ myMin + " is : "+ Math.floor(Math.random() * (myMax-myMin)+ 1 + myMin);
}
console.log(randomRange(2,19));