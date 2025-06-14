// Object basic rules 

const person = { 
    name: "hena",
    age : 10,
    gender: 'female',
    country: "BD"
}

Object.seal(person) //Not input new property
person.status = "not found"; 
Object.freeze(person) // not input add new values
person.age = 20;

// console.log(person)
// console.log(Object.keys(person)) //show all keys
// console.log(Object.values(person)) // show all values
// console.log(Object.entries(person)); // show all keys and values



const personn = {
    name: "Hena",
    age: 20,
    gender: "Femaile",
    country: "bd",
}


console.log(personn)

// For in loop
for (let key in personn){
    console.log(`key: ${key} value: ${personn[key]}`

           )
}