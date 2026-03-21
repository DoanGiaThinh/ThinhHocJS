console.log("bai 12")

function sumNumbers(a, b) {
    return a + b
}
// arrow function gan ten
const sum = (a, b) => {
    return a + b
}

console.log(sumNumbers(5, 10));
console.log(sum(5, 9));

// IIFE - Immediately Invoked Function Expression Chay ngay khi duoc dinh nghia
// (function () {
//     console.log("Chay ngay di")
// })();