// This is in line comment.
console.log("Hello from JavaScript"); // This is also in-line comment. Result can be viewed in the Debug Console.

//console.log("Uncomment this lines like these to view the results if you need to verify a result ");

/* This is a
Multi line Comment */

/* Introduction to JavaScript

Javascript is just a standard, more formally known as ECMAScript. It can be implemented in any language, 
just like any standard. Chrome's Javascript engine, V8, is written in C++. Firefox's Javascript engine,
SpiderMonkey (and now TraceMonkey) is also written in C++.

Installation:
JavaScript doesn't require special installation. All browsers can execute Javascript code. However Chrome, FireFox &
Microsoft Edge has some of the best developer tools/extensions/plugins.

JavaScript is universally supported by all IDEs. Here Microsoft Visual Studio Code or VSCode is our IDE of Choice.

JavaScript was preferred the language of choice for front end. But with the advent of NodeJS, Server Side programming
is also possible with JavaScript. This means both Client Side & Server Side programming is possible with
Single Programming Language.

With React Native, even native Mobile Apps for iOS & Android is possible with JavaScript.

For this JavaScript Grammer, all the results are intended to be viewed within the IDE/Code Editor Debug Console.

Before setting up run & debug, install Node JS from https://nodejs.org/en/download/ . Because Node JS framework
enables server side programming with JavaScript, we can run & debug our code without a browser.

In the VS Code, From the top menu bar, Choose Run, Open Configurations. This will create a hidden folder .vscode and
with in that 'launch.json' will be created. Make sure that file has the following,
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/grammer.js" //Here grammer.js is the file name.

*/


var number = 5; 
//console.log(number); // Semicolon at the end is optional but recommended.

/* JavaScript has following Data Types or Primitive Values
    undefined, null, boolean, string, symbol, number, and object
*/

// Declaring a Variable:
var myName = "dskrishnan"; //Declarations with 'var' is global. Not limited to the scope
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
    Any other value in JavaScript is Considered Truthy
 */

// Initialization & Assignment
var a1 = 5;
//console.log("a1 = a1 + 1 is : ", a1 = a1 + 1); // Result is 6
 
var c = "This is a";
//console.log("c = c + ' String' is : ", c = c + " String"); // Result is 'This is a String'

// Case Sensitivity: JavaScript is Case sensitive. var testVariable & TestVariable are not Same
var welcome = "Hello"; // This is a defined declaration of variable.
var Welcome; // This is an undefined declaration of variable.
//console.log("String assigned the variable 'welcome' is ",welcome);
//console.log("Value of undefined variable 'Welcome' is ",Welcome);
Welcome = welcome; // This will result in error. Becase first Letter "w" & "W" are treated differently in JS.
//console.log("New Value assigned to the variable 'Welcome' is ", Welcome);

// JavaScript is a Weakly Typed Language. For example,
var integerThree = 3; var stringFour = '4';
/*
console.log("3 + '4' = ",integerThree + stringFour," --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is 47
console.log("3 * '4' = ", integerThree * stringFour, " --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is 12
console.log("2 + true = ", 2 + true, " --> Such a Weird result, this is why JS is a weakly typed language"); // Answer is 3
console.log("false - 3 = ", false - 3, " --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is -3


// Explicit Conversions in JS
console.log("Number('100') is : ",Number('100')); // 100
console.log("Number('abc') is ",Number('abc')); // NaN

console.log("Boolean(1) is : ",Boolean(1)); //true
console.log("Boolean(0) is : ",Boolean(0)); //false

console.log("String(true) is : ",String(true)); //"true"
console.log("String(false) is : ",String(false)); //"false
console.log("String('12345') is : ",String("12345"));
*/

console.log("typeof(10) is : ",typeof (10)); // 'number'
console.log("typeof(3.14) is : ", typeof (3.14)); // 'number'
console.log("typeof(NaN) is : ", typeof (NaN)); // 'number'

console.log("typeof('Hello') is : ", typeof ("Hello")); // 'string'
console.log("typeof(true) is : ", typeof (true)); // 'boolean'
console.log("typeof(false) is : ", typeof (false)); // 'boolean'

//Arithmetic Operations
var sum = 10 + 10; 
//console.log("Sum is ", sum); // Answer is 20

var difference = 7 - 5; 
//console.log("Difference is ", difference); //Answer is 2

var product = 3 * 4;
//console.log("Product is ", product); //Answer is 12

var quotient = 10 / 3 
//console.log("Quotient is ", quotient); // Answer is 3.3333333333333335

var remainder = 10 % 3
//console.log("Remaider is ",remainder); // Answer is 1

var incrementNumberByOne = 23;
incrementNumberByOne = incrementNumberByOne + 1; 
//console.log("Value of incrementNumberByOne + 1 is ", incrementNumberByOne);

incrementNumberByOne++; // This is same as incrementNumberByOne = incrementNumberByOne + 1; Answer is console.log("incrementNumberByOne++ is ",incrementNumberByOne++);
//console.log("Value of incrementNumberByOne++ is ", incrementNumberByOne++);

var decrementNumberByOne = 23;
decrementNumberByOne = decrementNumberByOne - 1; //Answer is 22
//console.log("Value of decrementNumberByOne - 1 is ", decrementNumberByOne);

decrementNumberByOne--; // This is same as decrementNumberByOne = decrementNumberByOne - 1; 
//console.log("Value of decrementNumberByOne-- is ", decrementNumberByOne--);


