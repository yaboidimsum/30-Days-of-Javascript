// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

let base = prompt("Enter Base: ");
let height = prompt("Enter Height: ");
let area = 0.5 * base * height;

alert("The area of the triangle is " + area);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
let a = prompt("Enter side a: ");
let b = prompt("Enter side b: ");
let c = prompt("Enter side c: ");

alert(
  "The perimeter of the triangle is " +
    (parseInt(a) + parseInt(b) + parseInt(c))
);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Enter length: ");
let width = prompt("Enter width: ");

let area_rectangle = length * width;
let perimeter_rectangle = 2 * (parseInt(length) + parseInt(width));

alert("The area of the rectangle is " + area_rectangle);
alert("The perimeter of the rectangle is " + perimeter_rectangle);
// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = parseInt(prompt("Enter radius: "));
let area_circle = Math.PI * radius * radius;
let circumference_circle = 2 * Math.PI * radius;

alert("The area of the circle is " + area_circle);
alert("The circumference of the circle is " + circumference_circle);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

let slope = 2;
let x_intercept = 0;
let y_intercept = -2;
let x_answer = `${x_intercept}, ${(x_intercept - y_intercept) / slope}`;
let y_answer = `${slope * x_intercept + y_intercept}, 0`;

alert("The slope is " + slope);
alert("The x answer is " + x_answer);
alert("The y answer is " + y_answer);

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let y2 = prompt("Enter y2: ");
let y1 = prompt("Enter y1: ");
let x2 = prompt("Enter x2: ");
let x1 = prompt("Enter x1: ");

let slope2 = (y2 - y1) / (x2 - x1);
alert("The slope is " + slope2);

// 7. Compare the slope of above two questions.

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. //its +3

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
let pay = hours * rate;

alert("Your weekly earning is " + pay);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = prompt("Enter your name: ");

name.length > 7 ? alert("Your name is long") : alert("Your name is short");

// 11. Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let compare = firstName.length > lastName.length;

compare
  ? alert(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    )
  : alert(
      `Your first name, ${firstName} is shorter than your family name, ${lastName}`
    );

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

let myAge = prompt("Enter your age: ");
let yourAge = prompt("Enter your age: ");

let calc = myAge - yourAge;

alert(`I am ${calc} years older than you.`);

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
let date = new Date();
let year_birth = prompt("Enter birth year: ");

let calculation = date.getFullYear() - year_birth;

calculation >= 18
  ? alert(`You are ${calculation}. You are old enough to drive`)
  : alert(
      `You are ${calculation}. You will be allowed to drive after ${
        18 - calculation
      } years`
    );

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.

let years = prompt("Enter number of years you live: ");
let seconds = years * 365 * 24 * 60 * 60;

alert(`You lived ${seconds} seconds.`);

// 15. Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let date = new Date();

console.log(
  date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
);

console.log(
  date.getDate() +
    "-" +
    date.getMonth() +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
);

console.log(
  date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes()
);
