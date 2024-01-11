const user = {
    username: "nihar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let user = "Nihar"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Nihar"
//     console.log(this.username);
// }
// chai()

// const chai =  () => {
//         let username = "Nihar"
//         console.log(this);
//     }
//     chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => {username: "Nihar"}

    console.log(addTwo(3,4));


// console.log(addTwo(3, 4));

const myArray = [2,5,3,7,8]
myArray.forEach()
