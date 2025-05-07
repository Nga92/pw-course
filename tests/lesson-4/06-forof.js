/*
1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4.*/

console.log("*****Bài 1 ********");
const values = [1, 2, 3, 4, 3, 55, 23];
const target = 3;
let indexFirst = -1;
let indexLast = -1;
let index = 1;
for (const a of values) {
    if (a === target) {
        if (indexFirst === -1) {
            indexFirst = index;
        }
        indexLast = index;
    }
    index++;
}
if (indexFirst !== -1) {
    console.log(` Phần tử ${target} xuất hiện lần đầu tiên tại vị trí ${indexFirst}`);
    console.log(` Phần tử ${target} xuất hiện lần cuối cùng tại vị trí ${indexLast}`);
} else {
    console.log(` Phần tử ${target} không xuất hiện`);
}
/*
2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
“y”, “a”, “l”, “P”] => dua vao bai tap for*/
console.log("*****Bài 2 ********");
const chuoi = "Playwight";
let ketQua = [];
for (let i = chuoi.length - 1; i >= 0; i--) {
    ketQua.push(chuoi[i]);
}
console.log(ketQua);
/*
3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
*/
console.log("*****Bài 3 ********");
const arrayList = [1, 6, 3, 5, 7, 34, 6, 5, 3, 6];
let objectNew = {};
let keysWithValueOne = [];
for (const key of arrayList) {
    if (objectNew[key] == undefined) {
        objectNew[key] = 1;
    } else objectNew[key] += 1;
}
for (let key in objectNew) {
    if (objectNew[key] === 1) {
        keysWithValueOne.push(key);
    }
}

console.log(keysWithValueOne); 
