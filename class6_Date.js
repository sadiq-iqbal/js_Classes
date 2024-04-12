// ++++++++++++++++Dates+++++++++++++++++++++++++++++++++++++++++//
    // epoch from which date is calculated is called an epoch and it starts from 1970

const date = new Date()
console.log(date);

console.log(date.toString());
// makes the date much more readable and inderstandable +it also gives the timezone
console.log(date.toDateString());
// only returns the date in the string format
console.log(date.toJSON());
console.log(date.toTimeString()); // returns only time and the time zone
// json formate2024-04-06T20:00:09.780Z it is useful when sending online , cause data is often shared in json format

console.log(date.toISOString());

// timestamps  
// we can pass a specific time in the date object 
const specificDate = new Date(2004 ,11,9,14,3,23)
const specificDate2 = new Date('2010 08 14')
console.log(specificDate2);

console.log(specificDate.toLocaleString());
const currentTime = Date.now()
const currentDateTimeAndMonth = new Date()
console.log(currentDateTimeAndMonth.getDate()
);
// console.log(currentTime.);