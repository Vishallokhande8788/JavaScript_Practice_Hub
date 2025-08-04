// let num = Number(prompt("enter a no : "));

// if (num % 2 == 0 || num % 3 == 0) {
//   console.log("no divide by 2 or 3 ");
// } else {
//   console.log("no not divisible by 2 or 3 ");
// }
// console.log("hi");

// let age = 10;

// let a = age > 18 ? "you can drive" : "you can't drive ";
// console.log(a);

// for (let a = 0; a < 100; a++) {
//   console.log(a + 1);
// }

// let sum = 0;
// let a = 20;
// for (let i = 0; i < a; i++) {
//   sum += i + 1;
// }
// console.log(sum);

// let sum = 0;
// let no = 10;

// for (let i = 0; i < no; i++) {
//   sum += i + 1;
// }
// console.log(sum);

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// let sum = 0;
// let no = 6 ;
// for (let i = 0; i < no; i++) {
//   sum += i + 1;
// }
// console.log(sum);

// let obj = {
//   name: "vishal",
//   age: 20,
//   gender: " Male ",
//   hobby: "coding ",
// };

// for (let a in obj) {
//   console.log(" my info is " + obj[a]);
// // }
// var names = ["gugrat ", "maharashtra", "goa", "karnatak", "keral"];

// for (let b of names) {
//   console.log(b);
// }

// for (let c in names) {
//   console.log(c);
// }

// let one = {
//   name: "vishal",
//   age: 20,
//   gender: " male ",
// };

// for (let c in one) {
//   console.log(c + ":", one[c]);
// }

// let data = [
//   "vishal",
//   "vikass",
//   "aatish",
//   [("bala", "aniket")],
//   ["pravin", "akshay", ["bhagesh", "yash", "sushil"]],
// ];

// for (let first of data) {
//   for (let second of data) {
//     console.log(second);
//   }
//   console.log(first);
// }

// let data = [
//   "vishal",
//   "vikass",
//   "aatish",
//   ["bala", "aniket"],
//   ["pravin", "akshay", ["bhagesh", "yash", "sushil"]],
// ];

// // Recursive function to handle nested arrays
// function printAllElements(arr) {
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       printAllElements(item); // recursion for nested arrays
//     } else {
//       console.log(item); // print string
//     }
//   }
// }

// printAllElements(data);

// let data = [
//   "vishal",
//   "vikass",
//   "aatish",
//   ["bala", "aniket"],
//   ["pravin", "akshay", ["bhagesh", "yash", "sushil"]],
// ];

// for (let first of data) {
//   if (Array.isArray(first)) {
//     for (let second of first) {
//       if (Array.isArray(second)) {
//         for (let third of second) {
//           console.log(third);
//         }
//       } else {
//         console.log(second);
//       }
//     }
//   } else {
//     console.log(first);
//   }
// }

// let sum = 0;
// let  no = 10;

// for (let i = 0; i < no; i++) {
//   sum += i + 1;
// }

// console.log(sum);

// let obj = {
//   name: "vishla",
//   age: 22,
// };

// for (let key in obj) {
//   console.log(key + ":" + obj[key]);
// }

// let no = 10;
// let a = 0;
// while (a < 10) {
//   console.log(a++);
// }

// let no = 10;
// let a = 0;

// do {
//   console.log(a++);
// } while (a < no);

// function onePlusAverage(a, b) {
//   return 1 + (a + b) / 2;
// }

// console.log(onePlusAverage(2, 2));
// console.log(onePlusAverage(2, 3));

// let sum = (p, q) => {
//   return p + q;
// };
// console.log(sum(10, 20));
// let sdd = (a, b) => {
//   return a + b;
// };

// console.log(sdd(5, 4));
// let sun = (a, b) => {
//   return a - b;
// };
// console.log(sun(10, 50));

// let obj = {
//   vishal: 99,
//   pravin: 88,
//   akshay: 77,
//   yash: 66,
// };

// // for (let key in obj) {
// //   console.log("Marks of " + key + " is " + obj[key] + " out of 100");
// // }

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(i + ":" + obj[i]);
// }

// let obj = {
//   vishal: 99,
//   pravin: 88,
//   akshay: 77,
//   yash: 66,
// };

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(i + ":" + Object.keys(obj)[i] + " = " + obj[Object.keys(obj)[i]]);
// }

// let correctNo = 10;
// let UserInput;
// while (UserInput != correctNo) {
//   UserInput = Number(prompt("enter a correct no :"));
// }
// console.log("you Choose a Correct no ");

