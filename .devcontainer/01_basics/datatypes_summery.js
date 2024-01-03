// primitive

//7 types : String,Number,Boolearn,null,undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log("Symbol");
//const bigNumber = 326598745656654n

//Reference (Non primitive)

//Array , objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "Nihar",
    age: 22
}

const myFunction = function() {
    console.log("Hello World");
}
console.log(typeof myFunction); //here myFunction called as object function

// https://262.ecma-international.org/5.1/#sec-11.4.3