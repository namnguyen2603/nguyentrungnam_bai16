// # Bài 1: Hoán vị 2 số
// Input: Cho trước 2 số a, b

// Output: Thực hiện hoán vị 2 số không dùng biến trung gian

var a = 2;
var b = 5;

a = a + b; 
b = a - b; 
a = a - b;

console.log(a, b);



// # Bài 2: Thực hiện phép toán
// Viết chương trình tính toán biểu thức sau

// S = 10 + 20 + 5^10 / 2

console.log(10 + 20 + 5 ** 10 / 2);



// # Bài 3: Tìm số lớn nhất
// Học viên tìm hiểu về câu lệnh rẽ nhánh và giải bài tập sau

// Input:

// Cho trước 3 số a, b, c

// Output:

// Tìm số lớn nhất trong 3 số và hiển thị kết quả

var a = 20;
var b = 18;
var c = 20;
var biggest;

if (a >= b && a>= c) {
    biggest = a;
}
if (b >= a && b >= c) {
    biggest = b;
}
if (c >= a && c >= b) {
    biggest = c;
}
console.log(biggest);




// # Bài 4: Kiểm tra số cùng dấu
// Input:

// Cho trước 2 số a, b

// Output:

// Kiểm tra 2 số cùng dấu hay không và hiển thị kết quả ra màn hình


var a = -1;
var b = 2;
if (a * b < 0) {
    console.log(`Hai so khac dau`);
}
if (a * b > 0) {
    console.log(`Hai so cung dau`);
}




// # Bài 5: Sắp xếp 3 số
// Input:

// Cho trước 3 số a, b, c

// Output:

// Thực hiện đổi chỗ 3 số a, b, c sao cho 3 số có thứ tự tăng dần

var a = 30;
var b = 25;
var c = 25;


if (a >= b){
    a = a + b; 
    b = a - b; 
    a = a - b;
} 

if (a >= c){
    a = a + c; 
    c = a - c; 
    a = a - c;
} 

if (b >= c){
    b = b + c; 
    c = b - c; 
    b = b - c;
}


console.log(a, b, c);