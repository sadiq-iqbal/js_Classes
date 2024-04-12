// variables in javascript
 num1  = 10;
 num2 = 20;
 num3 = num1 + num2
 console.log(num3)

 // vars declared without let , const and var keywords are declared in the global scope automatically , can casue some issues in the program
// best way to declare varible is to prperly use the let const and var keywords.
let name = 'sadiq iqbal';
const piValue = 3.14;
var date = 12;

console.log(name , piValue , date)
// console.log() it is an inbuilt method that logs data to the console in the browser and shell in case of a text editor.

// DATA TYPES 
// DATA TYPES  is the type that varibales can stores 
// there are two fundamental types of data types 
// primitive types and object types
// primitive types
    // number , strings , boolean ,symbols , undefined , null 

{/* <><><><><><><><><><><><>...........NUMBERS.............<><><><><><<><><><><><><><><> */}
let simpleNUmber = 10;
// we can store hex number too just put 0x in the begining of the number 
let hexNumber = 0xc
console.log(hexNumber);
// we can also store exponential numbers as well 

let expNumbers = 1.5e10
console.log(expNumbers);

// we there also and infinit number in js
let infinityNumber = 100/0;
console.log(infinityNumber);

// for simplicity and clarity we can also add "_" _" in between the zeros of numbers 

let numberWithDashes = 1_00_00_000
console.log(numberWithDashes);


// when we have some big numbers and we log them the get in power and some precision is also lost so to tackle this problem we use the bigInt numbers  a number is converted by adding a small n at the end of the number.

let bigNumber = 1235678923456782345456789n;
console.log(bigNumber); // now this number has been converted into a bigNumber and we can only operate on it if it is in with some other bigint number

// storing hex number 
let hexNum = 0xff;
console.log(hexNum)

// storing a binary number 
let bNumber = 0b01101
console.log(bNumber)

// storing an octal number 
let octNum = 0o23
console.log(octNum)

// storing an exponential number 
let expNumber = 20e9
console.log(expNumber)

// storing a large number 
// const largeNumber =1123456789123456781234567
// this will return the number in exponential format
const largeNumber =1123456789123456781234567n

// this will give the exact same number
console.log(largeNumber)

// we also have infinity and -infinty in js 
// there is a special data type called Nan , it is obtained when two absurd operation are performed

const numx = new Number(100)

console.log(numx)
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
console.table([Number.MAX_VALUE ,  Number.MIN_VALUE , Number.POSITIVE_INFINITY , Number.NEGATIVE_INFINITY])

const data = null 
const undef = undefined 
const emptyStr = ""
console.table([Number(data),Number(undef),Number(emptyStr)])
console.table([parseInt(data),parseInt(undef),parseInt(emptyStr)])

// <><><><><><>...........................................Number() vs parseInt()...............................................<><>><><><><>
console.log(parseInt('23nunzn'))
// as soon as it encounter the n it retruns only the numbers in Number format

console.log(parseInt(true))
// it return a Nan return 

console.log(Number(true))
// it returns a  o and 1 in case of a true

console.log(Number('23t1234'))
// it return a Nan if the string has a character 
console.log(Number('100000'))
{/* <><<><<><<><><><<><>><><>..............STRINGS...................><><><><><><><><><><><><><><<><><<><><><><><><><>< */}

// DATATYPES THAT STORES WORDS,SENTENCES AND CHARARCTERS 
let name2 = "sadiq";
let gender = 'M';
let location = 'pabbi nowshera pakistan';
console.log('my name is '+ name2 +" i am a " + gender + ' and i live in ' + location);

// speacial characters 
let info = "this car belongs to sadiq ,he says; \"i dont want to lend it \"";
// a signle slash before the quote will make it untouchable.

// /n will move you to the next line ....
let friends = "sadiq\npabbi\npakistan"
console.log(friends);

// /t create a tab

let a = 'this is a \t car'
console.log(a);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>conversion to boolean <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,
// truthy value``
// 'non empty string ' , anynumber other than 0 , empty array and empty object is truthy 
// Truthy values
if ("Hello") {
    console.log("Truthy"); // Output: Truthy
}

if (42) {
    console.log("Truthy"); // Output: Truthy
}

if ({}) {
    console.log("Truthy"); // Output: Truthy
}

if ([]) {
    console.log("Truthy"); // Output: Truthy
}

// Falsy values
if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}

if (0) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}

if (NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}

if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}

if (undefined) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}

if (false) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}


console.log( 'is a empty object a truthy value \t' ,Boolean({}))
console.log( );
