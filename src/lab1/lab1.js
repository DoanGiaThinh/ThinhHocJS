console.log("Bai Thuc Hanh")
const fullName = "Doan Gia Thinh";
const birthYear = 2003;
const isStudent = true;

const today = new Date();
console.log(today);
const currentYear = today.getFullYear();
console.log(currentYear, typeof currentYear);

const age = currentYear - birthYear;

console.log(`
    Tên: ${fullName}
    Tuổi: ${age}
    Sinh viên: ${isStudent}
    `);
