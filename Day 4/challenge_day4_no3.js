// 1. Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let month = prompt("Enter a month");

if (
  month.toLowerCase() == "january" ||
  month.toLowerCase() == "march" ||
  month.toLowerCase() == "may" ||
  month.toLowerCase() == "july" ||
  month.toLowerCase() == "august" ||
  month.toLowerCase() == "october" ||
  month.toLowerCase() == "december"
) {
  console.log(
    `${
      month.charAt(0).toUpperCase() + month.substr(1).toLowerCase()
    } has 31 days`
  );
} else if (
  month.toLowerCase() == "april" ||
  month.toLowerCase() == "june" ||
  month.toLowerCase() == "september" ||
  month.toLowerCase() == "november"
) {
  console.log(
    `${
      month.charAt(0).toUpperCase() + month.substr(1).toLowerCase()
    } has 30 days`
  );
} else if (month.toLowerCase() == "february") {
  console.log(
    `${
      month.charAt(0).toUpperCase() + month.substr(1).toLowerCase()
    } has 28 days`
  );
} else {
  console.log("Invalid month");
}

//2. Write a program which tells the number of days in a month, now consider leap year.

let year = prompt("Enter a year");
console.log((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
