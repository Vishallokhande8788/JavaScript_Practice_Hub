// Variables in JavaScript - All in One (Detailed Explanation)

// 1. Using 'var' (Function-scoped, can be re-declared and updated)
// - Scope: Function-level scope
// - Re-declaration: Allowed
// - Hoisting: Hoisted with 'undefined' value
// - Use case: Older codebases (not recommended for new code)
function varExample() {
    var x = 10; // Declaration
    console.log("var x:", x); // Outputs: 10

    if (true) {
        var x = 20; // Re-declared (overwrites the previous 'x')
        console.log("Inside block (var x):", x); // Outputs: 20
    }

    console.log("Outside block (var x):", x); // Outputs: 20 (no block scope)
}

varExample();

// 2. Using 'let' (Block-scoped, can be updated but not re-declared in the same scope)
// - Scope: Block-level scope
// - Re-declaration: Not allowed within the same scope
// - Hoisting: Hoisted but not initialized (Temporal Dead Zone)
// - Use case: Preferred for variables that need to change
function letExample() {
    let y = 30; // Declaration
    console.log("let y:", y); // Outputs: 30

    if (true) {
        let y = 40; // Block-scoped (different from outer 'y')
        console.log("Inside block (let y):", y); // Outputs: 40
    }

    console.log("Outside block (let y):", y); // Outputs: 30 (original value)
}

letExample();

// 3. Using 'const' (Block-scoped, cannot be re-declared or updated)
// - Scope: Block-level scope
// - Re-declaration: Not allowed
// - Update: Not allowed (Immutable binding)
// - Hoisting: Hoisted but not initialized (Temporal Dead Zone)
// - Use case: Preferred for constants that should not change
function constExample() {
    const z = 50; // Declaration
    console.log("const z:", z); // Outputs: 50

    if (true) {
        const z = 60; // Block-scoped (new variable within block)
        console.log("Inside block (const z):", z); // Outputs: 60
    }

    console.log("Outside block (const z):", z); // Outputs: 50

    // z = 70; // ERROR: Assignment to constant variable
}

constExample();

// 4. Global Variables
// - Variables declared outside any function are global.
// - 'var' creates a property on the global object (window in browsers).
// - 'let' and 'const' do NOT attach to the global object.
var globalVar = "I am global"; // Accessible everywhere
let globalLet = "I am also global"; // Accessible globally but not on window

console.log(window.globalVar); // Outputs: "I am global" (attached to window)
console.log(window.globalLet); // Outputs: undefined (not attached to window)

// 5. Hoisting Behavior
// - 'var' is hoisted and initialized as 'undefined'.
// - 'let' and 'const' are hoisted but NOT initialized (Temporal Dead Zone).

console.log(a); // Outputs: undefined (hoisted but not initialized)
var a = 100;

// console.log(b); // ERROR: Cannot access 'b' before initialization
let b = 200;

// console.log(c); // ERROR: Cannot access 'c' before initialization
const c = 300;

// 6. Dynamic Typing
// - JavaScript is dynamically typed, meaning variable types are not fixed.
// - A variable can hold different types of values at different times.

let dynamic = "I am a string";
console.log(typeof dynamic); // Outputs: string

dynamic = 123; // Changing type is allowed
console.log(typeof dynamic); // Outputs: number

// Summary:
// - Use 'let' for variables that need to change.
// - Use 'const' for variables that should not change.
// - Avoid 'var' in modern JavaScript development due to its scoping issues.
// - Be aware of hoisting and the temporal dead zone (TDZ) when working with 'let' and 'const'.
