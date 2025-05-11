const mang = [10, 5, 6, 34, 4, 7];
/*1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
1
2
3*/
console.log("*****Bài 1 ********")
mang.forEach((num) => {
    console.log(num);
});
/*
2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3
*/
console.log("*****Bài 2 ********")
let tong = 0;
let min = mang[0];
let max = mang[0];
mang.forEach((item) => {
    tong += item;
    if (max < item) {
        max = item;
    }
    if (min > item) {
        min = item;
    }
});
console.log(tong);
console.log(min);
console.log(max);
/*
3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]*/

console.log("*****Bài 3 ********")
let result = [];
mang.forEach((num) => {
    result.push(num * 2);
});
console.log(result);