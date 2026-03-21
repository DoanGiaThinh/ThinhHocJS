console.log("bai 19")

//Filter

const ages = [10, 11, 27, 35, 6, 18, 20]

// const agesX2 = ages.map((item, index) => item * 2);

const agesX2 = ages.map((item, index) => {
    return item * 2
})

const agesThan18 = ages.filter((item, index) => {
    return item > 18 //true
})

// const agesThan18 = ages.filter((item, index) => item > 18)

console.log(ages)
console.log(agesX2)
console.log(agesThan18)