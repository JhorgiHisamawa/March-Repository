let person = {
    name : "Jhorgi Hisamawa",
    address : "Batu",
    status : false,
    age : 23
};

console.log(person)
console.log("Name :" + person.name)
console.log("Adress:" + person["adress"])

if (person.status == true) {
    console.log(person.name + " has been married!")
} else {
    console.log(person.name + " has not been married!")
}