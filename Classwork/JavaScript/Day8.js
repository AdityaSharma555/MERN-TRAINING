
// Data types in javascript
// pirmitive, reference type of object

// Primitive - String, number, boolean, bigint, undefined, null
// Reference types - array, objects, date, null

console.log(typeof "js does not have char data type")
console.log(typeof 'is also string');
console.log(typeof `using backticks also to print " " in the string`);

console.log(typeof 20);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

/* Type conversion and Type casting */

let a = 20.5
let b = Number(NaN)

console.log(typeof a);
console.log(typeof b);



// Operators

let num = 30
let num2 = 20

let add = a+b
let sub = a-b
let mul = a*b
let div = a/b

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);


// some other conversions/coersions -

let str = "10"
let conStr = +str

console.log(typeof +str)
console.log(5 + "5")
console.log("5" + 5);
console.log(5 + Number("5shu"));
console.log(5 + + "5")
console.log(5 + + "5shu")

console.log(5 + NaN)

console.log(3**4)


console.log(7==7 + "str")
