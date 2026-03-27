console.log("Bai 25")

const element = document.getElementById("myBtn")

const handleClickBtn = () => {
    console.log("you click a button")
}

element.addEventListener("click", handleClickBtn) // không đóng mở ngoặc vì khi nào click thì mới thực thi, có () thì thực thi ngây lập tức

console.log(element)