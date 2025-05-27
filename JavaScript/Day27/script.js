// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    throw new Error("makeSound method must be implemented");
  }
}

// Dog class inherits from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Woof! 🐶";
  }
}

// Cat class inherits from Animal
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    return "Meow! 🐱";
  }
}

// Handle button clicks
document.getElementById("dogBtn").addEventListener("click", () => {
  const dog = new Dog("Buddy");
  document.getElementById("output").textContent = `${dog.name} says: ${dog.makeSound()}`;
});

document.getElementById("catBtn").addEventListener("click", () => {
  const cat = new Cat("Whiskers");
  document.getElementById("output").textContent = `${cat.name} says: ${cat.makeSound()}`;
});

document.getElementById("unknownBtn").addEventListener("click", () => {
  try {
    const animal = new Animal("Unknown");
    document.getElementById("output").textContent = animal.makeSound();
  } catch (error) {
    document.getElementById("output").textContent = `Error: ${error.message}`;
  }
});
