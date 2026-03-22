console.log("bai 22")

const sv1 = {
    name: "Ban A",
    age: 22
}
const sv2 = {
    name: "Ban B",
    age: 22
}
const sv3 = {
    name: "Ban C",
    age: 22
}

const sinhVien = [sv1, sv2, sv3]

console.log("check sv: ", sinhVien)

// sinhVien.forEach((item, index) => {
//     console.log("index = ", index, "item = ", item.name)
// })

//for in duyet qua tat ca thuoc tinh

const person = {
    name: "thinh",
    age: 23,
    address: "Cantho"
}

// for (let key in person) {
//     console.log(key, person[key])
// }

//for of

for (let value of Object.entries(person)) {
    console.log(value)
}