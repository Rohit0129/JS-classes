// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 4);
// let myCreatedDate = new Date(2026, 0, 4, 5, 4);
// let myCreatedDate = new Date("2023-04-2");
let myCreatedDate = new Date("04-2-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //converts in miliseconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "narrow",
});

