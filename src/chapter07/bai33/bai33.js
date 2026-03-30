console.log("Bai 33")

const doSomeThing = () => {
    const a = 10, b = 0

    if (b === 0) {
        throw new Error("Thực hiện chia cho 0")
    }
    return a / b
}

try {
    doSomeThing()
} catch (error) {
    console.log("Xảy ra lỗi", error)
} finally {
    console.log("Chạy cuối cùng")// dù có lỗi hay k có lỗi vẫn chạy
}