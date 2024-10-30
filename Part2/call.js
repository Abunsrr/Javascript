function introduce() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
const person1 = { 
  name: "Alice",
  age: "4"

 };
const person2 = { name: "Bob" };

// introduce.call(person1, 25);
// introduce.call(person2, 30);
//introduce(13)
introduce.call(person1)
introduce.call(person2, 4)

