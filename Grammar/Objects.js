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
//console.log(phoneticLookUp("delta"));

/**** Check Object Property/Key ****/
function checkDogObj(checkProp){
    if (ourDog.hasOwnProperty(checkProp)) {
        return ourDog[checkProp];
    } else {
        return "Not Found"
    }
}
//console.log(checkDogObj("name"));

/****  Example for a Complex Object ****/

var myMusic = [
    { //This is an object inside array
        "artist":"Maestro",
        "title" : "Mouna Ragam",
        "release year": "1986",
        "formats":[ // This is an array inside object
            "Cassete",
            "CD",
            "tape"
        ]

    },
    // Another Object
    {
        "artist":"ARR",
        "title":"Roja",
        "release year": "1992",
        "formats":[
            "cassete",
            "CD",
            "tape",
            "mp3"
        ]
    }
]; // This is similar to JSON

/**** Accessing Nested Objects ****/

var myStorage = {
    "car": {
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
    },
    "outside":{
        "trunk":"jack"
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
//console.log("Content inside the car's glove box is : ",gloveBoxContents);

/**** Accessing Nested Arrays ****/

var myPlants = [
    {// This object is the first element of the array
        type:"flowers",
        list:[
            "rose",
            "jasmine",
            "lotus"
        ]
    },
    {// This object is the second element of the array
        type:"trees",
        list:[
            "Neem",
            "Coconut",
            "Tamarind"
        ]
    }
];
var secondTree = myPlants[1].list[1];
//console.log("Second Tree is : ",secondTree);

/**** Record Collection ****/
var musicCollection = {
    "A100":{
        "album":"Mouna Ragam",
        "artist":"Maestro",
        "tracks":[
            "Raja Raja Chozhan",
            "Mandram Vandha"
        ]
    },
    "A101":{
        "album": "Roja",
        "artist": "ARR",
        "tracks": [
            "Kathal Rojave",
            "Puthu Vellai Mazhai"
        ]
    },
    "A102": {
        "album": "Minnale",
        "artist": "Harris",
        "tracks": [
            "Azhagiya Theeye",
            "Venmathi Venmathiye"
        ]
    },
    "A103": {
        "album": "Baahubali",
        "artist": "Keeravaani",
        "tracks": [
            "Shiva shivaaya",
            "Manohari"
        ]
    },
    "A104": {
        "album": "3",
        "artist": "Anirudh",
        "tracks": [
            "Why this kolaveri",
            "Po nee po"
        ]
    }
}
var musicCollectionCopy = JSON.parse(JSON.stringify(musicCollection));


function updateRecords(id, prop, value){
    if (value === ""){
        delete musicCollection[id][prop];
    } else if (prop === "tracks"){
        musicCollection[id][prop] = musicCollection[id][prop] || [];
        musicCollection[id][prop].push(value);
    } else {
        musicCollection[id][prop] = value;
    }
    return JSON.stringify(musicCollection);
}
console.log(updateRecords("A101","tracks","Panivizhum Iravu"));