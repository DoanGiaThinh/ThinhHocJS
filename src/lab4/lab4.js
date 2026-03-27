console.log("Lab 4")
const username = "hoidanit@gmail.com"
const password = "123456"

const elementBtn = document.getElementById("loginBtn")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

elementBtn.addEventListener("click", () => {
    if (usernameInput.value === username && passwordInput.value === password) {
        alert("Đăng nhập thành công!")
        window.location.href = "success.html";
    }
    else {
        alert("Tài khoản hoặc mật khẩu sai!")
        usernameInput.style.borderColor = "red"
        passwordInput.style.borderColor = "red"
    }
})