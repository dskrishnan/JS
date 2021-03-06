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
/**********Initialization & Assignment***********/
var a1 = 5;
//console.log("a1 = a1 + 1 is : ", a1 = a1 + 1); // Result is 6

var c = "This is a";
//console.log("c = c + ' String' is : ", c = c + " String"); // Result is 'This is a String'

/************ Case Sensitivity: JavaScript is Case sensitive. var testVariable & TestVariable are not Same *****/
var welcome = "Hello"; // This is a defined declaration of variable.
var Welcome; // This is an undefined declaration of variable.
//console.log("String assigned the variable 'welcome' is ",welcome);
//console.log("Value of undefined variable 'Welcome' is ",Welcome);
Welcome = welcome;
//console.log("New Value assigned to the variable 'Welcome' is ", Welcome);

/**************** JavaScript is a Weakly Typed Language. For example,***********/
var integerThree = 3; var stringFour = '4';
/*
console.log("3 + '4' = ",integerThree + stringFour," --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is 34
console.log("3 * '4' = ", integerThree * stringFour, " --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is 12
console.log("2 + true = ", 2 + true, " --> Such a Weird result, this is why JS is a weakly typed language"); // Answer is 3
console.log("false - 3 = ", false - 3, " --> Such a Weird result, this is why JS is a weakly typed language"); //Answer is -3
*/

/***********Explicit Conversions in JS***************/
/*
console.log("Number('100') is : ",Number('100')); // 100
console.log("Number('abc') is ",Number('abc')); // NaN

console.log("Boolean(1) is : ",Boolean(1)); //true
console.log("Boolean(0) is : ",Boolean(0)); //false

console.log("String(true) is : ",String(true)); //"true"
console.log("String(false) is : ",String(false)); //"false
console.log("String('12345') is : ",String("12345"));


console.log("typeof(10) is : ",typeof (10)); // 'number'
console.log("typeof(3.14) is : ", typeof (3.14)); // 'number'
console.log("typeof(NaN) is : ", typeof (NaN)); // 'number'

console.log("typeof('Hello') is : ", typeof ("Hello")); // 'string'
console.log("typeof(true) is : ", typeof (true)); // 'boolean'
console.log("typeof(false) is : ", typeof (false)); // 'boolean'
*/

/*************Arithmetic Operations**********/
var sum = 10 + 10;
//console.log("Sum is ", sum); // Answer is 20

var difference = 7 - 5;
//console.log("Difference is ", difference); //Answer is 2

var product = 3 * 4;
//console.log("Product is ", product); //Answer is 12

var quotient = 10 / 3;
//console.log("Quotient is ", quotient); // Answer is 3.3333333333333335

var remainder = 10 % 3;
//console.log("Remaider is ",remainder); // Answer is 1

/***********Shorthand Arithmetic Operations*********/
var a = 10;
a += 4;
//console.log("a += 4 is equal to a = a + 4. So a is : ", a);
a -= 5
//console.log("a -= 5 is equal to a = a - 5. So a is :  ", a);

a *= 2;
//console.log("a *= 2 is equal to a = a * 2. So a is :  ", a);

a /= 2;
//console.log("a /= 2 is equal to a = a / 2. So a is :  ", a);

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

/*******Decimals or Floats*********/
var myDecimal = 0.008;

var decimalProduct = myDecimal * 3.3;
//console.log("decimalProduct is : ",decimalProduct);

var decimalQuotient = myDecimal / 0.002;
//console.log("decimalQuotient is : ",decimalQuotient);

/************Delcaring String************/
var firstName = "Santhanakrishnan";
var oneSpace = " ";
var lastName = 'Dhandapani';
var fullName = firstName + oneSpace + lastName;
//console.log("fullName is ",fullName);
myName = firstName + oneSpace;
myName += lastName; // This is another way of concatenating a string to a String variable.
var hiGreeting = 'Hello';
var welcomeMessage = 'Welcome to JavaScript Grammar Notes!';
var lengthOfMyName = myName.length;
var legnthOfWelcomeMessage = welcomeMessage.length;
/*
console.log(hiGreeting + oneSpace + myName + ',' + oneSpace + welcomeMessage);
console.log("Length of the string 'myName is : '",lengthOfMyName);
console.log("Length of the string 'welcomeMessage' is : ", legnthOfWelcomeMessage);
*/

