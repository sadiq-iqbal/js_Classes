// arrays in js
// arrays are data types in js that can store multiples items in a contigous memory under a signle variable namee and are accessed using indices.

// array in js can hold Number , strings ,other arrays , objects and functions and can hold all of then at the same time

// in js arrays are stored in heaps means their varibles are only reference to the them When you create a variable holding a reference type, the variable holds a reference (or address) to the location in memory where the actual value is stored. This means that changing a property of an object referenced by one variable will affect other variables referencing the same object.

// ......creating arrays........//
    let arr = [] // empty array
    let arr2 =[1,2,3,5,6,7] // array of numbers
    let arr3 = ["a",'b',"c","d","e","f","g"] // array of strings | characters 
    let arr4 = [[1,3,4,5,6],["a","b","c","d","e"],[['a','b'] , [1,2,4]]] // array of arrays
    let obj1 = {
        name:'sadiq',
        age:'25'
    }
    let obj2 = {
        name:'noman',
        age:'24'
    }
    let obj3 = {
        name:'ali',
        age:'20'
    }

    let arrObj = [obj1 , obj2 , obj3] // array of objects
console.log(arrObj[0].name) 

// we can also have functions in an array
    let sum = function(a,b){
        return a+b
    }
    let sub = function (a,b){
        return a-b
    }
    let product = function (a,b){
        return a*b
    }
    let arrFunc = [sub , sum ,product]
    let s = arrFunc[1](2,4);
    console.log(s);

    let array1 = [1,2,3,4]
    let array2 = [1,2,3,4]
console.log(array1 === array2)
 //      eg  arry1 = 0x123 | array = 0x321
// returns false array1 and array2 variables are storing a reference type data type mean these variables only store location or reference to the memory loaction where these arrays are stored

    let array3 = array1 
/*

now both array3 and array1 store refernce or store the  location of the same object so mutating one will simulatniouly mutate the others

*/

// Methods in js on arrays 
        let arrayObj = new Array(1,2,3,4,5)
        console.log(arrayObj)
    // as soon we initiate an array it is wrapped up in a array object that has some built on method

    // accsessing array item 
        console.log(arrayObj[0],arrayObj[1],arrayObj[2]); // we use indeces , index starts from 0 

    // adding an item in an array 
        arrayObj[5] = 'newItem'
        console.log(arrayObj);
        
    // removing an array items 
        delete arrayObj[5];
        console.log(arrayObj); 

    //the item is removed but its space still presist accessing it will return an undefined

    // increasing length of an array using empty items 
        let newArray=[1 ,2]
        newArray[7] ="lund"
        console.log(newArray);
        console.log(newArray.length);

    // we can also shrink the array length
        newArray.length = 4 
        console.log(newArray);

    // accessing last item of the array 
        let newArray2 = [1,2,3,4]
        let lastItem = newArray2[newArray2.length - 1 ]
        console.log(lastItem);

    // includes method
        console.log(newArray2.includes(10)) // returns true if contians otherwise return false

    // indexOF( method)
        console.log(newArray2.indexOf(10))   //returns index if contians otherwise return ( -1 )

    // for of and for in loops 

    // for of  // it let you access the element of the array 
    let arrloop = [1,2,3,4,5,6,7,8,9]
    let createArr = []
    let i = 1
    for (let element of arrloop){
        createArr[arrloop.length- i] = element
        i++
    }
    console.log(createArr);

    // for in .. it lets you access the indices instead of the element themselves.
        for (let index in arrloop ){
            console.log( index , " .... ",arrloop[index]);
        }

// pop() , push() , shift() , unshift()
    let emptyArray = []
        // push() it adds item to the end of the array and returns that element
            let pushedItems =  emptyArray.push(1) // signle item pushing .
            emptyArray.push(2,3,4,5) // mutiple item pushing 
            console.log(emptyArray , pushedItems);

        // pop() remove the last item from the original array and returns it .
        let removedItem = emptyArray.pop()  
        console.log(removedItem,"leftover array = " , emptyArray);  
             // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

        // shift() remove item from the begining
        
        let firstRemovedEmlement = emptyArray.shift()   
        console.log(firstRemovedEmlement , '.....', emptyArray);
            // the main problem is it changes the indices of each and every item which can cause a serious 
            // Removes the first element from an array and returns it. If the array is      empty, undefined is returned and the array is not modified.

        // unshift()  // add items in the begining
            emptyArray.unshift(10)
            console.log(emptyArray);

// concating two arrays
let fullArray = ['a','b','c','d']
let newArray3 = emptyArray.concat(fullArray)
console.log(newArray3);
let newArray4 = [...emptyArray , ...fullArray]
console.log(newArray4);

// spread operator open up the items of the array 
console.log(...newArray4)


// concat(): Parameters: arrays to concatenate. Returns: a new array containing the concatenated elements.

// copyWithin(): Parameters: target index, start index, end index. Returns: the modified array.

// every(): Parameters: callback function, optional thisArg. Returns: true if all elements pass the test, otherwise false.

// filter(): Parameters: callback function, optional thisArg. Returns: a new array containing elements that pass the test.

// find(): Parameters: callback function, optional thisArg. Returns: the first element that passes the test, or undefined if none is found.

// findIndex(): Parameters: callback function, optional thisArg. Returns: the index of the first element that passes the test, or -1 if none is found.


// includes(): Parameters: searchElement, optional fromIndex. Returns: true if the array contains the specified element, otherwise false.


// indexOf(): Parameters: searchElement, optional fromIndex. Returns: the first index at which a given element can be found in the array, or -1 if it's not present.


// join(): Parameters: separator. Returns: a string containing the elements of the array joined by the specified separator.


// lastIndexOf(): Parameters: searchElement, optional fromIndex. Returns: the last index at which a given element can be found in the array, or -1 if it's not present.


// pop(): Parameters: None. Returns: the removed element from the end of the array.


// push(): Parameters: elements to add. Returns: the new length of the array after adding the elements.


// reverse(): Parameters: None. Returns: the reversed array.

// shift(): Parameters: None. Returns: the removed element from the beginning of the array.


// slice(): Parameters: start index, optional end index. Returns: a shallow copy of a portion of an array.


// some(): Parameters: callback function, optional thisArg. Returns: true if at least one element passes the test, otherwise false.


// sort(): Parameters: optional compareFunction. Returns: the sorted array.


// splice(): Parameters: start index, delete count, elements to add. Returns: an array containing the deleted elements.


// toLocaleString(): Parameters: None. Returns: a string representing the elements of the array.


// toString(): Parameters: None. Returns: a string representing the array and its elements, separated by commas.


// unshift(): Parameters: elements to add. Returns: the new length of the array after adding the elements.


// values(): Parameters: None. Returns: a new array iterator object that contains the values for each index in the array.





