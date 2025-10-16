
//--------------------------------------
let name = "Nguyen Van A";
let age = 20;
let isStudent = true;

console.log("Tên:", name);
console.log("Tuổi:", age);
console.log("Là sinh viên:", isStudent);

//--------------------------------------
let a = 10;
let b = 3;
console.log(`a = ${a}, b = ${b}`);
console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", b !== 0 ? (a / b).toFixed(2) : "Không chia được cho 0");

//--------------------------------------
let strNum = "123";
let num = Number(strNum);
console.log(`Chuỗi "${strNum}" sau khi ép kiểu thành số:`, num);

//--------------------------------------
let radius = 5;
let perimeter = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
console.log(`Bán kính = ${radius}, Chu vi = ${perimeter.toFixed(2)}, Diện tích = ${area.toFixed(2)}`);

//--------------------------------------
let weight = 68; // kg
let height = 1.7; // m
let bmi = weight / (height * height);
let result = "";
if (bmi < 18.5) result = "Gầy";
else if (bmi < 25) result = "Bình thường";
else if (bmi < 30) result = "Thừa cân";
else result = "Béo phì";
console.log(`BMI = ${bmi.toFixed(2)} → ${result}`);

//--------------------------------------
let totalSeconds = 3665;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(`${totalSeconds}s = ${hours} giờ ${minutes} phút ${seconds} giây`);

//--------------------------------------
let celsius = 30;
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

//--------------------------------------
let vnd = 230000;
let rate = 23000; // 1 USD = 23,000 VND
let usd = vnd / rate;
console.log(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);