var firstLetterOfmyName = myName[0];
//console.log("First Letter of the String 'myName' is : ", firstLetterOfmyName);

var lastLetterOfmyName = myName[myName.length - 1];
//console.log("Last Letter of the String 'myName' is : ", lastLetterOfmyName);

var thirdLastLetterOfMyName = myName[myName.length - 3];
//console.log("Third last Letter of the String 'myName' is : ", thirdLastLetterOfMyName);

/************* String Immutability ******************/
var myStr = 'Gello ' + firstName; // Note the spelling 'Gello'
//console.log(myStr[0]);
myStr[0] = 'H'; // This will not work, because String is Immutable.
//console.log(myStr[0]);
myStr = 'Hello ' + firstName; // This will Work.
//console.log(myStr);

var stringWithDoubleQuotes = "I am a \"double quoted\" string inside  \"double quotes\" using escape character \\.!"; // Here "\" is called escape character
//console.log(stringWithDoubleQuotes);
var stringWithSingleQUotes = 'String within Single quotes permit "double quotes" with out the need for escape character';
//console.log(stringWithSingleQUotes);
var stringWithBackTick = `String within backtick allows both 'Single Quotes' and "double quotes" together.`;
//console.log(stringWithBackTick);

/*********** A Sentence game/trick(Word Blanks) using strings & function ***********/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = '';
    result += 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' to the store ' + myAdverb;
    return result;
}
//console.log(wordBlanks("dog","big", "ran", "quickly"));
//console.log(wordBlanks("bike", "giant", "drove", "slowly"));

/*
CODE    OUTPUT
\'      Single Quote
\"      Double Quote
\\      Backslash
\n      New Line
\r      Carriage Return
\t      Tab
\b      backspace
\f      Form Feed
*/

/*
console.log("This is example for \' `single quote` using the escape character 'backslash'");
console.log('This is example for \" "double quote" using the escape character "backslash"');
console.log("This is example for \\ 'backslash' using the escape character 'backslash'");
console.log("This is example for \n 'New Line' using the escape character 'backslash'");
console.log("This is example for \t 'Tab' using escape character 'backslash'");
console.log("First Line with no Tab\n\t\\Second Line with Tab and Back Slash\n\t\t\\Third Line with double Tab and Back Slash");
*/

/************  Do not have quality examples for these. These need to be explored on demand********/
/*
console.log("This is example for \r 'Carriage Return' using escape character 'backslash'");
console.log("This is example for \b 'Back Space' using escape character 'backslash'");
console.log("This is example for \f 'Form Feed' using escape character 'backslash'");
*/

// Arrays
var myArray = ['Name1', 1, 'Name2', 'Name3', 3];
//console.log(myArray); ////Array Length doesn't include '0'. It starts from '1'.
var firstElementOfMyArray = myArray[0]; ////Array Index Starts from 0 unlike Length which starts from 1.
//console.log("First Element of 'myArray' is : ",firstElementOfMyArray);

/********Modify Array element using index*******/
myArray[0] = 'Name0';
//console.log(myArray)

/***************** Multi Dimensional Array************************/
var multiDimArray = [myArray, [4, 5, 6], [7, 8, 9], [10, 11, 12]];
//console.log('Last element of inner array is : ',multiDimArray[3][2]);
//console.log('Length of Multi Dimensional Array before Push is : ', multiDimArray.length);

/************Add an element at the end to an array*****************/
multiDimArray.push(13, 14, 15, [17, 18, 19]);
var arrayLength = multiDimArray.length; //Array Length doesn't include '0'. It starts from '1'.
//console.log('Length of Multi Dimensional Array after Push is : ', arrayLength,'\n');

