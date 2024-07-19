let score = undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(valueInNumber);
console.log(typeof valueInNumber);

// "33" => 33
// "123abc" => NaN
// true => 1;  false => 0;
// null =>  0
// undefined => NaN


let isLoggedIn = undefined


let isLogged_bool = Boolean(isLoggedIn)

console.log(typeof isLogged_bool);
console.log(isLogged_bool);

// ""    => false
// "asd" => true
// null  => false
// undefined => false
// 0 => false , 1 => true 


let num = 23

let numINstr = String(num)
console.log(numINstr);
console.log(typeof numINstr);