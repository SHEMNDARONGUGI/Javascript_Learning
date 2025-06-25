//Traditional way
// function greet(name){
//     return `"Hello ${name} !"`
// }
// console.log(greet("Shem"));

// modern way - const for immutability
// const greet = function(name){
//     return "Hello, " +name+ "!"
// };

// console.log(greet("Shem"));

// greet()

// Arrow functions
// const greet = (name) => {
//     return "Hello, " +name+ "!"
// }

const greetShort = (name = "Do projects") => "Hello, " +name+ "!";

console.log(greetShort());

console.log(greetShort("Silvia"));

const add = (a, b) => {
    return a + b;
}
console.log(add(4,5));

//spread operator

function sum(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4,5));

