// Basic Closure – Accessing Outer Scope Variables:
// How it works: An inner function can access variables from its outer function even after the outer function has finished executing.
// Example:

function greet(name) {
    return function () {
      console.log(`Hello, ${name}`);
    };
  }
  const sayHello = greet("Vishal");
  sayHello(); // Output: Hello, Vishal
  




//   Data Privacy – Using Closures for Private Variables:
// How it works: Variables inside a function are not accessible directly from outside, ensuring privacy.
// Example:
function counter() {
    let count = 0;
    return {
      increment: () => ++count,
      getCount: () => count,
    };
  }
  const c = counter();
  console.log(c.increment()); // 1
  console.log(c.getCount());  // 1

  
//   Function Factory – Returning Dynamic Functions:
// How it works: Functions can return other functions with pre-defined behavior using closures.
// Example:

function multiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  const double = multiplier(2);
  console.log(double(5)); // 10
  