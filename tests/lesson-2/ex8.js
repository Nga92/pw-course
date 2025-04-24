// a. In các giá trị cách nhau 4 đơn vị từ 1 đến 100.
let n = 1;
for (let i = 1; i <= 100; i++) {
    if (n - i === 0) {
        n = n + 4; console.log(+i)
    }
}