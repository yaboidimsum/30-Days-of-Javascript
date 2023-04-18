let year = prompt("Enter a year");
console.log((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);