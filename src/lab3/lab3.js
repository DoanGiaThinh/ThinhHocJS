console.log("Lab 3")

const product1 = {
    name: "T-shift",
    price: 200,
    inStock: true
}
const product2 = {
    name: "phone",
    price: 300,
    inStock: true
}
const product3 = {
    name: "laptop",
    price: 400,
    inStock: true
}
const product4 = {
    name: "trouser",
    price: 200,
    inStock: true
}
const product5 = {
    name: "hat",
    price: 10,
    inStock: true
}

const products = [product1, product2, product3, product4, product5]

//1. in tên sản phẩm đầu tiên

console.log("tên sản phẩm đầu tiên: ", products[0].name)
console.log(products)

//2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm
const products2 = [product1, {
    name: product2.name,
    price: 150,
    inStock: product2.inStock
}, product3, product4, product5]

console.log("Cập nhập sản phẩm 2 ", products2)
//3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm
console.log("=================")
//Cách 1
const product6 = {
    name: "san pham 6",
    price: 100,
    inStock: true
}
products.push(product6)
// Cách 2
// products.push({
//     name: "san pham 6",
//     price: 100,
//     inStock: true
// })

products.forEach((item, index) => {
    console.log("Sau khi thêm sản phẩm 6: ", item)
})

//4. Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm
console.log("+=============+")
products.pop()
console.log(products)

//5. Dùng ForEach in ra tên sản phẩm

products.forEach((item, index) => {
    console.log("tên sản phẩm :", index, item.name)
})

//6. Dùng map tạo mảng mới chứa tên sản phẩm.

const priceProducts = products.map((value, index) => {
    return value.price
})

console.log(priceProducts)
console.log("##############################")
//7. Dùng filter lấy hàng InStock true.
const inStockProducts = products.filter((item, index) => {
    return item.inStock === true
})
console.log(inStockProducts)

//Dùng For in duyệt qua thuộc tính của sản phẩm đầu tiên.
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
for (let key in products[0]) {
    console.log(key, products[0][key])
}