console.log("bai 21")

const person = {
    name: "Thinh",
    age: 23
}
//get data
console.log("person name: ", person.name)
console.log("person name: ", person["name"])

//set data
person.address = "CanTho"
person["language"] = "Vietnamese"
console.log("Address :", person)

//
delete person.name
console.log("After :", person)