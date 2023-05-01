// 1. Declare a function fullName and it print out your full name.

function fullName() {
  let firstname = "Miguel";
  let lastName = "Gonzalez";
  let fullName = firstname + " " + lastName;

  return fullName;
}

console.log(fullName());

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}

console.log(fullName2("Mohammad", "Ali"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(addNumbers(9, 3));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (length, width) => {
  let area = length * width;
  return area;
};

console.log(areaOfRectangle(10, 5));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return perimeter;
};

console.log(perimeterOfRectangle(10, 5));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume;
};

console.log(volumeOfRectPrism(10, 5, 2));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (n) => {
  let area = Math.PI * n * n;
  return area;
};

console.log(areaOfCircle(10));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumference = (n) => {
  let circumference = 2 * Math.PI * n;
  return circumference;
};

console.log(circumference(10));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass, volume) => {
  let density = mass / volume;
  return density;
};

console.log(density(10, 5));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => {
  let speed = distance / time;
  return speed;
};

console.log(speed(10, 5));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightFormula = (mass, gravity = 9.81) => {
  weight = mass * gravity;
  return weight;
};

console.log(weightFormula(10));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (celsius) => {
  let oF = (celsius * 9) / 5 + 32;
  return oF;
};

console.log(convertCelsiusToFahrenheit(10));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more

const bmi = (weight, height) => {
  let bmi = weight / (height * height);
  return bmi;
};

let bmi_value = bmi(80, 1.8);

if (bmi_value < 18.5) {
  console.log("Underweight");
} else if (bmi_value >= 18.5 && bmi_value <= 24.9) {
  console.log("Normal weight");
} else if (bmi_value >= 25 && bmi_value <= 29.9) {
  console.log("Overweight");
} else if (bmi_value >= 30) {
  console.log("Obese");
} else {
  console.log("Error");
}
// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
  if (month === "September" || month === "October" || month === "November") {
    return "Autumn";
  } else if (
    month === "December" ||
    month === "January" ||
    month === "February"
  ) {
    return "Winter";
  } else if (month === "March" || month === "April" || month === "May") {
    return "Spring";
  } else if (month === "June" || month === "July" || month === "August") {
    return "Summer";
  } else {
    return "Error";
  }
};

console.log(checkSeason("September"));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

const findMax = (...args) => {
  let maxIndex = 0;
  for (i = 0; i < args.length; i++) {
    if (maxIndex < args[i]) {
      maxIndex = args[i];
    }
  }
  return maxIndex;
};

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
