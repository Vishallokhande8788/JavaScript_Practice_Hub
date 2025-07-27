//  sum of all numbers from 0 to 9

// sum = 0
// htmlFor (i=0 ; i < 10 ; i++){ c c
//     sum += i+1
//     console.log(sum)

// }

// //  write a program htmlFor factorial of 4 using htmlFor loop
// pu = 0;
// htmlFor (i = 0; i < 4; i++) {
//   pu = pu * i;
//   console.log(pu);
// }
// let obj = {
//   name: "ChakX",
//   age: 25,
//   gender: "Male",
//   hobbies: ["Coding", "Reading"],
// };

// htmlFor (let key in obj) {
//   console.log("marks of " + key + "  is + " + obj[key]);
// }

// function avrg(x, y) {
//   return (x + y) / 2;
// }

// console.log(avrg(10, 20));

// obj = {
//   harry: 90,
//   sally: 80,
//   bob: 70,
//   joe: 60,
// };

// htmlFor (let key in obj) {
//   if (obj[key] > 60) {
//     console.log(key + " is greater than 60");
//   }
// }
// CorrectNo = 15;
// let i
// while(i != CorrectNo){
//     i = prompt("enter a no")
//     console.log("Wrong no")
// }
// console.log("correct no ")

// function mean(a,b,c,d,e){
//     return(a+b+c+d+e)/5
// }
// console.log(mean(1,2,3,4,5))
// console.log(mean(10,20,30,40,50))

// let vl = "vishal lokhande";
// console.log(vl.length);

// practice calculator

function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    return num1 / num2;
  } else {
    return "Invalid operator!";
  }
}

let run = true;

while (run) {
  let num1 = parseFloat(prompt("Enter first number:"));
  let num2 = parseFloat(prompt("Enter second number:"));
  let operator = prompt("Enter operator (+, -, *, /):");

  let result = calculate(num1, num2, operator);
  alert("Result: " + result);

  let again = prompt("Do you want to calculate again? (yes/no):");
  if (again.toLowerCase() !== "yes") {
    run = false;
    alert("Calculator stopped.");
  }
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  {
    question:
      "Q1: What is the capital of India?\nA: Mumbai\nB: Delhi\nC: Kolkata\nD: Chennai",
    answer: "B",
  },
  {
    question:
      "Q2: Who is the CEO of Tesla?\nA: Bill Gates\nB: Elon Musk\nC: Jeff Bezos\nD: Sundar Pichai",
    answer: "B",
  },
  {
    question:
      "Q3: What does HTML stand htmlFor?\nA: Hyperlinks and Text Markup Language\nB: Home Tool Markup Language\nC: Hyper Text Markup Language\nD: Hyper Tool Multi Language",
    answer: "C",
  },
];

let score = 0;
let index = 0;

function askQuestion() {
  if (index < questions.length) {
    readline.question(
      `${questions[index].question}\nYour Answer: `,
      (userInput) => {
        if (userInput.toUpperCase() === questions[index].answer) {
          console.log("✅ Correct!\n");
          score += 10000;
        } else {
          console.log("❌ Wrong answer. Game Over!");
          console.log(`💰 You won ₹${score}`);
          readline.close();
          return;
        }
        index++;
        askQuestion();
      }
    );
  } else {
    console.log("🎉 Congratulations! You've answered all questions!");
    console.log(`💰 Total Winning Amount: ₹${score}`);
    readline.close();
  }
}

console.log("🎬 Welcome to 'Kaun Banega Crorepati' 💸");
askQuestion();
