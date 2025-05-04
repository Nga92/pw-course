/*
1. Tính tổng từ 1 đến 100.*/
function sum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log("Tổng :" + sum());
/*
In bảng cửu chương từ 2 đến 9.*/
for (let i = 2; i <= 9; i++) {
    console.log(`--- Bảng cửu chương ${i} ---`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
let mang = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
        mang.push(i);
    }
}
console.log(mang);
/* 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
user-1@example.com, user2@example.com, ..., user10@example.com).*/
const user = "nganguyen";
const domain = "@gmail.com";
for (let i = 1; i < 11; i++) {
    const email = `${user}${i}${domain}`;
    console.log(email);
}
/*
5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
{“month”: 2, “total”: 100}*/
let revenue = [
    {
        month: "1",
        total: 50
    },
    {
        month: "2",
        total: 100
    },
    {
        month: "3",
        total: 70
    },
    {
        month: "4",
        total: 80
    },
    {
        month: "5",
        total: 110
    },
    {
        month: "6",
        total: 90
    },
    {
        month: "7",
        total: 70
    },
    {
        month: "8",
        total: 160
    },
    {
        month: "9",
        total: 50
    },
    {
        month: "10",
        total: 120
    },
    {
        month: "11",
        total: 140
    },
    {
        month: "12",
        total: 115
    }
]
function totalRevenue(revenue) {
    let sum=0;
    for (let i = 0; i < revenue.length; i++) {
        sum = sum + revenue[i].total;
    }
    return sum;
}
console.log(totalRevenue(revenue));