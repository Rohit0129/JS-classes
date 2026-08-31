const marvelHeros = ["Iron-Man", "Thor", "Captain-America"]
const dcHeros = ["Superman", "Batman", "Flash"]
const allHeros = marvelHeros.concat(dcHeros);
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// console.log(allHeros);

// Spread
const all_new_heros=[...marvelHeros, ...dcHeros];
// console.log(all_new_heros);

// flat
const another_array = [1,2,3, [4,5], 7, [8,9,10]];
const real_arrya = another_array.flat(Infinity);
// console.log(real_arrya);

console.log(Array.isArray("Rohit")) //Check if it is an Array or not
console.log(Array.from("Rohit")) // Gives output in Arrays

let FulName = "Rohit Shamkant More";
console.log(Array.from(FulName));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // Gives combine Array

