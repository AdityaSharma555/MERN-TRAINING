

/*

- map is a higher order function.

Higher-Order Function
A higher-order function is a function that either:

Takes one or more functions as arguments, or
Returns a function as a result.

Callback/Anonymous Function
The callback function is the function passed as an argument to the higher-order function.

*/

let arr = [10, 20, 30, 40, 50];

let newArr = arr.map((item) => {
    item *= item;
    item ++;
    return item;
})

console.log(arr);
console.log(newArr);

