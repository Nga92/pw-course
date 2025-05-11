# Lesson 4 JavaScript
## **1. Phạm vi của biến**
- var : global
- let : phạm vi {}
## **2. Condition if ... else , if ... else if, switch .. case **
## **3. Compare : ===, ==, !==, !=**
- Toán tử  == và != : so sánh lỏng lẻo  
 ví dụ :
 
  ```
         '5'==5             // true , vì '5' được chuyển thành số 5. 
          0 == false        // true, vì false được chuyển thành 0
          null == undefined // true, quy tắc đặc biệt
          ```
- Toán tử === và !== : so sánh nghiêm ngặt ( kiểu dữ liệu phải giống nhau)
   ví dụ: 
          ```
          '5'===5             // false
           0 === false        // false
           null === undefined // false
          '5'!==5             // true
          ```
## **4. Loop : for in, forEach,for of**
- For ..in : dùng để duyệt qua các thuộc tính của đối tượng - tên các key trong object
    Cú pháp:
     ```
     for (let key in object) {
        *// code xử lý với object[key]*
      } 
   ==> chú ý for .. in không nên dùng cho mảng.nếu dùng thì nó duyệt qua index của mảng 
- forEach   : dùng duyệt qua từng thành phần trong *mảng*
    Cú pháp: 
     ```
     array.forEach(function(currentValue, index, array) {
         *// code xử lý ở đây*
       });
- For .. of :là một vòng lặp dùng để duyệt qua các giá trị(value) của mảng *không dùng cho* object 
    Cú pháp:
    
      ``` for (let value of iterable) {
          *// code xử lý với value*
         }
 