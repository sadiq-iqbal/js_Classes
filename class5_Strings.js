// declaring a string 
// string are primitive/immutable data types
// string are declared in two way , string literal("") and string Object

//////////////////             string litral             ////////////////
let str1 = ''
let str2 = 'this is my first string in js'

// double strings 
let name2 = "sadiq iqbal is my name"

// backticks ``
let name3 = `my name is sadiq i am from pakistan`

// backtick has the following advantage over the ''single and "" double quotes.
const flexibleString = `
my 
name
is 
sadiq 
and 
i live 
in 
pakistan
i
have
my
own
car
`
// this sring will be printed as it is with out bring them back to the same line
console.log(flexibleString)

// escap characters 
/* 
    \n new line 
    \t for tab
    \n: Newline character.
    \t: Tab character.
    \': Single quote character.
    \": Double quote character.
    \\: Backslash character.
    \b: Backspace character.
    \r: Carriage return character.
    \f: Form feed character.
    \v: Vertical tab character.
    Here's an example of how you

*/

/////////////////               string Object           /////////////////

let str3 = new String('this is my second string')

// accessing and concatinating letters in a string 
let string_1 = 'sadiq'
let string_2 = ' iqbal'
let conCatedString = string_1 + string_2
console.log(conCatedString);
let This = str3[0] + str3[1]+ str3[2]+ str3[3]
console.log(This)
let browserType = '12345678'
    // First item //
console.log('first item = '+ browserType[0])
    // last Item // 
console.log(browserType[browserType.length - 1]
);



//              string literal // string templating                 //

// we can dynamically add variables , do calculation and the final result will be automatically placed inside the string template //

let name = "MR jhon";
let age = 25;
let dateOfBirth = 2000
let info ;
info = `${name} is ${ new Date().getFullYear() - dateOfBirth} mean he is ${age} years old`
console.log(info);

// string are stored in varibles hence they are immutable any changes we make to strings are applied to the copies of the string not the real string it self //

// length
let bigString = "this is a bigger string it has alot of values it uses different methods to manipulate and get manipulated  and uses different techniques"
// to find characters , spaces , symbols use .length method .
// it does not use "()" to work
console.log(bigString.length)

// running loops on a string and printing each character indiviually.
let withoutSpaces = "";
let space = 0
for (let i = 0; i <= bigString.length - 1; i++) {
    // Check if the character is not a space
    if (bigString[i] !== ' ') {
        // Concatenate non-space characters to withoutSpaces
        withoutSpaces = withoutSpaces + bigString[i];
    }
    else{
        space++
    }
}
console.log(withoutSpaces);
console.log(space);
// program to find the number of spaces in a string

// tofind a specific character on an index we use the charAt(index) method

let sadiq = new String('sadiq')
console.log(sadiq.charAt(3)) // returns i 

// to find the index of a specific letter we use indexOf(character)
console.log(sadiq.indexOf("d"))
sadiq[2] = 'h'
console.log(sadiq);

// if we want to put two conditions in a ternery operator we can do it with teplate literal
// eg  condition1? true : `${condition2 ? true : false}`
function isLargeScreen(){
    return null
}
let item = {
    a :'b',
    b:"a",
}
const classes = `header ${
    isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
  }`;


// srting.includes(" the string portion ")
//   retuns either true or false
//     program
function findBadWords(searchSentence){
    let badWords = ['damn' , 'bick' , 'shutup', 'puckoff' , "vegan" , 'fussy']
    for(let i = 0; i <=badWords.length-1; i++){
        if (searchSentence.includes(badWords[i])){
            console.log()
            return "inAppropriate content detected"
        }
        
        
    }
    return 'green flag'

}

let sentence = 'i just to have a big dick nothing else'
let sentence2  = 'i just wanna let you know that i love  you so much and i can not live without you '
console.log(findBadWords(sentence2))


//<><><>.............indexOf("word/letter/character",startingPoint)....................<><><><
let strXYZ = "this is some nice and easy text and is used for some great purposes"
let theIndex = strXYZ.indexOf("is")

    function findIndexes(string, toFind) {
        let startingIndex = 0;
        let currentIndex;
        let indexes = [];
    
        while ((currentIndex = string.indexOf(String(toFind), startingIndex)) !== -1) {
            indexes.push(currentIndex);
            startingIndex = currentIndex + 1;
        }
    
        return indexes.length > 0 ? indexes : 'Could not find the word';
    }

console.log( findIndexes('i work in the cemetry in night shifts i go in the grave to see my real me' , 'in'))

const date = '1971_01_23'
const d = new Date().now()
console.log(d
);