// function mean(a, b, c, d, e) {
//   return (a + b + c + d + e) / 2;
// }
// console.log(mean(10, 20, 30, 40, 50));

// let mean = (a, b, c, d, e) => {
//   return (a + b + c + d + e) / 5;
// };
// console.log(mean(10, 20, 30, 40, 50));
// let nam = "vishal";
// console.log(nam[2]);

// let fullName = "Vishal Maruti LOkhande ";

// console.log(`My full nmae is  ${fullName} `);

// let nam = "vishal";
// console.log(nam.slice(1, 4));

// let sentance = "please give a rs 1000";

// let rs = Number.parseInt(sentance.slice(16));

// console.log(rs);
// console.log(typeof rs);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num);
// console.log(num.length);
// console.log(num[0]);
// delete num[0];
// console.log(num.length);
// console.log(num);
// console.log(num.length);

// let numbers = [1, 2, 3, 55, 666, 122, 22, 11];

// console.log(numbers.sort());

// function decorder(a, b) {
//   return a - b;
// }

// console.log(numbers.reverse());

// let name = "vishal lokhande";

// console.log(name.split("").reverse().join(""));
// let num = [3, 5, 1, 2, 4];
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// let num = [4, 5, 1, 2, 3];

// num.forEach((ok) => {
//   console.log(ok * ok);
// });

// let num = [1, 2, 4, 5, 7, 8];

// num.forEach((ok) => {
//   console.log(ok + ok);
// });
// let hello = "Thane";
// let data = [1, 2, 3, 4, "vishal ", "ok", 77, hello];

// for (let a in data) {
//   console.log(a);
// }

// for (let b of data) {
//   console.log(b);
// }

// let arr = [1, 5, 8, 7, 9, 4, 6, 1, 3, 2];

