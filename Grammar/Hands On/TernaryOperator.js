console.log("Welcome to JavaScript - Ternary Operators");
// condition ? statement-if-true : statement-if-false;

function checkEquality(var1,var2){
    return var1 === var2 ? var1 + " and " + var2 + " are Equal" : var1 + " and " + var2 + " are Not Equal";
}
//console.log(checkEquality("Dhoni","Sachin"));

/**** Nested Ternary Operator ****/

function checkSign(num){
    return "Sign of " + num + " is : " +num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"; //
}
console.log(checkSign(7));