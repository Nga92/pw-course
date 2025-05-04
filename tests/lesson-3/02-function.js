/*1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
Biết:
○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
○ Cân nặng tính theo kg
○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
○ BMI < 18.5: Thiếu cân
○ BMI < 25: Bình thường
○ BMI < 30: Thừa cân
○ BMI >= 30: Béo phì*/
function bMI(high, weight) {
    let bmi = weight / (high * high);
    let status = "s";
    if (bmi < 18.5) {
        status = "Thiếu cân";
    } else if (bmi < 25) {
        status = "Bình thường";
    } else if (bmi < 30) {
        status = "Thừa cân";
    } else {
        status = "Béo phì";
    }
    return status;
}
const s = bMI(1.58, 58);
console.log(s)
/*
2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
chuyển đổi.
Biết công thức chuyển đổi:

○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;
*/
function chuyenDoi(tem, type) {
    let temp;
    if (type == "C") {
        temp = tem * 9 / 5 + 32;
    }
    if (type == "F") {
        temp = (tem - 32) * 5 / 9;
    }
    return temp;
}
const temperature = chuyenDoi(30, "C");
console.log("2. Nhiệt độ đã chuyển đổi :" + temperature);
// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong
// một mảng số.
let numbers = [4, 7, 9, 24, 36];
function tinhTong(mang) {
    let tong = 0;
    for (let i = 0; i < mang.length; i++) {
        tong = tong + mang[i];
    }
    return tong;
}
const sum = tinhTong(numbers);

console.log("\n***** Kết quả bài 3 **********");
console.log(sum);
/*
4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
Biết:
○ Số 0, số 1 không phải số nguyên tố.
○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó
*/
let mang = [0, 1, 2, 4, 5, 7, 8, 23, 12, 45, 67];
/*5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
người dùng.*/
const users =
    [
        { name: "nga", email: "ngant@gmail.com" },
        { name: "anh", email: "anh@gmail.com" },
        { name: "Linh", email: "linh@gmail.com" }
    ];
function updateUser(users, nameCanTim, emailUpdate) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === nameCanTim) {
            users[i].email = emailUpdate;
            return true;
        }
    }
    return false;
}
const capnhat = updateUser(users, "nga", "ngant05@gmail.com");
console.log("\n***** Kết quả bài 5 **********");
if (capnhat) {
    console.log(users);
}
else {
    console.log("Không có thông tin nào được cập nhật");
}
/*6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
mảng các object.
Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85}
*/
let SinhVien = [
    { name: "Alex", score: 85 },
    { name: "Json", score: 79 },
    { name: "Lina", score: 90 },
    { name: "Anh", score: 100 },
    { name: "Linh", score: 60 },
    { name: "Tam", score: 67 },
]
function diemTB(SinhVien) {
    const n = SinhVien.length;
    let Tong = 0;
    let trungBinh = 0;
    for (let i = 0; i < n; i++) {
        Tong = Tong + SinhVien[i].score;
    }
    trungBinh = Tong / n;
    console.log("Tong :" + Tong);
    console.log("n  :" + n);
    return trungBinh;
}

console.log("\n***** Kết quả bài 6 **********");
console.log(" " + diemTB(SinhVien));
/*
7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”:
“product 1”, price: 100 }*/
let cart = [
    {
        name: "product 1",
        price: 300
    },
    {
        name: "product 2",
        price: 0
    },
    {
        name: "product 3",
        price: 200
    },
    {
        name: "product 4",
        price: 4000
    },
]
function areAllPricesValid(cart) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].price <= 0) {
            return false;
            break;
        }
    }
    return true;
}
console.log("\n***** Kết quả bài 7 **********");
console.log(areAllPricesValid(cart));
/*
8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
mở cửa từ 9 giờ sáng đến 9 giờ tối.*/
function isOpen(hour) {
    if (hour >= 9 && hour < 21) {
        console.log("Cửa hàng còn mở cửa");
    }
    else {
        console.log("Cửa hàng đã đóng cửa");
    }
}
console.log("\n***** Kết quả bài 8 **********");
isOpen(8);
isOpen(20);
/*9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.*/
function mucVe(age) {
    if (age <= 5) {
        console.log("Giá vé là miễn phí");
    } else if (age > 5 && age < 18) {
        console.log("Giá vé là 50k");
    } else if (age >= 18) {
        console.log("Giá vé là 100k");
    }
}

console.log("\n***** Kết quả bài 9 **********");
mucVe(5);
/*
10.Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
switch...case để xử lý.*/
function printMonth(month) {
    switch (month) {
        case 1:
            {
                console.log("Tháng 1");
                break;
            } case 2:
            {
                console.log("Tháng 2");
                break;
            } case 3:
            {
                console.log("Tháng 3");
                break;
            } case 4:
            {
                console.log("Tháng 4");
                break;
            } case 5:
            {
                console.log("Tháng 5");
                break;
            } case 6:
            {
                console.log("Tháng 6");
                break;
            } case 7:
            {
                console.log("Tháng 7");
                break;
            }
        case 8:
            {
                console.log("Tháng 8");
                break;
            }
        case 9:
            {
                console.log("Tháng 9");
                break;
            }
        case 10:
            {
                console.log("Tháng 10");
                break;
            }
        case 11:
            {
                console.log("Tháng 11");
                break;
            }
        case 12:
            {
                console.log("Tháng 12");
                break;
            }
        default:
            console.log("Tháng không hợp lệ");
    }
}
console.log("\n***** Kết quả bài 10 **********");
printMonth(5);
printMonth(13);
/*
11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5).*/
function taxonomy(score) {
    let type;
    if (score < 5) {
        type="yếu";
    } else if (score >= 5 && score < 6.5) {
        type="trung bình"; 
    } else if (score >= 6.5 && score < 8) {
        type="khá"; 
    }
    else {
        type="giỏi"; 
    }
    
    console.log(score + " là học sinh " +type);
}
console.log("\n***** Kết quả bài 11 **********");
taxonomy(3);
taxonomy(5);
taxonomy(7);
taxonomy(8);
/*
12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
(>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)*/
function weatherStatus(temp) {
    let status;
    if (temp < 20) {
        status = "lạnh";
    }
    else if (temp >= 20 && temp < 30) {
        status = "mát";
    } else {
        status = "nóng";
    }
    console.log("Nhiệt độ : " + temp + " là thời tiết " + status);
}
console.log("\n***** Kết quả bài 12 **********");
weatherStatus(19);
weatherStatus(20);
weatherStatus(30);
