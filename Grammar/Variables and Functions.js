console.log('Hello from JavaScript Variables and Functions'); // Semicolan at the end is optional.

//Variables
var myName = "dskrishnan"; // Data type need not be mentioned.
myName = 8; // This valid. Same variable will accept values of different data types.

let anotherName = "disciple" //Declarations with Let is valid only with in the scope of execution.
const pi = 3.14; //This is constant.

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
    Any other value in JavaScript is Considered Truthy
 */

 // Variable names are case sensitive
 var welcome = 'Hello';
 var welCome  = 'World';
 console.log('welcome is',welcome,'and welCome is',welCome);
