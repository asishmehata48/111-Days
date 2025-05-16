// Prototype example using constructor function
export function prototypeDemo(outputElement) {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}`;
  };

  const alice = new Person("Sunny");
  const bob = new Person("Bobby");

  outputElement.textContent = [
    alice.sayHello(),
    bob.sayHello(),
    `Same function? ${alice.sayHello === bob.sayHello}`
  ].join('\n');
}

// Closure example with private variable counter
export function closureDemo(outputElement) {
  function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }

  const counter1 = makeCounter();
  const counter2 = makeCounter();

  const results = [];
  results.push(`Counter 1: ${counter1()}`);
  results.push(`Counter 1: ${counter1()}`);
  results.push(`Counter 2: ${counter2()}`);
  results.push(`Counter 1: ${counter1()}`);

  outputElement.textContent = results.join('\n');
}

// Event loop demo (logs to console)
export function eventLoopDemo() {
  console.log("Start");

  setTimeout(() => {
    console.log("Timeout callback");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise resolved");
  });

  console.log("End");
}