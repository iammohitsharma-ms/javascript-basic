console.log(2 > 4);
console.log(2 < 4);
console.log(2 <= 4);
console.log(2 >= 4);
console.log(2 != 4);
console.log(2 == 4);


// Avoide these type of comparsion

console.log("2" > 1)
console.log("02" < 1)


console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);

/*
the reason is that an equality check  == and compersion >,<,<=,>=, work differintly.
comparsion converts null to number, treating it as 0.
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined == 0);

// strict check   ===

console.log("2" === 2);
