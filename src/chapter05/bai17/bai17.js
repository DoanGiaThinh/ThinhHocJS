console.log("bai 17")

const myClass = ["thinh", "hao", "toan", "dungct", 123]

// console.log(myClass, myClass.length)

// for (i = 0; i < myClass.length; i++) {
//     console.log("i = ", i, " and value = ", myClass[i])
// }
// console.log("=============")
// for (i = 1; i <= myClass.length; i++) {
//     console.log("i = ", i, " and value = ", myClass[i - 1])
// }

//for-each

myClass.forEach(function (value, index) {
    console.log(`value = ${value} index = ${index}`)
})


console.log("===================")
//for-each arrow function

myClass.forEach((value, index) => {
    console.log(`value = ${value} index = ${index}`)
})