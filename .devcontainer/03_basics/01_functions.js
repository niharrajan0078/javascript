function sayMyName() {
 console.log("N");
 console.log("I");
 console.log("H");
 console.log("A");
 console.log("R");
}

//sayMyName()

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);

// }

 function addTwoNumbers(number1 , number2) {
     
//    let result = number1 + number2
//    return result
     return number1 + number2
 }

const result = addTwoNumbers(3 ,5)
//console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if(!username){  //username === undefined
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Nihar"));
//console.log(loginUserMessage());

function calculatecardprice(val1,val2, ...num1)  {
return num1
}
//console.log(calculatecardprice(200 , 400, 500, 2000))

const user = {
    username: "Nihar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Userame is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200, 400, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400, 500, 1000]));
