// Objects 
// set of key value pairs 
// it is represented by curly braces {}
let object = {}
// also
let object2 = new Object()
console.log(object , object2);

// adding item to the object
object.name = 'sadiq';
object.age = 23;

// accessing an object property 
    let value = object.name;
    let ageValue = object["age"];
    console.log(value ," ... ", ageValue);

// deleting a specific property of an object 
    delete object.name
    console.log(object);

//  dot (.) vs [] way of accessing items of an object
// both works the same but [] helps add access value on the basis of dynamic inputs and smbols are only accessed through this way 
let symb = Symbol(123);
let prop = 'length'
let obj = {
    length : 10,
    height : 20,
    width  : 30,
    "half radius" : 15,
    [symb] :"password",
};

console.log(obj[prop]);
console.log(obj[symb]);
console.log(obj['half radius']); // these are only possible through  [] bracket notation

let complexObjects = {
    name:'sadiq',
    age : 20 ,
    address : {
            country : 'pakistan' , 
            province : ' k p k',
            district : 'nowshera',
            city : 'pabbi',
            cordinates: {

                    'x' : 25,
                    'y' : 12
            }
        },
    school:'Dr.Atta shaheed memorial school and college pabbi nowshera'
};

console.log(complexObjects?.address?.crdinates?.length);
let objectified  = { "2" : 1 , '3' : 3 }
// console.log( { "2" : 1 , '3' : 3 }.length); 
// the length method does not work on objects it only works arrays and strings

// to access each and every property of the object we can follow the follwing techniques 
for(let key in complexObjects){
    console.log(key,"...." , complexObjects[key])
    // using [] squarey bracket notation to acces the values 
}
// for(let entry of complexObjects){
        // it does not work on the objects because they are not iterable
// }

console.log(Object.keys(complexObjects)
);

console.log(Object.entries(complexObjects)); 
// it retruns an array in which it makes each key value pair a sibling elements of a each other in a single array

// Object.freeze(complexObjects)
// after this no properties can be added or removed from an Object
console.log(complexObjects);
delete complexObjects.name
let propertiesToBeAdded = {
    gender:"M"
    ,
    bodyCount:24,
    qualification:"Master degree holder"
}
let newObject = Object.assign(complexObjects ,propertiesToBeAdded) 
// it merges the new array to the original and mutate the original one 
// complexObjects are modified

console.log(newObject===complexObjects);
// spreading objects to is another way to merge two or more together

let obj1 = {
    make:'suzuki',
    model:'catoshi'
    ,
    year : 2023

}

let obj2 = {
    make:'honda',
    model:"civic",
    year : 2024
}

let obj3 = {...obj1, ...obj2 }
console.log(obj3);

// Object Destructuring  >>>>>>>>>>>>>>>>>>>>>>>......>>>>>>>>>>>>>>>>>>>>

    let myObject = {
        info:`this video is for those
        who want to earn money`,
        length : `2 hours long`,
        language : "english"
    }

 let {language} = myObject
 console.log("\n \n", language);

//  we can also assign the object property to another variable
    let { info : description} = myObject
    console.log(description);