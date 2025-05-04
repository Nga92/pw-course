// 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
// year=2021. Sau đó in ra năm sản xuất của xe.
let car={
    make :"Toyota",
    model :"Corolla",
    year :"2021"
};
console.log("1. Năm sản xuất xe :" +car.year);
// 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
//     tính street, city, country). In ra tên đường của người này.
let person={
    name:"Nga",
 address:{
    street:"Thanh trì",
    city:"Hà Nội",
    country:"Việt Nam"
 }
};
console.log("2. Tên đường :"+person.address.street);
/*3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
 Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
  object với 2 thuộc tính kiểu number: math và english
  */
 let student={
    name:"Nga",
    grades:{
        math:9,
        english:10
    }
 };
 const mathS= student["grades"]["math"];
 console.log("3. Điểm toán :"+mathS);
 /*
 4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
*/
let product={
    tivi : 1000000,
    tuLanh:5000000,
    loViSong:2000000,
};
for(let productName in product){
    const price=product[productName];
    console.log(`Sản phẩm ${productName} có giá : ${price}`);
}
/*
5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
volume, brightness. Thay đổi volume và in ra object mới.
*/
let settings={
    volume : '5',
    brightness :'TB'
};

// settings.volume="10";
console.log(settings);
// 6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike={
    make :'Yamaha',
    model:'N3-4'
};
bike.color="Red";
console.log(bike);
// 7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
// object này
let employee={
    name :"Anh",
    age :"27"
};
delete employee.age;
console.log(employee);
/*
8. Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
*/
const school={
    classA:["An", "Bình", "Châu"],
    classB:["Đào", "Hương", "Giang"]
};
