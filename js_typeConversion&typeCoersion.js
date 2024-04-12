// typeof () is builtin function that returns a string that gives information about the type of the variable

let num = 123
let numberString = '12345'
let string = 'sadiq iqbal'
console.log('the type of num' ,typeof(num));
console.log(
    'the type of string ' , typeof(string)
);

// type conversion
// to convert a number into a string we have that 
console.log(typeof(String(num)))
// similarly if we have a string of numbers that string could be converted into a number
    const inNumber = Number(numberString)
    console.log(inNumber , typeof(numberString) , typeof(inNumber));

// if the string contains any character or symbol it automatically returns a the numbers before it enocounters any character 
let str2 = '121ex67'
const converted = parseInt(str2)
console.log(converted);

// NOTE THIS TYPE OF CONVERSION IS CALLED EXPLICIT CONVERSION CAUSE THE DEVELOPER DO IT MANUALLY 
//  but when the js engine does it for you than it is called type co-ersion 

let stri1 = '987';
let stri2 = '123';
let concate = stri1 + stri2
console.log(concate);
console.log(typeof concate);

// now adding a number to them 
let num1 = 5
let result = num1 + stri2
console.log(result ,typeof  result)

// truthy / false values 
// 0 is false 
// "" an empty string is false
// Null is flase
// undefined is false 
//Nan is false 

// anynumber other than zero is true .
// non-empty strings are true.

// methods For explicit type conversion 
Number()
// it converts any string of numbers in to a Number data types and we can than perform arithmatic operation on them.
// in case of a string of a characters it return NaN
let t = true
console.log(String(t));
String()
// it converts numbers/boolean into string type 

parseInt()
// this method does the same job as Number but in a little harder way .
// it simply converts the number from string into numbers and but as soon as it come across a character it drops off and return the parsed number

// https://chat.openai.com/share/e18b6984-f137-408c-817e-799a760cc3ce     visit the link for futher details
