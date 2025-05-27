// if-else statement
let age = 20;

if (age < 13) {
  console.log("You're a child.");
} else if (age >= 13 && age < 18) {
  console.log("You're a teenager.");
} else {
  console.log("You're an adult.");
}

// switch-case statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}

// Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
