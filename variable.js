// Var - Older way, function scoped (Try to avoid this for a modern codebase)
var age = 25; // assignment operator

// let - Block scoped, can be reassigned, values can be changed / mutable
let name = "John"; 

// const - Block scoped, cannot be reassigned, values are immutable
const pi = 3.14; 

//1. Primitive data types
// String = Text Values
let greeting = "Hello, World!"; // String
let backticks = `You can embed ${greeting} with template literals`; // Template literals

// Number = Integers and floating point
let integer = 42;
let decimal = 3.14;
let negarive = -5;

// boolean - true and false
let isLoggedIn = true; 
let hasPermission = false;

//undefined - variables declared but not assigned any value(s)
let plp;
// console.log(plp);

//Null - intentional absence of any value
let employeeData = null;

// Symbol - unique and immutable values
// - immutable and unique identifier

// let uniqueId = symbol('id');

//2. Reference Data Types
// object - collection of key-value pairs

let person = {
    firstName: "john",
    lastName: "doe",
    age: 30,
    isStudent: false
};

// accessing object property
// console.log(person.firstName);
// not used\
// console.log(person["lastName"]);

//Arrays - ordered list of values 
let fruits = ["red", "blue", "orange"]
let mixed = [1, "hello", true, {name: "object"}]
// console.log(mixed[2])

// type conversion
// String to number
let numStr = "42";

// explicit conversion
let num = Number(numStr);
let numImplicit = "42" * 1;// implicit the asterix operator makes "42" to be assumed to be a string by JS i.e coercion
console.log(num);
console.log(numImplicit);

// falsy values in JS
// -false
// -0
// -""(Empty String)
// -null
// -undefined
// -NaN(Not a Number)

