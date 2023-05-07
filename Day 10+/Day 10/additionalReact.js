const person = {
  name: "peter",
  age: 20,
  country: "Turkey",
};

// const person2 = person;
const person2 = { ...person, name: "Jack" };

const names = ["peter", "john", "susan"];

//add anna to names
const names2 = [...names, "anna"];

console.log(names2);

const { name, age, country } = person;

//map and filter for react

let names_arr = ["anna", "susy", "bob"];

// names_arr.map((names) => {
//   return <h1>{names}</h1>;
// });

const name_filtered = names_arr.filter((name) => {
  return name !== "bob";
});

console.log(name_filtered);

//Async Await Fetch for React
