// a self contained block of code that perform any specific task.
// it avoid repeatation of the code and make the code less reduntant 

// defining finction in js

function fun(){
    // scope of the function 
    // function either perform a task or return something 
    console.log(' i am a function ')
    // in this case it is performing a task

}

// to use a function just call the function by typing function name and putting paranthesis after it 

fun()

// when you don't use paranthesis you are actually dealing with the reference of the function 

console.log(fun())
// when you don't return anything from a function it returns undefined by deafault. 
// parameters of a functoin 

function sum(param1 , param2){
    return param1 + param2
    // any code after the return statement is ignored and is not reachable by the compiler .
    console.log(' it can not be executed ')  // Unreachable code detected.ts(7027)

}   


// we have to store the value in a variable that is being returned from a function.
// let sum = sum(30 , 40) // it wont work cause the name of the function and the name of the variable is the same
sum(30 , 40)
let addition = sum(30 ,40)
console.log(addition);

// if no parameter or a single parameter is not passed the function will return a Nan or an undefined 
// plus if we pass values of different types we might get undesireable result , so basically typeScript solve this issue for example 

let unExpectedOutcome = sum(20 , "40")
console.log(unExpectedOutcome); // returns a 2024 in the string types


//////// functions in javaScript are treated as first class citizen, they can be passed as argument to to other function we can set properties on functions and they are often refered as object tyes

// passing function as argument to another function 
function sayHello(){
    return 'Hello world'
}
    function Greet(callBack){
        return callBack()
    }

    let g = Greet(sayHello)
    console.log(g);


// we can set properties on functions 
function objFun(){
    console.log('setting property on this funciton')
}
objFun.info = 'sadiq'
console.log(objFun.info)

// passing argument to a Function.
//1 passing numbers,string,boolean to a function.
// when you are passing specific types of argument to a function then check their type is necessary in case you are not using typeScript.

function add(num1 , num2){
    if(typeof num1 === 'number' && typeof num2 ==="number"){
        return num1 + num2
    }
    return 'conflict of data types'
}
console.log(add(20 , '30')); // output , Conflict of data types...........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// checking for undefined 
function sayMyName(name){
    if(name)
    return `your name is ${name}`;

    return 'undefined name is not processed'
}

console.log(sayMyName());

// passing a function 

function one(){
    console.log('hello world');
}
function two(callBack){
    callBack()
}

two(one) // just pass the function reference and not the function call.

// passing multiple arguments to function

function IProcess(...parms ){
    // (...)  this is called rest operator and anything passed to the params will be added to an array
    for (let items of parms){
        console.log(items);
    }
}
IProcess(10,20,30,40,50,60,70,80)
// another example

function returnArray(...params){
    return params
}
console.log(returnArray(12,13,14,15,16,17,18,19,20));

// passing arrays to a function
    function processArray(array){
        if(Array.isArray(array)){
            for(let eachItem of array){
                console.log(eachItem);
            }
        }
        else{
            console.log('this is not an array');
        }
        
    }
    processArray([1,2,3,4,5]) 
    processArray(10) // this is not an array

// returning objects from function is the only best way to return multiple items from a single function 

// function calculate(num1, num2 ){  //operation ,...Params
//     // let sumInitial = 0;
//     // let initailproduct = 1;
//     // let sum = ()=>{
//     //     for (let items of Params){
//     //         sumInitial +=Number(items)
//     //     }
//     //     return sumInitial
//     // let product = ()=>{
//     //     for(let items of Params){
//     //         initailproduct *=Number(items)
//     //     }
//     //     return initailproduct
//     // }
    
//     // return {
//     //     initailproduct ,  sumInitial
//     // }
//     return {
//         sum:num1 + num2,
//         product : num1 * num2
//     }
// }

// let {sum : a} = calculate( 10 , 20)
// console.log(a(12 ,23));


////////////////////////////////////////////////
// there are four ways of writing function in js
    function simpleOrNormalMethod(){
        console.log(this);
    }

// function expression /assigning a function a variable
    let foo = function (){
        console.log('my name is foo')
        console.log(this);
    }

// arrow function in javascript 
// 1st way  
    let firstWay = (arg1) => arg + 1 
// implicit return. // no curly braces for a single statement
    let firstWay2 = (arg1) => (arg + 1 )

// 2nd way 
    let _2ndWay = arg1 => arg1 * arg1  
    let _2ndWay2 = arg1 =>(arg1 + arg1) 
// no need to wrap the argument in curly braces if it is only one

// 3rd way 
    let _3rdWay = (arg1 , arg2 ) => (`my name is ${arg1} and i work as a ${arg2}`)

// 4th way 
    let returnObj = (make , model , year) =>({make , model ,year})
    console.log(returnObj('honda' , 'Civic' , "2024"));

// 5th way 
    let myName = name =>{
        return `${'my name is' + name}`
        // if you use the curly brackets , than it is a must to use the return statement.
    }

// using arrow functoin as a callBack
    const aa = [1,2,3,4]
    let newS = aa.map(item=>item+1)
    console.log(newS)
;

// iife (imidaitly invoked Function expression)


 (function IIFE(param){
    // named IIFE 
    console.log('this is an imediatly invoked function');
})(" God damn you boy ");



(function() {
    // Your code here
    var x = 10;
    console.log(x); // Outputs 10
})();

function How(){
    console.log('i can run without any error');
}
// create a normal function and pass it reference  to an IIFE  and it works 
(How)();

// named iife 

(function printMyName(name, location ){
    console.log(`my name is ${name}` + 'i live in ' + location);
})('sadiq' , 'peshawar');

// iife with an arrow function 

(()=>{
    console.log('hello from an iife and i am an arrow function');
})();