/******* To view the elements of Array, For Loop Can be used. ****/
/*
for (i = 0; i < arrayLength; i++ ) {
    console.log("Array Element [",i,"] is : ", multiDimArray[i],'\n');
    if (Boolean(multiDimArray[i].length) == true) {
        for (j=0;j<multiDimArray[i].length;j++)
        console.log('Nested Array Element [',i,'][',j,'] is : ',multiDimArray[i][j]);
    }
}
*/

//console.log('Length of Nested Array Element 7(Which is an inner Array) is : ',multiDimArray[7].length);

//**********Remove Last element of an Array Using Pop.****************
var lastInnerArrayElementRemoved = multiDimArray[7].pop();
//console.log('Last Inner Array element removed using "Pop" is : ', lastInnerArrayElementRemoved);
//console.log('Length of Multi Dimensional Array after "popping" the last "inner array" element is : ', multiDimArray.length);

var lastArrayElementRemoved = multiDimArray.pop();
//console.log('Last Array Element removed using "Pop" is : ', lastArrayElementRemoved);
//console.log('Length of Multi Dimensional Array after "Popping" Last Element is : ', multiDimArray.length);

//**************Remove First element of an Array Using Shift**********
//console.log('\nLength of First Inner Array Element before "Shifting" is : ',multiDimArray[0].length);
var firstInnerArrayElementRemoved = multiDimArray[0].shift();
//console.log('First Inner Array element removed using "Shift" is : ', firstInnerArrayElementRemoved);
//console.log('Length of First Array Element(Inner Array) After "Shifting" is : ', multiDimArray[0].length);

var firstArrayElementRemoved = multiDimArray.shift();
//console.log('First Array Element removed using "Shift" is : ',firstArrayElementRemoved);
//console.log('Length of Array After removing first element using "Shift" is : ', multiDimArray.length);

/*************Add an element at the beginning of an Array**************************/
multiDimArray.unshift(myArray); //var myArray = ['Name1', 1, 'Name2', 'Name3',3];
//console.log('\nNewly Added Array element at the beginning is : ',multiDimArray[0]);
//console.log('Length of Array After adding first element using "UnShift" is : ', multiDimArray.length);

/********************** Functions *****************/

function greeting(anyVar) {
    console.log('Welcome', anyVar, 'to JavaScript Grammar reference!');
}
//greeting(fullName);

function subtractTwoNumbers(a, b) {
    return a - b;
}
//console.log(subtractTwoNumbers(50,25));

/********* Variable Scope - Global vs Local ***********/
// Scope refers to the visibility of variables with in & outside of functions

var globalVariable; // This is declared using 'var' but not initialized.
//console.log('Type Of Global Variable which is not initialized : ',typeof (globalVariable));

global = '10'; // This is a variable not declared(var is not used) but initialized.
//console.log('Global Variable which is not declared but initialized with a value directly : ',global);

function scopeCheck() {
    initializedInsideScopeCheckFunction = 'Local Variable initialized inside function without declaration using "var"';
    //console.log('Uninitialized Global Variable referred inside function : ', globalVariable);
    //console.log('Global variable initialized without declaration using "var" : ', global);
    var localVariableFromScopeCheck = 'This is a Local Variable from the function "scopeCheck"';
    //console.log('Printing a local variable inside : ', localVariableFromScopeCheck); //This will work inside the function.
}
scopeCheck();
//console.log(initializedInsideScopeCheckFunction); // This will result in error. Some browsers will treat this variable as global.
//console.log('Printing a local variable outside : ', localVariableFromScopeCheck); //This will fail because it is outside the function.

// Another Example
function myLocalScope() {
    var localVar = 'Local Var from "myLocalScope()"';
    console.log(localVar);
}
//myLocalScope();
//console.log(localVar);// This will result in ReferenceError: localVar is not defined.

// When local variable & global variable have same name
var mySport = 'Cricket';
function favSport() {
    var mySport = 'TableTennis'; // If this is commented, then the variable reference will be global.
    return mySport;
}
//console.log(mySport); // Only the Global assignment prior to the favSport() function,  'Cricket' will be considered.
//console.log(favSport());

