//Arithmetics Ops
// let a = 2;
// let b = 5;


// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // Modulus
// console.log( a ** b); // Exponentiation


// Assignment Ops
let x = 10;

x += 5; // x = x + 5;(15)
x -= 3; // x = x - 3;(12)
x *= 2; // x = x * 2;(24)
x /= 4; // x = x / 4;(6)
x %= 4; // x = x % 4;(2)
x **=4; // x = x ** 4; (16)

// Comparison Ops
let a = 5;
let b = "5";


// console.log(a == b);// loose equality: true(compare values, not data type) // OR gate
// console.log(a === b);// strict equality: false(compare both values and data types)// AND Gate
// console.log(a != b);// not equal (loose)
// console.log(a !== b); // strict

//Logical ops
let isLoggedIn = true;
let hasPermission = false;

// console.log(isLoggedIn && hasPermission); // Logical AND: false (multiply)
// console.log(isLoggedIn || hasPermission); // Logical OR: true(add)
// console.log(!isLoggedIn);

// Short circuit evaluation
let name = " " || "Guest";
console.log(name);