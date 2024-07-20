/* 
dataType cantrized into two parts primitive and non primitive , on the basis of kis traha se data memory mai store hotay hai or kis traha sa data ko access kar saktay ho.
*/


// primitive 
// 7 => string, number, boolean, null, undefined, bigInt, symbol

let name = "ola"
let score = 123
let balance  = 123.4
let isLoggedIn = false
let outsideTemp = null
let city;
const bigNumber = 123456789n 

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// Reference (non-primitive)
// Array, objects, function

const heros = ["Shaktiman", "naagraj", "Doga"]

let myObj = {
    name: "doga",
    score: 123
}

const myFunction = function name() {
    console.log("Hello World");
}

// Javascript is dynamically typed language. 


// typeof of all data type -- assigenment


/*    Data Types

123                 =>     Number
2.34                =>     Number
234567890987654n    =>     bigint
"apple"             =>     string
true/false          =>     boolean
null                =>     object
undefined           =>     undefined
id(symbol)          =>     symbol
Array[]             =>     object
object{}            =>     object
function()          =>     function

*/
