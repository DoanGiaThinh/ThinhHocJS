console.log("bai 13")

//keyword return

const sum = (a, b, c) => {
    console.log("truoc khi cong")
    if (typeof a !== "number") {
        console.log("a phai la mot so")
        return; //dung return de ket thuc ham, va khong tra ve gia tri nao (undefined)
    }
    console.log("sau khi cong") //khong bao gio duoc in ra
    return a + b + c; // dung return de tra ve ket qua, va ket thuc ham
}

console.log(sum("Thinh", 2, 3))
