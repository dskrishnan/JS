console.log("Welcome to JavaScript - Conversion of String to Int");
function convertToInt(str){
    return "Integer is : "+parseInt(str);
}
console.log(convertToInt("45"));

/**** Convert to Int with a base(binary, hexa, octa etc) ****/
function convertToIntWithRadix(str,radix){
    return "Integer for the base "+radix+ " is : "+parseInt(str,radix);
}
console.log(convertToIntWithRadix("110",2));
