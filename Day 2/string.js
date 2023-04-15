let space = " ";
let firstName = "Awan";
let lastName = "Setyawan";
let country = "Indonesia";
let city = "Jakarta";
let language = "Javascript";
let job = "Programmer";
let age = 20;
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

//String Concatenation
let fullName = firstName + space + lastName;
//console.log(fullName);

// String Concate with Addition Operator

let personInfoOne = fullName + ". I am " + age + ". I live in " + country; // ES5 String addition
//console.log(personInfoOne);

//Long literal strings, use backslash character (\) at the end of each line to indicate the string will contunue on the next line

const paragraph =
  "My name is Awan. I live in Jakarta, Indonesia.\
 I am a programmer and i love coffee. I teach basic programming";

//console.log(paragraph);

/* \n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

// console.log("I hope everyone is doing great!. \nDo you?");
// console.log("Days\tTopics\tExercises");
// console.log("Day 1\t3\t5");
// console.log("Day 2\t3\t5");
// console.log("This is a backslash symbol (\\)");
// console.log("'Hello World' is the first thing of beginner ever says");
// console.log('"Hello World" is the first thing of beginner ever says');
// console.log("It isn't correct");

//Basically Fstring in Python, the synatx is ${variableName} but use backtick (`) instead of single quote (') or double quote (")

let a = 2;
let b = 3;

console.log(`The sum of ${a} and ${b} is ${a + b}`);

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}`; // ES6 String addition
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I love ${language}.`;

console.log(personInfoTwo);
console.log(personInfoThree);

console.log(`${a} is greater than ${b}: ${a > b}`);
