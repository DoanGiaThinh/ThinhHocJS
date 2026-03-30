console.log("Bai 36")
//Bước 1: nhập và lưu
const saveBtn = document.getElementById("saveBtn")
const inputElement = document.getElementById("inputField")
const tableTodo = document.getElementById("todoTable")

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const value = inputElement.value

        const arrayData = {
            id: Date.now(),
            name: value
        }
        const currentTodo = localStorage.getItem("ToDo")
        if (currentTodo) {
            const todoData = JSON.parse(currentTodo)

            todoData.push(arrayData)
            localStorage.setItem("ToDo", JSON.stringify(todoData))
        }
        else {
            localStorage.setItem("ToDo", JSON.stringify([arrayData]))
        }
        // console.log(arrayData)
        window.location.href = "bai36.html"
    }
    )
}

const generateTodoTable = () => {
    const dataTodoStr = localStorage.getItem("ToDo")
    if (dataTodoStr) {
        const listTodo = JSON.parse(dataTodoStr)
        const tbody = document.querySelector("#todoTable tbody")

        if (listTodo && listTodo.length) {
            listTodo.forEach((item, index) => {

                tbody.innerHTML += `
                            <tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td><button class="delete-btn" data-id="${item.id}">Xoá</button></td>
                            </tr>
        `
            });
        }
    }
}

generateTodoTable()

const deleteBtns = document.querySelectorAll(".delete-btn")
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn)
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id")
            handDeleteBtns(id)
        })
    })
}
const handDeleteBtns = (id) => {
    const dataTodoStr = localStorage.getItem("ToDo")
    if (dataTodoStr) {
        const listTodo = JSON.parse(dataTodoStr)

        const newTodo = listTodo.filter((item, index) => item.id + "" !== id)// +"" đổi qua kiểu string

        localStorage.setItem("ToDo", JSON.stringify(newTodo))
        window.location.reload()
    }
}