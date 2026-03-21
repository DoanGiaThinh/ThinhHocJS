console.log("bai 7")

//if / if else / else if

const age = 20

// if (age > 18) {
//     console.log("Người này đủ tuổi để lái xe")
// }
// if (age < 18) {
//     console.log("Người này chưa đủ tuổi để lái xe")
// }

// if else

if (age > 18) {
    console.log("Người này đủ tuổi để lái xe")
}
else {
    console.log("Người này chưa đủ tuổi để lái xe")
}
// if else if
//score > A B C D F, Gioi, Kha, Trung binh, Yeu

const score = 8

if (score >= 9) {
    console.log("Giỏi")
}

else if (score >= 6 && score < 9) {
    console.log("Khá")
}

else {
    console.log("Trung bình")
}