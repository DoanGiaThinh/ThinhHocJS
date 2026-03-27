console.log("bai 27")

const myBtnElement = document.getElementById("changeColor")

const myText = document.getElementById("myText")

const backBtnElement = document.getElementById("backBtn")

myBtnElement.addEventListener("click", () => {
    console.log("Bạn đã chọn đổi màu")
    myText.style.color = "red";
    myText.style.backgroundColor = "green";
    // myText.style.background-color = "green"; // sai
    //Thêm class
    myText.classList.add("thinh", "hocjavascript")
})

backBtnElement.addEventListener("click", () => {
    myText.style.color = "black";
    myText.style.backgroundColor = "white";
    // myText.style.background-color = "green"; // sai
})
console.log(myBtnElement, myText, backBtnElement)