// let a = arr.map((value) => {
//   console.log(value);
//   return value * 5;
// });
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let b = a.filter((data) => {
//   return data == "5";

// });
// console.log(b);

// let c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let d = c.reduce((e, f) => {
//   return e -  f;
// });
// console.log(d);

// let arr = [2, 4, 6, 8];
// let userInput = 10;

// let newArr = arr.push(userInput);
// console.log(arr);

// let a = [2, 4, 5];
// let b = 10;
// a.push(b);
// console.log(a);

// let arr = [2, 4, 5, 7];
// let userInput;

// while (userInput != 0) {
//   alert("please enter correct number : ");

//   userInput = Number(prompt("enter a no : "));
// }
// alert("thanks !!");

// let arr = [1, 20, 3, 40, 5, 60, 7, 80, 9];

// let filterArr = arr.filter((a) => {
//   return a % 10 == 0;
// });
// console.log(filterArr);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// let newArr = arr.map((b) => {
//   return b * b;
// });

// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.reduce((a, b) => {
//   return a + b;
// });
// console.log(newArr);

// let age = Number(prompt("emter your age :"));

// let canDrive=(age)=>{
//     return age>18 ? true:false;
// };
// if(canDrive(age)){
//         alert("yes you can drive : ")
// }
// else{
//     alert("you cannot drive: ")
// }
// let runagain=true;
// while(runagain){
//  let age = Number(prompt("enter a number : "));
//  if (age<0 || age>100){
//     alert("please enter a valid input ")
//  }

// else if (age>18 && age<100){
//     alert("yes you can drive")
//  }
//  else if(age<18 && age>0){
//     alert("you cannot drive")
//  }
// else{
//  alert("invalid input ")
// }
// runagain = confirm("do you want play again ")
// }
// let playGame = true;
// let systemInput = S ;
// while(playGame){
//     let UserInput = prompt("enter your input ( S , W , G ) : ")

// if (systemInput == S && UserInput == S){

// }
// }

// Snake Water Gun Game

// function getComputerChoice() {
//   let choices = ["snake", "water", "gun"];
//   const randomIndex = math.floor(math.random() * 3);
//   return choices[randomIndex];

// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let mmap = arr.map((a) => {
//   return a * 5;
// });
// console.log(mmap);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ffilter = arr.filter((a) => {
//   return a > 5;
// });
// console.log(ffilter);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let rreduce = arr.reduce((a, b) => {
//   return a + b;
// }, 15);
// console.log(rreduce);

// document.getElementsByTagName("li")[0].style.color = "red";
// document.getElementsByTagName("ul")[0].style.color = "orange";

// const jokes = [
//   "Why don't scientists trust atoms? Because they make up everything!",
//   "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
//   "Why did the scarecrow win an award? Because he was outstanding in his field!",
//   "Why don’t skeletons fight each other? They don’t have the guts.",
//   "I’m reading a book on anti-gravity. It’s impossible to put down!",
//   "Parallel lines have so much in common… it’s a shame they’ll never meet.",
//   "What do you call fake spaghetti? An impasta!",
//   "Why was the math book sad? Because it had too many problems.",
//   "How do you organize a space party? You planet!",
//   "What did one wall say to the other? I’ll meet you at the corner.",
// ];

// let randomNo = Math.floor(Math.random(jokes) * 10);

// let outputJokes = jokes[randomNo];

// console.log(outputJokes);

// document.getElementById("joke").innerText = outputJokes;

const vishnuAvatars = [
  "Matsya (Fish) – Saved the world from a great flood by rescuing the Vedas and sages.",
  "Kurma (Tortoise) – Supported Mount Mandara during the churning of the ocean (Samudra Manthan).",
  "Varaha (Boar) – Rescued Earth (Bhudevi) from the demon Hiranyaksha by lifting it on his tusks.",
  "Narasimha (Half-man, Half-lion) – Killed demon Hiranyakashipu to protect devotee Prahlad.",
  "Vamana (Dwarf Brahmin) – Took three giant steps to subdue King Bali and restore balance.",
  "Parashurama (Warrior with an axe) – Destroyed corrupt Kshatriya rulers to protect dharma.",
  "Rama (Prince of Ayodhya) – Defeated demon king Ravana and upheld righteousness.",
  "Krishna (Divine cowherd prince) – Guided Arjuna in Mahabharata and upheld dharma.",
  "Buddha (The Enlightened One) – Taught compassion and non-violence to reduce animal sacrifices.",
  "Kalki (Future Warrior) – Yet to appear; will end evil and restore justice in the future.",
];

// let randonNo = Math.floor(Math.random() * 10);

// console.log(randonNo);

// let randomData = vishnuAvatars[randonNo];

// console.log(randomData);

// document.getElementById("joke").innerText = randomData;

// let first = document.getElementById("joke");

// let a = first.getAttribute("class");
// console.log(a);

// console.log(first.hasAttribute("class"));

// console.log(first.setAttribute("class", "true sachin "));

// console.log(first.removeAttribute("class"));

// console.log(first.attributes);
// let a = document.getElementsByTagName("h6")[0];
// let newdiv = document.createElement("div");

// newdiv.innerHTML = "<h1> hi i am a new div </h1>";
// a.appendChild(newdiv);
// let div = document.getElementById("joke");
// let p = document.createElement("p");
// p.textContent = "Hello sirjii";
// div.appendChild(p);

// function hello(a) {
//   console.log(a);
//   return a;
// }

// hello("vishal");

// let setTmeout = setTimeout(() => hello("i am a set timeout"), 2000);
// let setTimeinterval = setInterval(() => hello(" i an a interval"), 2000);
// setTimeout(() => {
//   clearTimeout(setTmeout);
//   clearInterval(setTimeinterval);
//   console.log("time out !!");
// }, 6000);

// let a = document.getElementById("btn");
// a.addEventListener("click", () => {
//   console.log("button clicked");
// });

// let b = document.getElementById("one");
// b.addEventListener("keyup", () => {
//   console.log("event run key up");
// });

// let c = document.getElementById("myform");
// c.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("form submit successful");
// });

// let x = function (e) {
//   alert("run function one");
// };

// let y = function (e) {
//   alert("run function two");
// };

// let btn = document.getElementById("btn"); // ✅ make sure the button exists in HTML

// btn.addEventListener("click", x);
// btn.addEventListener("click", y);

// let a = prompt("enter a number:");

// if (a === 2) {
//   btn.removeEventListener("click", x); // ✅ correct spelling & case
// }
// let x = function (e) {
//   console.log(e); // Full event object
//   console.log(e.target); // Element that triggered the event

//   let z = e.target.value; // Only if it's an <input> or button with value
//   console.log("Value:", z);
// };

// let btn = document.getElementById("btn");
// btn.addEventListener("click", x);

// let a = document.getElementById("btn1").addEventListener("click", () => {
//   alert("click button 1");
// });

// let b = document.getElementById("btn2");
// b.addEventListener("click", () => {
//   alert("click on button 2");
// });

// let c = document.getElementById("btn3");
// c.addEventListener("mouseover", () => {
//   alert("mouse over");
// });
// function onBulb() {
//   let x = document.getElementById("onbulb");
//   let z = document.getElementById("bulb");
//   x.addEventListener("click", () => {
//     z.style.backgroundColor = "red";
//   });
// }

// function offBulb() {
//   let a = document.getElementById("offbulb");
//   let b = document.getElementById("bulb");

//   a.addEventListener("click", () => {
//     b.style.backgroundColor = "white";
//   });
// }

// const jokes = [
//   "Why don’t scientists trust atoms? Because they make up everything!",
//   "Did you hear about the claustrophobic astronaut? He just needed a little space.",
//   "Why don’t skeletons fight each other? They don’t have the guts.",
//   "I told my wife she was drawing her eyebrows too high. She looked surprised.",
//   "What’s orange and sounds like a parrot? A carrot.",
//   "How do you organize a space party? You planet.",
//   "Why did the scarecrow win an award? Because he was outstanding in his field!",
//   "What do you call fake spaghetti? An impasta!",
//   "How do you make a tissue dance? Put a little boogie in it!",
//   "Why did the math book look sad? Because it had too many problems.",
// ];

// let randonNo = Math.floor(Math.random() * 10);
// let randomJoke = jokes[randonNo];

// let o = (document.getElementById("joke").innerText = randomJoke);
// console.log(o);
// let momo = new Date(); // Full Date object

// // Extracting parts
// let year = momo.getFullYear();
// let month = momo.getMonth() + 1; // 0-based (0 = Jan, 11 = Dec)
// let date = momo.getDate();
// let day = momo.getDay(); // 0 = Sunday, 6 = Saturday
// let hours = momo.getHours();
// let minutes = momo.getMinutes();
// let seconds = momo.getSeconds();
// let time = momo.toLocaleTimeString(); // formatted time
// let fullDate = momo.toLocaleDateString(); // formatted date

// console.log("Year:", year);
// console.log("Month:", month);
// console.log("Date:", date);
// console.log("Day:", day);
// console.log("Hours:", hours);
// console.log("Minutes:", minutes);
// console.log("Seconds:", seconds);
// console.log("Time:", time);
// console.log("Full Date:", fullDate);

// // Show on screen
// document.getElementById("clock").innerHTML = `
//   <p><strong>Time:</strong> ${time}</p>
//   <p><strong>Date:</strong> ${fullDate}</p>
// `;

// console.log("start");

// setTimeout(function () {
//   console.log("middle");
// }, 3000);

// console.log("end");
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// function ok(){
//   console.log("ookkk")
// }

// greet("pravin", sayBye);

// function myName(ename, callback) {
//   console.log("myName is ");
//   console.log(ename + callback);
//   console.log(ename + "vishal");
//   console.log("hello" + ename);
//   callback();
// }

// function midName() {
//   console.log("Maruti");
// }

// myName("vishal", midName);
// function school(school, callback) {
//   console.log("century " + callback);
//   console.log(school + "rayon");
//   console.log(school, callback);
//   callback();
// }
// function bus() {
//   console.log(" santosh ");
// }

// school(" Maharashtra ", bus);
// function myName(ename, callback) {
//   console.log("Mera naam hai:");
//   console.log(ename);
//   callback(); // ye callback ko call kar raha hai
// }

// function midName() {
//   console.log("Maruti"); // ye callback function ka kaam hai
// }

// myName("Vishal Lokhande", midName);

// function fullName(first, callback1) {
//   console.log("First Name: " + first);
//   callback1(); // Call second part
// }

// function middleName(callback2) {
//   console.log("Middle Name: Maruti");
//   callback2(); // Call third part
// }

// function lastName() {
//   console.log("Last Name: Lokhande");
// }

// // Call the functions in chain using callbacks
// fullName("Vishal", function () {
//   middleName(function () {
//     lastName();
//   });
// });

// function fullName(ename, callback1) {
//   console.log("my name is : " + ename);
//   callback1();
// }

// function middleName(callback2) {
//   console.log("middle name is : " + "Maruti");
//   callback2();
// }

// function lastName() {
//   console.log("middle name is : " + "Lokhande");
// }

// fullName("vishal", function () {
//   middleName(function () {
//     lastName();
//   });
// });

// function hii(a, callback) {
//   console.log("hello " + a);
//   callback();
// }

// function ok() {
//   console.log("okk");
// }

// hii("vishal", ok);

// function hi(a, callback) {
//   console.log("vishal" + a);
//   callback();
// }
// function ok() {
//   console.log("sirrr");
// }

// hi("lokhande", ok);

// let promise = new promise(function (resolve, reject) {
//   console.log("hellow i am a promise ");
//   const sucess = true;

//   if (sucess) {
//     resolve("operation sucess");
//   } else {
//     reject("operation faiill");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// let promise = new Promise(function (resolve, reject) {
//   console.log("Hello, I am a promise");
//   setTimeout(function () {
//     console.log("i am settimeout");
//   }, 2000);

//   const success = true;

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
// let promise = new Promise(function (resolve, reject) {
//   console.log("Hello, I am a promise");

//   const success = true;

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// let p = new Promise((resolve, reject) => {
//   console.log("promise is pending ");
//   setTimeout(() => {
//     console.log("i am promise ");

//     resolve(true);
//   }, 2000);
// });

// console.log(p);

// let p2 = new Promise((resolve, reject) => {
//   console.log("promise is pending ");
//   setTimeout(() => {
//     console.log("i am promise ");

//     reject(new Error(" i am an error "));
//   }, 2000);
// });

// console.log(p2);
// console.log("hiii");
// p.then((value) => {
//   console.log(value);
// });

// p2.catch((error) => {
//   console.log("some error occures in p2 ");
// });
// console.log("hii 2 ");

// p2.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// // );
// function add(a, b) {
//       console.log("i am add function ");
//       console.log(a + b);
//       return a + b;
//     }
// let promise = new Promise((resolve, reject) => {
//   let a = 8;
//   if (a > 10) {
//     resolve("resolve");
//     console.log("i am resolve ");
//   } else {
//     reject("reject");
//     console.log("i am reject  ");
//   }
// });
// promise
// .then(msg)=>{
//   c
// }

// function add(a, b) {
//   console.log("I am add function");
//   console.log(a + b);
//   return promise.resolve(a + b);
// }

// let promise = new Promise((resolve, reject) => {
//   let a = 8;
//   if ((a = 10)) {
//     console.log("I am resolve");
//     resolve("resolved");
//   } else {
//     console.log("I am reject");
//     reject("rejected");
//   }
// });

// promise
//   .then((msg) => {
//     console.log(msg);
//     return add(4, 6);
//   })
//   .then((ok) => {
//     console.log("i am 2 . then " + ok);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// First function returns a Promise
// function step1() {
//   console.log("step1");
//   return Promise.resolve("Step 1 done");
// }

// // Second function returns a Promise
// function step2(msg) {
//   console.log("step2");
//   return Promise.resolve(msg + " → Step 2 done");
// }

// // Third function returns a Promise
// function step3(msg) {
//   console.log("step3");
//   return Promise.resolve(msg + " → Step 3 done");
// }

// // Promise chaining
// step1()
//   .then(step2)
//   .then(step3)
//   .then((finalMsg) => {
//     console.log("Final Output:", finalMsg);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// function one() {
//   console.log(" i am one ");
//   return Promise.resolve("promise 1 resolve ");
// }

// function two() {
//   console.log("i am two");
//   return Promise.resolve("promise 2 resolve ");
// }

// function three() {
//   console.log("i am three");
//   return Promise.resolve("promise 3 resolve ");
// }
// function four() {
//   console.log("i am 4");
//   return Promise.resolve("i am 4 resolve ");
// }
// one()
//   .then(two)
//   .then(three)
//   .then(four)
//   .then((final) => {
//     console.log("i am final ", final);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Done!"), 3000);
//   });
// }

// async function run() {
//   let result = await delay();
//   console.log(result);
//   console.log("hii"); // prints: Done!
// }
// run();

// function getPizza() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Cheese Burst Pizza 🍕");
//     }, 2000); // waits 2 seconds
//   });
// }

// async function orderPizza() {
//   console.log("i am before await ");
//   let pizza = await getPizza(); // waits until pizza is ready
//   console.log("Got my pizza:", pizza);
// }

// orderPizza();
// function bookpizza() {
//   console.log("your pizza is booked");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("pizza making process done ");
//     }, 5000);
//   });
// }

// async function orderPizza() {
//   console.log("i am before await");
//   let pizza = await bookpizza();
//   console.log("your piza get places succesfully ", pizza);
// }
// orderPizza();
// console.log(Error);

// try {
//   let result = 10 / 2;
//   console.log("Result:", result);

//   let name = user.name; // ❌ Error: user is not defined
// } catch (err) {
//   console.log(" Error caught:", err.message);
// }

// let harry;

// console.log(harry);
// try {
//   console.log(ok);
//   console.log("try");
// } catch (e) {
//   console.log(e);
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.stack);
// }
// const f = () => {
//   try {
//     let a = 0;
//     console.log("program success");
//     return;
//   } catch (err) {
//     console.log("this is an error");
//     console.log(p); // This line won't run in this case
//   } finally {
//     console.log("i am a good boy");
//   }
// };

// f();
// console.log("end");

// Create a Promise that rejects after 2 seconds
// let p = new Promise((_, reject) => {
//   setTimeout(() => {
//     reject(new Error("please this is not acceptable"));
//   }, 2000);
// });

// // Async function to handle the rejected Promise
// let a = async () => {
//   try {
//     let c = await p;
//     console.log(c);
//   } catch (err) {
//     console.log("this error has been handled");
//     console.log(err.message); // optional: log error message
//   }
// };

// a();
// let promise = new Promise((resolve, reject) => {
//   console.log("hi I am resolve");
//   resolve("Success!");
//   reject("fail");
// });

// promise.then((msg) => console.log(msg)).catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));

// let b; // Declare `b` outside to use later

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     b = data;
//     console.log(b);
//     let z;
//     for (let a of b) {
//       console.log(a.userId);
//       console.log(a.title);

//       z += `<h3>${a.title}</h3>`;
//     }
//     document.getElementById("api").innerHTML = z;
//   })
//   .catch((error) => console.log("error", error));

// ========== 🍪 COOKIES ==========
// // Set a cookie (expires in future)
// document.cookie =
//   "username=Vishal; expires=Fri, 31 Dec 2030 23:59:59 UTC; path=/";

// // Read all cookies
// console.log("All Cookies:", document.cookie);

// // ========== 📦 LOCAL STORAGE ==========

// // Set items in localStorage
// localStorage.setItem("name", "Vishal");
// localStorage.setItem("role", "Frontend Dev");

// // Get item from localStorage
// console.log("localStorage - name:", localStorage.getItem("name"));

// // Remove a specific item
// localStorage.removeItem("role");

// // Get number of stored items
// console.log("localStorage length:", localStorage.length);

// // Get key name by index
// console.log("localStorage key at index 0:", localStorage.key(0));

// // Optional: Clear all localStorage data
// // localStorage.clear();

// // ========== 🧳 SESSION STORAGE ==========

// // Set item in sessionStorage
// sessionStorage.setItem("session_id", "ABC123");

// // Get item
// console.log(
//   "sessionStorage - session_id:",
//   sessionStorage.getItem("session_id")
// );

// // Remove item
// sessionStorage.removeItem("session_id");

// // Optional: Clear all sessionStorage data
// // sessionStorage.clear();

// // ========== 🔔 STORAGE EVENT (Works across tabs only for localStorage) ==========

// window.addEventListener("storage", function (event) {
//   console.log("🔄 Storage Event Fired!");
//   console.log("Key Changed:", event.key);
//   console.log("Old Value:", event.oldValue);
//   console.log("New Value:", event.newValue);
//   console.log(
//     "Storage Area:",
//     event.storageArea === localStorage ? "localStorage" : "sessionStorage"
//   );
// });

// // 🔁 Function to trigger a change in localStorage (use in console or via button)
// function changeLocalStorageValue() {
//   const oldVal = localStorage.getItem("name");
//   const newVal = oldVal === "Vishal" ? "Lokhande" : "Vishal";
//   localStorage.setItem("name", newVal); // Triggers event in other tab
// }

// // Example: Trigger after 5 seconds (optional)
// // setTimeout(changeLocalStorageValue, 5000);

// const arr = ["himanshu", "anshu"];

// let letters = "abcdefghijklmnopqrstuvwxyz";
// let a = letters.split("");
// console.log(a);

// let b = arr.split("");
// console.log(b);
// for (let i of arr) {
//   let = arr.split("");

//   console.log(i);
// }
// let arr = "vishal Lokhande";

// let b = arr.split("").reverse("").join("");
// console.log(b);

// let a = "viss";
// console.log(a);

// var b = "lokk";
// console.log(b);

const id = Symbol("12345");
const id2 = Symbol("12345");

console.log(id);
console.log(id2);

console.log(id == id2);

let id3 = "devloper";
id3.split("");
console.log(id3);
