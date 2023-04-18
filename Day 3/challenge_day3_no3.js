// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();

day < 10 ? (day = "0" + day) : day;
month < 10 ? (month = "0" + month) : month;
hour < 10 ? (hour = "0" + hour) : hour;
minute < 10 ? (minute = "0" + minute) : minute;

console.log(`${year}-${month}-${day} ${hour}:${minute}`);
