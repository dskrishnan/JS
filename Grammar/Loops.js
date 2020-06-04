console.log("Welcome to JavaScript Loops");

/**** Iterate with While Loop ****/
var whileArray = [];
var i = 0;
while (i < 5){
    whileArray.push(i);
    i++;
}
//console.log(whileArray);

/**** Iterate with For Loop ****/
var forArray = [];
for (i=1; i < 6; i++){
    forArray.push(i);
}
//console.log(forArray);

/**** Iterate Odd Numbers with a For Loop ****/
var forOddArray = [];
for(i=1; i<10; i+=2){
    forOddArray.push(i);
}
//console.log(forOddArray);

/**** Iterate backwards evenly using For Loop ****/
var forBackwardArray = [];
for(i=10; i > 0 ; i -= 2){
    forBackwardArray.push(i);
}
//console.log(forBackwardArray);

/**** Iterate through a Numeric Array to add them with a For Loop ****/
var numArray = [1,2,3,4,5];
var arrayTotal = 0;
for(var i=0; i<numArray.length; i++){
    arrayTotal += numArray[i];
}
//console.log(arrayTotal);

/**** Nesting For Loops ****/

var nestedArrayInput = [[1,2],[3,4],[5,6,7]];
function multiplyAll(arr){
    var product = 1;
    for(var i = 0; i< arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
//console.log(multiplyAll(nestedArrayInput));

/**** Iterate with Do...While Loop ****/
var whileArray = [];
var i = 10;
while(i<5){ //This will first check the condition before executing the content
    whileArray.push(i);
    i++;
}
//console.log(i,whileArray);
var doWhileArray = [];
do { // This will first execute the content before checking the while condition.
    doWhileArray.push(i);
    i++;
} while(i<5)
//console.log(i, doWhileArray);
