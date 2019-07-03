/* 
var, let, const

var is from the original JS
let and const are standard since 2015
*/

// var name = 'Fred Flintstone';
// console.log(name);
// name = 'Wilma Flintstone';
// console.log(name);

var initializationOnly;
console.log(initializationOnly);

// let

// let name = 'Fred Flintstone';
// console.log(name);
// name = 'Wilma Flintstone';
// console.log(name);

// CONST

// const name = 'Fred Flintstone';
// console.log(name);
// name = 'Wilma Flintstone';
// console.log(name);

// You must initialize (not just declare) a constant

const PI = 3.141592;
const person = {
    name: 'John',
    age: 30
}

// Notice that I can't reassign person, but I can mutate what's inside it

console.log(person.name);
person.name = 'Sarah';
console.log(person.name);

/* 
Six Primitive Data Types

String
Number
Boolean
Null
Undefined (all variables are undefined by default)
Symbols (new in ES6)
*/

const name = 'Fred Flintstone';
console.log(typeof name);
const age = 18;
console.log(typeof age);
const anotherAge = '18';
console.log(typeof anotherAge);

