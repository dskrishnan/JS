// This is 'in-line' comment.
console.log("Hello from JavaScript Grammar"); // This is also in-line comment. Result can be viewed in the Debug Console.

//console.log("This is from console.log(*Your Message*) ");

/* This is a
Multi line Comment */

/*************** Introduction to JavaScript **********************/

var number = 5; 
//console.log(number); // Semicolon at the end is optional but recommended.

/* JavaScript has following Data Types or Primitive Values
    undefined, null, boolean, string, symbol, number, and object
*/

/**************** Declaring a Variable: **************/
var myName = "dskrishnan"; 
//console.log("Value assigned to 'myName' is ", myName);
myName = 8; // Assigning a different kind of value is allowed.
//console.log("New Value assigned to 'myName' is ", myName);

let anotherName = "disciple" //Declarations with Let is valid only with in the scope of execution.
const pi = 3.14 //This is constant.

var a; // This is Declaring a variable
//console.log("Default value of variable 'a' without any assignment : ", a); // Result is undefined.

a = null;
//console.log("When 'null' is assigned to variable 'a', it becomes : ",a); //Result is null.

a = undefined; 
//console.log("When 'undefined' is assigned to the variable 'a', it becomes : ", a); //Result is undefined.

/*
    In JavaScript there are only Six Falsy Values, they are, 
        false
        0(Zero)
        ""(Empty String)
        null
        undefined
        NaN(Not a Number)
    Any other value in JavaScript is Considered Truthy as opposed to Falsy
 */

