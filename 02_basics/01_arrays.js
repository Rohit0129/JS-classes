const array = [1, 2, 3, 4, 5, 6]
// console.log(array);

const myNewArr = new Array(1, 2, 3, 4);
// console.log(myHeros);
// console.log(myNewArr);

// Array Methods
// myNewArr.push(6);
// myNewArr.pop(6);

// myNewArr.unshift(8);
// array.shift();
// console.log(array.includes(7))
// console.log(array.indexOf(5))

// console.log(myNewArr.includes(4));
// console.log(myNewArr.indexOf(4));

// const newArr = myNewArr.join(); // used to convert arrays into string
// console.log(typeof newArr);

// slice, splice

// Slice syntax
// array.slice(start, end)
const myn1 = array.slice(1, 4);
console.log("A", array);
console.log(myn1);
console.log("B", array);

// Splice syntax
// array.splice(start, deleteCount, item1, item2...)

const myn2 = array.splice(1, 3, "98");
console.log("C", array);
console.log(myn2);