

/*

- JS arrays allows for duplicate items
- Put anything inside arrays
- .push() method will return the size of the array after adding the new element.
- .pop() method will return the element that is popped.
- unshift(obj/num/etc) will place the argument at the 0th index of the array.
- shift() will pop from the 0th index.
- arr1.concat(arr2) will concat arr2 on arr1 (arr1 will be in starting of the array)
- concat will return new array and not change the orignal array.

*/

// let arr = [];

// arr.push(33);
// arr.push("33");
// arr.push(33);

// arr.push({obj : "object",
//           li : [10, 20, 30, "hi"]});


// arr.push(["another", "array"]);
// arr.push("Pushing a string");

// console.log(arr);

/*

Accessing the values
- use indexes

*/

// console.log( arr[0] );
// console.log( arr[0].obj );
// console.log( arr[0]["obj"] );
// console.log( arr[0]["li"] );
// console.log( arr[0]["li"][2] );
// console.log( arr[0]["li"][3] );

// console.log( arr[1][0] )
// console.log( arr[1][1] )
// console.log( arr[2] );
// console.log( arr[2][5] );

/*

Unshift and Shift.

- unshift(obj/num/etc) will place the argument at the 0th index of the array.
- shift() will pop from the 0th index.

*/

// let brr = [10, 20, 30, 40, 50];

// console.log(brr.unshift(1000));
// console.log(brr);

// console.log(brr.shift())
// console.log(brr);


/*

Slice, Splice

- Slice can be used with 1 or 2 arguments.
- 1. Only start index : Will slice from start to end of array.
- 2. start, end index : end index is not included.
- Slice does not change the orignal array.
- Slice returns the new array.

-------------------

- splice changes the orignal array
- splice will return am array containing elements which it has removed from the array. 
- splice can be used in 2 ways 
    - 1 argument : will remove elements form that index to end of array
    - 2 arguments : 

*/


// let arr = [22, 33, 44, 55, 66, 77, 88, 99]

// let brr = arr.slice(3);
// console.log(brr);
// console.log(arr);


// brr = arr.slice(3, 5);
// console.log(brr);
// console.log(arr);

// console.log(arr.slice(3));
// console.log(arr);

// console.log(arr);

// let brr = arr.splice(2);

// let brr = arr.splice(1, 3, )

// console.log(arr);
// console.log(brr);

let brr = arr.splice(2, 3, [40, 50, 60]);

console.log(arr)
console.log(brr);


/*

join method

*/

// let arr = [10, 20, 30, 40];
// let res = arr.join("techno");
// console.log(res);

// console.log(arr.reverse());








/*

.flat() method

*/



// let arr = [10, 20, 30, [40, 50, [60, 70]], [80, 90]]

// console.log(arr.flat(1));

// arr = [10, 20, 30, [40, 50, [60, 70]], [80, 90]]
// console.log(arr.flat(2));











