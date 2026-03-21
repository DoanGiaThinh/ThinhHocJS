console.log("bai 14")

//Global scope - pham vi toan cuc - kho phat hien bug
let globalVar = "I am a global variable";

function myFunction() {
    console.log(globalVar); // Truy cap duoc
}

myFunction();
console.log(globalVar); // Truy cap duoc

//Function scope - pham vi ham

function sayHi() {
    let name1 = "Thinh"; //bien name chi ton tai trong ham sayHi
    console.log("Hi " + name1);

    //Block scope - pham vi khoi lenh

    if (true) {
        let a = 10; //bien a chi ton tai trong khoi lenh if
        const y = 20; //bien y chi ton tai trong khoi lenh if
        console.log(a, y);
    }
    console.log(a); //loi, bien a khong ton tai o day
}
sayHi();
console.log(name1); //loi, bien name1 khong ton tai o day

