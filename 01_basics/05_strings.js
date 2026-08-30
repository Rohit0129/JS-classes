const name = "Shivaji"
const age = 50
// console.log(name + age); this is old method not to use

console.log(`First Chhatrapati of Marathas was ${name} who died at the age of ${age}`);
// This method is called string interpolation

const gameName = new String('Rohit');
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('o'));
console.log(gameName.fontsize());
console.log(gameName.italics());
console.log(gameName.lastIndexOf());
console.log(gameName.substring(2, 5));
console.log(gameName.slice(1, 4));

// Trim removes space
const newString = "   rohit   "
console.log(newString);
console.log(newString.trim());

// Replace: It replaces the characters
const url = "https://lco.hitesh.com/rohit%30more";
console.log(url.replace('%30', '-'));
console.log(url.includes('jelo'));
