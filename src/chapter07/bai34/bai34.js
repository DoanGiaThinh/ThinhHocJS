console.log("Bai 34")

const greeting = (name, thinhdeptrai) => {
    console.log("Xin Chào: ", name)
    thinhdeptrai()
}

const hello = () => {
    console.log("học callback")
}

const hi = () => {
    console.log("học callback 2")
}

greeting("Gia Thịnh", hello)
greeting("Ă đù", hi)