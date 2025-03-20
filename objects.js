// 1. Object Creation
const person = {
    name: 'Vishal',
    age: 22,
    city: 'Mumbai',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  // Accessing properties
  console.log(person.name); // Vishal
  console.log(person['age']); // 22
  
  // 2. Adding and Updating properties
  person.country = 'India';
  person.age = 23;
  
  // 3. Deleting properties
  delete person.city;
  
  // 4. Object Methods
  person.greet(); // Hello, my name is Vishal
  
  // 5. Object.keys(), Object.values(), Object.entries()
  console.log(Object.keys(person)); // ['name', 'age', 'country', 'greet']
  console.log(Object.values(person)); // ['Vishal', 23, 'India', [Function: greet]]
  console.log(Object.entries(person)); // [['name', 'Vishal'], ['age', 23], ['country', 'India'], ['greet', [Function]]]
  
  // 6. Object Destructuring
  const { name, age } = person;
  console.log(name, age); // Vishal 23
  
  // 7. Object Spread Operator
  const newPerson = { ...person, profession: 'Coder' };
  console.log(newPerson);
  
  // 8. Object.freeze() and Object.seal()
  const obj = { x: 10 };
  Object.freeze(obj);
  obj.x = 20; // No effect
  console.log(obj.x); // 10
  
  const sealedObj = { y: 30 };
  Object.seal(sealedObj);
  sealedObj.y = 40; // Works
  sealedObj.z = 50; // No effect
  console.log(sealedObj);
  
  // 9. Object Inheritance (Prototypes)
  const animal = {
    species: 'Dog',
    speak() {
      console.log('Woof!');
    }
  };
  
  const pet = Object.create(animal);
  pet.name = 'Tommy';
  pet.speak(); // Woof!
  console.log(pet.species); // Dog
  
  // 10. Object.assign()
  const target = { a: 1 };
  const source = { b: 2, c: 3 };
  const merged = Object.assign(target, source);
  console.log(merged); // { a: 1, b: 2, c: 3 }
  
  // 11. Checking Properties
  console.log('name' in person); // true
  console.log(person.hasOwnProperty('age')); // true
  
  // 12. JSON Methods
  const jsonStr = JSON.stringify(person);
  console.log(jsonStr);
  
  const parsedObj = JSON.parse(jsonStr);
  console.log(parsedObj);
  
  // 13. Class Syntax (ES6)
  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    details() {
      console.log(`${this.brand} ${this.model}`);
    }
  }
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.details(); // Toyota Camry
  