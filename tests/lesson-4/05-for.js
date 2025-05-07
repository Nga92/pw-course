/*
1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
= {“name”: “Alex”, “age”: 10} thì in ra
name=Alex
age=10*/
console.log("*****Bài 1 ********");
let student = { name: "Anna", age: 30 };
for (const s in student) {
    console.log(s, student[s]);
}
/*
2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
30 (=10+20).
*/

console.log("*****Bài 2 ********");
student = { name: "Anna", age: 30, salary: 50 };
let sum = 0;
for (const d in student) {
    let value = student[d];
    if (typeof value === "number") {
        sum += value;
    }
}
console.log(sum);
/*
Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
[“name”, “age”]
*/

console.log("*****Bài 3 ********");
student = { name: "Anna", age: 30 };
let mang = [];
for (const d in student) {
    mang.push(d);
}
console.log(mang);