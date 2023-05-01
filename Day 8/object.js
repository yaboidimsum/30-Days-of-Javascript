//Object in JavaScript. properties and methods of an object in JavaScript are variables and functions inside the curly brackets.
//To create an empty object, we can use one of two options:
// const user = new Object(); // "object constructor" syntax
// const user = {};  // "object literal" syntax

//Object literal
const person = {
  firstName: "Awan",
  lastName: "Biru",
  age: 19,
  country: "Indonesia",
  city: "Jakarta",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};

console.log(person);

//Getting values from an object
//Dot notation, such as person.firstName
//Bracket notation, such as person["firstName"]

console.log(person.firstName); // Awan
console.log(person["lastName"]); // Biru

//Creating object methods
const person_2 = {
  firstName: "Awan",
  lastName: "Biru",
  age: 19,
  country: "Indonesia",
  city: "Jakarta",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
  // Method
  getFullName: () => {
    return `${person_2.firstName} ${person_2.lastName}`;
  },
};

console.log(person_2.getFullName()); // Awan Biru

//Setting new key for an object
//An object is a mutable data structure and we can modify the content of an object after it gets created.

//Setting a new keys in an object

person_2.nationality = "European";
person_2.country = "Latvia";
person_2.title = "Programmer";
person_2.skills.push("C++");
person_2.skills.push("Swift");

person_2.getPersonInfo = function () {
  //cannot use arrow function because arrow function does not have its own this
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};

console.log(person_2.getPersonInfo());

//Object Methods
//Object methods are actions that can be performed on objects.
//There are different methods to manipulate objects in JavaScript.
//We can use the following object methods to manipulate an object:
//Object.assign(): To copy an object

const person_3 = {
  firstName: "Awan",
  lastName: "Biru",
  age: 19,
  country: "Indonesia",
  city: "Jakarta",
  address: {
    street: "Kemanggisan",
    zipcode: "11480",
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
  // Method
  getFullName: () => {
    return `${person_3.firstName} ${person_3.lastName}`;
  },
};

const copyPerson = Object.assign({}, person_3);
console.log(copyPerson);
console.log(copyPerson.getFullName());

//Object.keys(): To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

//Object.values(): To get values of an object as an array
const values = Object.values(copyPerson);
console.log(values);
const age = copyPerson.age;
console.log(age);

//Object.entries(): To get the keys and values in an array
const entries = Object.entries(copyPerson);
console.log(entries);

//hasOwnProperty(): To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("firstName")); // true
console.log(copyPerson.hasOwnProperty("score")); // false
