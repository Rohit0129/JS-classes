// Object literals
let sym = Symbol("key1");
const jsuser = {
    name: "Rohit",
    [sym]: "keys", // syntax for declaring symbol in object using [];
    age: 29,
    location: "Kalwa",
    email: "rohitmore@admin.com",
    isLoggedIn: false,
}

console.log(typeof jsuser["email"]);
console.log(jsuser[sym]);

jsuser.email = "rohit@gpt.com";
// Object.freeze(jsuser);
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello User");
}

jsuser.greetingtwo = function(){
    console.log(`Hello ${this.name} how are you`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

