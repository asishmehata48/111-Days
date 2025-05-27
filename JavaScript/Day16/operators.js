// 🔢 Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition: " + (a + b));        // 13
console.log("Subtraction: " + (a - b));     // 7
console.log("Multiplication: " + (a * b));  // 30
console.log("Division: " + (a / b));        // 3.333...
console.log("Modulus: " + (a % b));         // 1

// 🧮 Assignment Operators
let x = 5;
x += 2;  // x = x + 2
console.log("x after += 2: " + x); // 7

x -= 1;  // x = x - 1
console.log("x after -= 1: " + x); // 6

// 🔍 Comparison Operators
console.log("10 == '10':", 10 == '10');   // true
console.log("10 === '10':", 10 === '10'); // false
console.log("10 != 5:", 10 != 5);         // true
console.log("10 !== '10':", 10 !== '10'); // true
console.log("5 < 10:", 5 < 10);           // true
console.log("15 > 10:", 15 > 10);         // true

// 🧠 Logical Operators
let age = 20;
let hasID = true;

console.log("Can enter club (age > 18 && hasID):", age > 18 && hasID); // true
console.log("Is minor or no ID:", age < 18 || !hasID); // false

// 📥 Basic Input/Output
let name = prompt("What is your name?");
alert("Hello, " + name + "! Welcome to JavaScript.");
console.log("User entered name:", name);
