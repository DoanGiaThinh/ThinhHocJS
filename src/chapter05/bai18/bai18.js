console.log("bai 18")

//Map

const myScores = [10, 8, 7, 5];
//read data
// myScores.forEach((value, index) => {
//     console.log(`value = ${value} index = ${index}`)
// })

//modify data
const univercityScores = myScores.map((value, index) => {
    return value * 2;
});
// cach 2 ngan hon
const otherScores = myScores.map((value, index) => value * 2);


console.log(myScores)
console.log(univercityScores)
console.log(otherScores)