console.log("Hello from JavaScript");

// This is in line comment
var number = 5; // This is also in-line comment.

/* This is a
Multi line Comment */

//console.log(number); // Semicolon at the end is optional but recommended.

/* JavaScript Data Types or Primitive Values
    undefined, null, boolean, string, symbol, number, and object
*/

// Declaring a Variable:
var myName = "dskrishnan"; //Declarations with 'var' is global. Not limited to the scope
console.log("Value assigned to 'myName' is ", myName);
myName = 8;
console.log("New Value assigned to 'myName' is ", myName);

let anotherName = "disciple" //Declarations with Let is valid only with in the scope of execution.
const pi = 3.14 //This is constant.

var a; // This is Declaring a variable
console.log("Default value of variable 'a' without any assignment : ", a); // Result is undefined.

a = null;
console.log("When 'null' is assigned to variable 'a', it becomes : ",a); //Result is null.

a = undefined; 
console.log("When 'undefined' is assigned to the variable 'a', it becomes : ", a); //Result is undefined.

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

// Initialization & Assignment
var a1 = 5;
console.log("a1 = a1 + 1 is : ", a1 = a1 + 1); // Result is 6
 
var c = "This is a";
console.log("c = c + ' String' is : ", c = c + " String"); // Result is 'This is a String'

// Case Sensitivity: JavaScript is Case sensitive. var testVariable & TestVariable are not Same
var welcome = "Hello";
console.log("String assigned the variable 'welcome' is ",welcome);
console.log("Value of undefined variable 'Welcome' is ",Welcome);
Welcome = welcome; // This will result in error. Becase first Letter "w" & "W" are treated differently in JS.
console.log("Value of 'Welcome' which is not declared in the first place but assigned a value is ",Welcome);

//Arithmetic Operations
var sum = 10 + 10; 
console.log("Sum is ", sum); // Answer is 20

var difference = 7 - 5; 
console.log("Difference is ", difference); //Answer is 2

var product = 3 * 4;
console.log("Product is ", product); //Answer is 12

var quotient = 10 / 3 
console.log("Quotient is ", quotient); // Answer is 3.3333333333333335

var remainder = 10 % 3
console.log("Remaider is ",remainder); // Answer is 1

var incrementNumberByOne = 23;
incrementNumberByOne = incrementNumberByOne + 1; 
console.log("incrementNumberByOne = incrementNumberByOne + 1 is ", incrementNumberByOne = incrementNumberByOne + 1);

incrementNumberByOne++; // This is same as incrementNumberByOne = incrementNumberByOne + 1; Answer is console.log("incrementNumberByOne++ is ",incrementNumberByOne++);
console.log("incrementNumberByOne++ is ", incrementNumberByOne++);

var decrementNumberByOne = 23;
decrementNumberByOne = decrementNumberByOne - 1; //Answer is 22
console.log("decrementNumberByOne = decrementNumberByOne - 1 is ", decrementNumberByOne = decrementNumberByOne - 1);

decrementNumberByOne--; // This is same as decrementNumberByOne = decrementNumberByOne - 1; 
console.log("decrementNumberByOne-- is ", decrementNumberByOne--);