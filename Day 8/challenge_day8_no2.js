const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.
let maxSkills = 0;
let person = "";
for (const key in users) {
  if (users.hasOwnProperty(key)) {
    const element = users[key];
    if (element.skills.length > maxSkills) {
      maxSkills = element.skills.length;
      person = key;
    }
  }
}

console.log(person);
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

const countLoggedIn = () => {
  let userLoggedIn = 0;
  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      const element = users[key];
      if (element.isLoggedIn === true) {
        userLoggedIn++;
      }
    }
  }
  return userLoggedIn;
};

console.log(countLoggedIn());

// 3. Find people who are MERN stack developer from the users object

const findMernStack = () => {
  let mernStack = [];
  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      const element = users[key];
      if (
        element.skills.includes("MongoDB") &&
        element.skills.includes("Express") &&
        element.skills.includes("React") &&
        element.skills.includes("Node")
      ) {
        mernStack.push(key);
      }
    }
  }
  return mernStack;
};

console.log(findMernStack());

// 4. Set your name in the users object without modifying the original users object

const setMyName = () => {
  let newUsers = { ...users }; //spread operator for copying object
  newUsers["Awan"] = {
    email: "awan@gmail.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  };
  return newUsers;
};

console.log(setMyName());

// 5. Get all keys or properties of users object

const getAllKeys = Object.keys(users);
console.log(getAllKeys);

// 6. Get all the values of users object

const getAllValues = Object.values(users);
console.log(getAllValues);

// 7. Use the countries object to print a country name, capital, populations and languages.

const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
];

const printCountries = () => {
  for (elements of countries) {
    console.log(
      elements.name,
      elements.capital,
      elements.population,
      elements.languages
    );
  }
};

printCountries();
