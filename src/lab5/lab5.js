console.log("Lab 5")

const usersData = async () => {
    const res = await fetch("http://localhost:8000/users")
    const data = await res.json()

    data.forEach(tdata => {
        const tbody = document.querySelector("#users tbody")
        tbody.innerHTML += `
                            <tr>
                            <td>${tdata.id}</td>
                            <td>${tdata.name}</td>
                            <td>${tdata.email}</td>
                            </tr>
        `
    });
}

usersData()