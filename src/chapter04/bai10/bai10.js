console.log("bai 10")

// for (let i = 1; i < 10; i++) {
//     console.log(`I = ${i}`)
//     if (i === 7) { // 5 vs "5" number vs string
//         console.log(`i is the seven`)
//         break
//     }
// }

for (let i = 1; i < 10; i++) {

    if (i === 7) { // 5 vs "5" number vs string
        console.log(`i is the seven`)
        continue //tiếp tục vòng lặp, bỏ qua phần code phía dưới
    }
    console.log(`I = ${i}`)
}

// >> breack: dừng vòng lặp ngay lập tức, không thực hiện các lần lặp tiếp theo
// >> continue: bỏ qua phần code phía dưới, tiếp tục vòng lặp tiếp theo