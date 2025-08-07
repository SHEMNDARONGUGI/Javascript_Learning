//For loop
// number of iterations is known

// for(initialization; CSSConditionRule; increment/decrement){
//     code execution
// }

for ( let x = 0; x < 15; x++){
    console.log(`Iteration number ${x}`);
}

//While Loop
//the number of iterations is not known
let count = 0;
console.log();
while(count < 10){
    console.log(`Count: ${count}`);
    count++;
}

//Do-while
// shoot first ask questions later
let num = 10;
console.log();
do{
    console.log(`number ${num}`);
    num -=2;
}while(num > 0);

// For...of loop
// used when one wants to go through arrays
console.log();
const fruits = ["Banana", "Orange", "Mango", "Berries", "Apple"];

for (const fruit of fruits){
    console.log(fruit);
}

console.log();
const name = "SHEM";

for(const letter of name){
    console.log(letter);
}

//For...in loop
//Used to iterate over object properties
console.log();
const car = {
    Model: "Mercedes S550",
    Price: 2500000,
    Color: "Blue",
    VIN: "XA113F9",
    YOM: 2011,
    Owner: "Shem Ndaro Ngugi",
    isAvailable: false
}; 

for (const features in car){
    //getting the values associated with the keys
    console.log(`${features}: ${car[features]}`);
}
