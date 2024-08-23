

// Copying arrays

// let arr1 = [10, 20, 30]
// let arr2 = arr1

// arr2.push(40)

// console.log(arr1 === arr2);
// console.log(arr1, arr2);


// We will use spread operator to create copy of an array which will not copy only the reference but the values
// But it works only for arrays containing primitive data types.
// That is, spread operator will only make SHALLOW COPY of Arrays/Objects


// let arr3 = [...arr1]

// ___________________


// let obj1 = {
//     a : "a",
//     b : "b"
// }

// let obj2 = {
//     c : "c",
//     d : "d"
// }

// let arr1 = [obj1, obj2]
// let arr2 = [...arr1]

// let newObj1 = {...arr1[0]}
// let newObj2 = {...arr1[1]}

// let arr3 = [newObj1,newObj2];

// arr2[1].e = "e"

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// _____________________

// You can copy multiple arrays into a single using spread operator

// let arr = [1, 2, 3]
// let brr = [4, 5, 6]

// let crr = [...arr, ...brr, 7, 8, 9]
// console.log(crr);


// ______________________

// When copying objects, if there are multiple objects with same keys, the resultant obj will contain only one key with value of latest copied obj.

// let obj1 = {
//     firstName : "first",
//     lastName : "last"
// }

// let obj2 = {
//     firstName : "otherFirst",
//     address : "myAddress",
//     phoneNo : 12345
// }

// let obj3 = {
//     ...obj1,
//     ...obj2
// }

// console.log(obj3);

// ______________________




