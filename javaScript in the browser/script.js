// Dom stands for Document object model 
// the html document is converted into an Object ,its properties and method than can be accessed and manipulated later on.
// window Object is the parent object that contains all other objects such as Dom document, bom etc
 
window.console.log('hello world')
    console.log(document.links) // puke out all links on a web page
    console.log(document.anchors) // puke out all links on a web page
    console.log(document.images) // puke out all the images
    console.log(document.children);
    console.log(document.forms) // return all the forms used in a page
    console.log(document.body) // return the body tag
    console.log(document.cookie); // cookie 
    console.log(document.scripts); // Returns all <script> elements 
    console.log(document.title); // returns the title
    console.log(document.documentElement);
    //document.documentElement refers to the root element of the document, typically the <html> element. This   property provides access to the top-level element in the DOM hierarchy.


    // accessing children in Dom.
    // Element.firstChild
    // Element.laststChild
    // document.body.childNodes
// element only navigation
    // element.firstElementChild
    // element.lastElementChild
    // element.Childeren
let ul = document.querySelector('.ul')
let ulChilderen = ul.childNodes
console.log(ulChilderen)
console.log(ul);
console.log(document.body.firstChild) 
// IT RETURNS EMPTY SPACE BETWEEN TAGS AS TEXT NODES AND ITS ALSO RETURNS COMMENT NODES
console.log(document.body.lastChild);
console.log(document.body.childNodes[0]); 
// same as first child but the other is more optimized
console.log(document.body.childNodes);
// it returns a nodeList which is different than an array and it can be converted into array/

console.log(document.body.hasChildNodes()); // returns true or false if contians childnodes return true else false

// Most used ways to obtain Dom entities is using the following three methods

let getById = document.getElementById('myname')
console.log(getById); // it retruns exactly the same element

let getByClassName = document.getElementsByClassName('ages')
console.log(getByClassName);
// it retruns a htmlCollection that contain all the element that has the same class 
console.log(getByClassName[0]);
console.log(getByClassName[1]);
console.log(getByClassName[2]);
// accessing single elements out of the node list

// let getByCssSelector = document.querySelector('.class / #id / tagname')
// it returns the first ever element that has this css attribute 
console.log(document.querySelector('.ages'));
console.log(document.querySelector('.ages[style="color: red;"]'));
console.log(document.querySelectorAll('.ages'));// it return an html collection.
console.log(document.querySelectorAll('div')[0].parentElement); // using tag name
console.log(document.getElementsByTagName('span'));


// parent element  vs parentNOde

// Element.parentElement  it will only access the parent html element and not the any node such as comment or text 

let myElement = document.getElementsByClassName('myelement')[0]
console.log(myElement.parentNode);

// Element.parentNode it not only returns the direct parent html element but also retruns any kind of node 

// nextSibling vs previoussibling
// it returns both the html element node + text and comment Nodes 

console.log(myElement.nextSibling);
console.log(myElement.previousSibling)

// nextElementSibling vs previousElementSibling
console.log(myElement.nextElementSibling);
console.log(myElement.previousElementSibling);
// it only returns the html element and ignores the html text and comment node 

// attributes / set / get / remove /

let free = document.querySelector('#free')
console.log(free);
console.log(free.attributes ); // returns all the attributes set on an element
console.log(free.getAttribute('draggable')); // gets only one attribute
console.log(free.removeAttribute("hidden"));
console.log(free.setAttribute('class' , 'name    ism '));
console.log(free.id , free.classList , free.style); 
// we can directly access any attribute as a property on that html element 
function sayHello (){
    console.log('hello')
}
free.classList.add('hide')
free.classList.remove('ism')
free.classList.replace('hide' , 'shown')
console.log(free.classList.contains('naam')); // if contains return true else retrun false
free.addEventListener('click',()=>{
    free.classList.toggle('naam')
})

free.onclick = console.log('hello wqorld');

console.log(free.classList); // returns a list / array of classes on any html element   
console.log(free.className.toString());



/// creating element in the dom 
function createHtmlElement(elementToAppendIn=body ,className="this is a className",id='myId' ,title="myTitle",tag , content ){
    console.log('function started ');
    if (!tag) {
        console.log('Error Detected: Missing tag or content');
        return;
    }
    console.log('first Condition ');
    let itemToCreate = document.createElement(tag);
    // Check if className and id are provided and not empty before setting them
    if (className && className.trim() !== "") {
        itemToCreate.setAttribute('class', className.trim());
    }
    console.log('Second Condition ');
    if (id && id.trim() !== "") {
        itemToCreate.id = id.trim();
    }
    console.log('Third Condition ');
    itemToCreate.id = id;
    itemToCreate.setAttribute('class' , className );
    itemToCreate.title = title;
    document.createTextNode(content);
    itemToCreate.innerText = content;
    console.log('Attributes added');
    console.log( itemToCreate , 'item being logged into the dom');
        document[elementToAppendIn].append(itemToCreate)
    
}
createHtmlElement(" " , 'unorderList' , "myList" , "this is an html element probably an unordered list " , 'main' , '')
createHtmlElement(`body.myList` , 'item' , "myitem" , "this is an html element probably an unordered list " , 'li' , '')


// inner vs outer html.
// innerhtml on returns the innerContent inside traget html element.
// outerHtml it retruns the content + the html tag of the target element.
