console.log("bai 16")

const colors = ["red", "blue", "black"]

const names = ["michael", "DungCt", "Thinh"]

console.log(names[2])
console.log(colors[0])
//update array

names[2] = "Thinh Dep Trai"

console.log(names)

// add push(phan tu, phan tu) cuoi mang/unshift(phan tu, phan tu) dau mang

names.push(123, false)
names.unshift(null)

console.log(names)

// delete pop(mac dinh xoa phan tu cuoi hoac co the hung phan tu)cuoi mang/shift(dau mang)

names.pop(3)
names.shift()

console.log(names)