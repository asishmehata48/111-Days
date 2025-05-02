// Arrays: Create, Access, Update
let fruits = ['apple', 'banana', 'mango', 'kiwi'];
console.log(fruits[0]); // Access: 'apple'

fruits[1] = 'orange'; // Update
console.log(fruits); // ['apple', 'orange', 'mango']

// Array Methods
fruits.push('grape');       // Add to end
fruits.pop();               // Remove from end
fruits.unshift('lemon');    // Add to start
fruits.shift();             // Remove from start
console.log(fruits); // Current state of array

// Looping over Arrays
// Using traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}:`, fruits[i]);
}

// Using for...of loop
for (let fruit of fruits) {
    console.log('Fruit:', fruit);
}

// 🔸 Objects: Key-Value Pairs
let person = {
    name: 'Asish',
    age: 20,
    isStudent: true
};

// Access values
console.log(person.name); // 'Aarav'

// Update values
person.age = 21;
console.log(person); // { name: 'Aarav', age: 21, isStudent: true }

// Add new key
person.country = 'Nepal';
console.log(person); // Updated object
