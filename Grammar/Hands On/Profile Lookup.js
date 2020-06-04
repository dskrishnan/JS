console.log("Welcome to Javascript Profile Lookup Hands On")

var contacts = [
    {
        "First Name":"Mahi",
        "Last Name":"Dhoni",
        "Number": "007",
        "Likes":["CSK","Bikes","Butter Chicken","Video Games"]
    },
    {
        "First Name": "Rajini",
        "Last Name": "Kanth",
        "Number": "008",
        "Likes": ["Himalayas", "Babaji", "Himalayas", "Sprituality"]
    },
    {
        "First Name": "David",
        "Last Name": "Goggins",
        "Number": "001",
        "Likes": ["Gym", "Workout", "Hard", "Push Ups"]
    },
    {
        "First Name": "Elon",
        "Last Name": "Musk",
        "Number": "010",
        "Likes": ["Rockets", "Electric Cars", "AI", "Brain Mapping"]
    },
    {
        "First Name": "Steve",
        "Last Name": "Jobs",
        "Number": "000",
        "Likes": ["Apple", "iPod", "iPhone", "Mac"]
    },
]
function lookupProfile(name, prop){
    for (var i = 0; i< contacts.length; i++){
        if (contacts[i]["First Name"] === name) {
            return contacts[i][prop] || "No Such Property Available"
        }
    }
    return "No Such Contact Available"
}
console.log(lookupProfile("Mahi","best"));