// Undefined & return values in function

var sum = 10;
function addNumber() {
    sum += 10;
    return sum; // Without return statement, this function will not be able to pass the result
}
//console.log(addNumber()); // Result would be Undefined, if return statement in the funciton is commented out.

function multiplyByTwo(number) {
    return number * 2;
}
//console.log(multiplyByTwo(10));

/*************** Implementing a simple queue ***********/

function nextInLine(arr, item) {
    arr.push(item); // This will append the item to the array.
    return arr.shift(); // This will remove the first item from the array.
}
var testArr = [1, 2, 3, 4, 5];
/*console.log('Before adding item to the queue array : ', JSON.stringify(testArr));
console.log('First element removed/shifted from the array : ',nextInLine(testArr,6));
console.log('After adding item to the queue array & "removing/Shifing" the first element : ', JSON.stringify(testArr));
*/

/************ Booleans & IF Condition *******************/
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
//console.log(trueOrFalse(true));
//console.log(trueOrFalse(false));

/*********** Test equality ***********/
var aNumber = 10;
var aString = '10';
function testEqual(aNumber, aString) {
    if (aNumber == aString) { // Here the '==' operator will convert the both operators into common data type to do comparison.
        // The operator != can be used to check for Non Equality
        return "Normally Equal";
    }
    return "Not Equal";
}
//console.log('Normal Equality Test between Number', aNumber, ' & String', aString, ' is : ', testEqual(aNumber, aString)); 


/******** Test Strict Equality  **********/

function testStrict(aNumber, aString) {
    if (aNumber === aString) { // Here aNumber & aString are not same.
        // The operator '!==' can be used to check strict Non equality
        return 'Strictly Equal';
    }
    return 'Strictly Not Equal';
}
//console.log('Strict Equality Test between Number', aNumber, ' & String', aString, ' is : ', testStrict(aNumber, aString));

/**** If Condition with AND logic  ******/

function teenAgeTest(age) {
    if (age >= 12 && age <= 19) {
        return 'Teen Age';
    }
    return 'Not Teen Age';
}
//console.log(teenAgeTest(20));//

/**** Test LogicalAnd ****/

function testLogicalAnd(val) {
    if (val >= 50 && val <= 100) {
        return val + " is between 50 & 100";
    }
    return val + " is not in between 50 & 100";
}
//console.log(testLogicalAnd(61));

/**** Test ElseIf *****/

function testElseIf(marks) {
    if (marks >= 0 && marks < 35) {
        return "Student Failed with Score : " + marks;
    } else if (marks > 35 && marks <= 50) {
        return "Student barely Passed with Score : " + marks;
    } else if (marks > 50 && marks <= 75) {
        return "Student Passed with Good score : " + marks;
    } else if (marks > 75 && marks <= 100) {
        return "Student Passed with Distinction. Score is : " + marks;
    } else {
        return "Invalid Score : " + marks
    }
}
//console.log(testElseIf(101));

/**** Order my Logic ****/
function testOrderOfLogic(val) {
    if (val > 50) {
        return val + " is bigger than 50";
    }
    if (val > 40) {
        return val + " is bigger than 40";
    }
    if (val > 30) {
        return val + " is bigger than 30";
    }
    return val + " is less than 30";
}
//console.log(testOrderOfLogic(49)); // Code executed in the order it is written.

/**** Switch Statement ****/

function testSwitchCase(val) {
    things = "";
    switch (val) {
        case "a": // This does Strict comparision with val. i.e. if (val === "a")
            things = "Apple";
            break;
        case "b":
            things = "Ball";
            break;
        case "c":
            things = "Cat";
            break;
        case "d":
            things = "Dog";
            break;
        default:
            things = "Some Stuff"
            break;
    }
    return things;
}
//console.log(testSwitchCase("c"));

/**** Boolean operation with return statement ****/

function isLess(a, b) {
    return a < b;
}
//console.log(isLess(50,10));

