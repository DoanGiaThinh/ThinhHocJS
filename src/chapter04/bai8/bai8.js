console.log("bai 8")

//score A B C D F , gioi, kha, trung binh, yeu, kem

const score = 6

switch (true) { // Neu  switch (score) thi

    case (score >= 9 && score <= 10): // o day la true k the so sanh voi score duoc > nen switch (true)
        console.log("Gioi")
        break

    case (score >= 7 && score < 9):
        console.log("Kha")
        break

    case (score >= 5 && score < 7):
        console.log("Trung binh")
        break

    default:
        console.log("Yeu")
        break
}
