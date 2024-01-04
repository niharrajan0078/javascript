const name = "nihar"
const repocount = 50

//console.log(name + repocount + " Value")

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)

const gameName = new String('hiteshhc')

//console.log(gameName[0]);

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 4);
console.log(newString);


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "   Nihar  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'))
console.log(gameName.split('-'));


