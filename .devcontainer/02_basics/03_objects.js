// singleton

// object literals

//Object.create
const mySym = Symbol("key1")

const JsUser = {
    name: "Nihar",
    "full name": "Nihar Ranjan Patra",
    [mySym]: "mykey1",
    age: 18,
    location: "Odisha",
    email: "nihar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

//Object.freeze(JsUser)
JsUser.email = "Nihar@chartgpt.com"
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 