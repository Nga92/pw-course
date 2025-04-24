const high=158;
// tính số lẻ của chiều cao
let soLe=high%100;
// cân nặng lý tưởng
let canNangLyTuong=(soLe*9)/10;
let canNangToiDa=soLe;
let canNangToiThieu=(soLe*8)/10;
console.log("Cân nặng lý tưởng : "+ canNangLyTuong)
console.log("Cân nặng tối đa : "+ canNangToiDa)
console.log("Cân nặng tối thiểu : "+ canNangToiThieu)
