// conditional statements 
let isNotLoggedIn = true
let condition = true
if(condition){
    // we can do  comparison by using equality or comparison operators
    // condition must alway be a Boolean , either truthy or falsy values 
    // this line of code only xecutes if the condition is true.
    // otherwise the interpreter will simply go over this section of code without executing it .
    console.log('hello world');
}

// if and else block 

if(!condition){
    // if this block does not execute than the control moves to the else block 
}
else{
    // else works in co-opration with the if statement.
}

if(condition){

}
else if (condition){
    
}
else if (condition){

}
// when we are checking multipl conditions
// we use the else if statements
else{

}


// switch statements 

let switchValue = 'm'

switch(switchValue){
    case 'a':
    console.log('hello a ');
    break;

    case 'b' :
    console.log('salam b');
    break

    case 'm':
    console.log('hello i am m');
    break

    default:
        console.log(" i am a default case i execute when none of the above cases executes");
}