// ================ VARIABLES: var, let, const ================

// 1. `var` (Legacy, function-scoped, avoid in modern JS)
var name = "Alice";
console.log("var (before re-declaration):", name); // "Alice"

var name = "Bob"; // Can be re-declared (problematic in large code)
console.log("var (after re-declaration):", name); // "Bob"

// 2. `let` (Modern, block-scoped, updatable)
let age = 25;
console.log("let (before update):", age); // 25

age = 26; // Can be updated
console.log("let (after update):", age); // 26

// let age = 27; // Error: Cannot re-declare in the same scope

// 3. `const` (Modern, block-scoped, immutable reference)
const PI = 3.14;
console.log("const (PI):", PI); // 3.14

// PI = 3.14159; // Error: Cannot reassign
// const PI = 3.14159; // Error: Cannot re-declare

// const works with objects/arrays (properties can change)
const user = { name: "John" };
user.name = "Jane"; // Allowed (object property change)
console.log("const (object mutation):", user); // { name: "Jane" }

// ================ DATA TYPES ================

// 1. String (Text)
let greeting = "Hello, world!";
console.log("String:", greeting, typeof greeting); // "string"

// 2. Number (Integer/Float)
let integer = 42;
let float = 3.14;
console.log("Number (integer):", integer, typeof integer); // "number"
console.log("Number (float):", float, typeof float); // "number"

// 3. Boolean (true/false)
let isActive = true;
let isAdmin = false;
console.log("Boolean (isActive):", isActive, typeof isActive); // "boolean"

// 4. Null (Intentional empty value)
let data = null;
console.log("Null:", data, typeof data); // "object" (historical JS bug!)

// 5. Undefined (Uninitialized variable)
let x;
console.log("Undefined:", x, typeof x); // "undefined"

// 6. Object (Key-value pairs, arrays, dates)
let person = { name: "Alice", age: 30 };
let colors = ["red", "green"];
let now = new Date();
console.log("Object (person):", person, typeof person); // "object"
console.log("Array (colors):", colors, typeof colors); // "object"
console.log("Date (now):", now, typeof now); // "object"

// 7. Symbol (Unique identifier)
let id = Symbol("uniqueID");
let anotherID = Symbol("uniqueID");
console.log("Symbol (id):", id, typeof id); // "symbol"
console.log("Symbol equality test:", id === anotherID); // false (unique)