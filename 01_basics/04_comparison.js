// console.log("2" > 1);

console.log(null >= 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null == 0);

// The reason is that an equality check == and comparisons > < >= <= works differently. Comparisons convert null to a number, treating it as 0. That's why (1) null >=0 is true and (2) null > 0 is false

console.log(undefined > 0);
console.log(undefined == 0);

//IMPOTANT Avoid this type of comparison