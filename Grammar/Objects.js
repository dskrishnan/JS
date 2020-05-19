console.log("Welcome to JavaScript Objects");
/*
Objects are nothing but Arrays except we use properties instead of indexes. It is a key value pair.
*/
var ourDog = {
    "name" : "Tevil",
    "legs" :   4,
    "tails" : 1,
    "friends":["everything"]
};
//  In the above name, legs, tails & friends are properties or keys. Tevil, 4, 1 & [everything] are values.

/**** Accessing Object Properties using (.) notation ****/
var dogName = ourDog.name;
//console.log("Dog Name is : ", dogName);

/**** Accessing Object Properties using bracket notation ****/
 
var ourCat = {
    "my Cat Name": "koi", // Here (.) notation won't work because of spaces in the properties/Keys.
    "cat Age" : 2,
    "cat weight": "2 Kilos"
};
var catName = ourCat["my Cat Name"];
//console.log("Cat Name is : ", catName);

/**** Substituting Object Property with variables ****/
var catAge = "cat Age"
//console.log("Cat Age is : ", ourCat[catAge]);

/**** Update Object values using properties ****/
ourDog.name = "Happy Updated Tevil";
//console.log("Updated Dog Name is : ", ourDog.name);

/**** Adding New Property to the Dog Object ****/
ourDog.bark = "Bow-Bow"; // Using (.) notation
ourDog["color"] = 'Black'; // Using bracket[] notation.
//console.log("Bark of my dog is : ", ourDog.bark);
//console.log("Color of my dog is : ", ourDog["color"]);

/**** Deleting Object Properties ****/
delete ourDog.bark;
delete ourDog["color"]
//console.log("Bark of my dog is[delete] : ", ourDog.bark);
//console.log("Color of my dog is[delete] : ", ourDog["color"]);

/**** Using Objects for Look Up ****/
function phoneticLookUp(val){
    var result = "";
    var lookUp = {
        "alpha": "Anand",
        "bravo" : "Bhim",
        "Charilie" : "Chellam",
        "delta": "Deva",
        "echo": "Elumalai",
        "foxtrot": "Friend"
    }
    result = lookUp[val];
    return result;
}
console.log(phoneticLookUp("delta"));