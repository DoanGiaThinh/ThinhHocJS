console.log("bai 26")

const element = document.getElementById("myBtn")

const backelement = document.getElementById("backBtn")

const myTextElement = document.getElementById("helloUser")

console.log(element, myTextElement)

element.addEventListener("click", function () {
    console.log("you click my button")
    // myTextElement.innerText = "Bạn đã nhấn nút để đổi chữ"

    myTextElement.innerHTML = "<strong> Bạn đã nhấn để thay đổi nọi dung</strong>"
})

backelement.addEventListener("click", function () {
    myTextElement.innerText = "Chào bạn đến với chúng tôi"
})
