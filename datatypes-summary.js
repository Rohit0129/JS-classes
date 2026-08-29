/* Primitive 7 types
String
Number
Boolean
null
undefined
Symbol
BigInt
*/

const id = Symbol('123');
const anId = Symbol('123');

// console.log(id === anId);

const bigNumber = 8423948230948239n;
// console.log(typeof bigNumber);



/* Reference type / Non-Primitive
Arrays
Objects
Functions
*/

const heros = ["Shaktima", "Naagraj", "KavtyaMahakal"];
const Objects ={
    name: "Rohit",
    age: 20
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros); //Return Object because Arrays are technically Object in JS
console.log(typeof Objects); //Return Object
console.log(typeof myFunction); //Return Function