console.log("Bai 37")
//
const blogTable = document.querySelector("#blogs tbody")
const renderRow = (item) => {
    const newRow = document.createElement("tr")
    newRow.innerHTML += `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.author}</td>
        <td>${item.content}</td>
        <td><button class="delete-btn" data-id="${item.id}">Xoá</button></td>
    `
    blogTable.appendChild(newRow)
    const deleteBtns = document.querySelectorAll(".delete-btn")
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            // console.log(btn)
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id")
                fetch(`http://localhost:8000/blogs/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(response => response.json())
                const row = btn.closest('tr')
                row.remove()
            })
        })
    }
}
//
const blogData = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json()
    data.forEach((item, index) => renderRow(item));
}
//

const handleSubmitBtn = () => {
    const submitBtn = document.getElementById("submitBtn")
    const inputAuthor = document.getElementById("authorInput")
    const inputTitle = document.getElementById("titleInput")
    const inputContent = document.getElementById("contentInput")

    submitBtn.addEventListener("click", () => {
        const arrayData = {
            title: inputTitle.value,
            author: inputAuthor.value,
            content: inputContent.value
        }
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(arrayData),
        })
            .then(response => response.json())
            .then(severData => {
                console.log("thành công", severData);
                renderRow(severData);

                inputAuthor.value = "";
                inputTitle.value = "";
                inputContent.value = "";
            })
            .catch((error) => console.log("Lỗi:", error))

    })
}



const handleDeleteBtn = () => {
    const deleteBtns = document.querySelectorAll(".delete-btn")
    if (deleteBtns) {
        deleteBtns.forEach((btn, index) => {
            // console.log(btn)
            btn.addEventListener("click", () => {
                const id = btn.getAttribute("data-id")
                fetch(`http://localhost:8000/blogs/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }).then(response => response.json())
                const row = btn.closest('tr')
                row.remove()
            })
        })
    }

}



blogData().then(() => {
    handleDeleteBtn()
})
handleSubmitBtn()
// console.log(submitBtn)
// console.log(inputAuthor)
// console.log(inputContent)
// console.log(inputTitle)