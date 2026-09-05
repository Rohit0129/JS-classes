// const matrimonyUser = new Object();
const matrimonyUser = {};

matrimonyUser.id = "23432"
matrimonyUser.name = "Rohit"
matrimonyUser.isLoggedIn = false
// console.log(matrimonyUser);

const regularUser = {
    email: "some@email.com",
    fullName: {
        userFName: "Sam",
        age: 34,

    }
}

// console.log(regularUser);
// console.log(regularUser.fullName.userFName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// using assign
// const obj3 = Object.assign({}, obj1, obj2);

// using spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@helo.com"
    },
    {
        id: 2,
        email: "m@helo.com"
    }
]

// console.log(users[1].email);
// console.log(matrimonyUser);

// console.log(Object.keys(matrimonyUser));
// console.log(Object.values(matrimonyUser));

// Entries are used for making every key value into arrys. These are used less comparitively
// console.log(Object.entries(matrimonyUser));


const course = {
    coursename: "Learn React",
    price: "999",
    courseTeacher: "Rohit"
}

// course.courseTeacher
const {courseTeacher} = course

console.log(courseTeacher);
