// "use strict"

let count = 1;

while(count<=10) {
    console.log(count);
    count++;
}

// We havent declared i, but it will still run. But it won't work in strict mode.
for(i=0; i<10; i++) {
    console.log(i);
}

// for of and for in loop

let items = ["hola", "hello", "hi", "nameste", "nyaa", "yo-rush-koo"]

// This will take the item inside array
for(let variable in items) {
    console.log(variable);
}

// This will take the index of the array items
for(let variable in items) {
    console.log(variable);
}


////////////////////////////////////////////////////////////////////////////////////////////////












////////////////////////////////////////////////////////////////////////////////////////////////
let person = {
    name : "Aditya",
    class : "3rd Year",
    rollNo : "006",
    phoneNo : {
        no1 : 0,
        no2 : 445
    }
}

console.dir(person);

////////////////////////////////////////////////////////////////////////////////////////////////


let something  = [
    {
        name : "name",
        phone : 888
    },

    {
        name : "other",
        phone : 777
    },

    {
        name : "another",
        phone : 666
    }
]

console.table(something)
console.log(something)

////////////////////////////////////////////////////////////////////////////////////////////////


console.group("First Group")
console.log("Msg 1")
console.log("Msg 2")
console.groupEnd()


console.group("Second Group")
console.log("Msg 1")
console.log("Msg 2")
console.groupEnd()


////////////////////////////////////////////////////////////////////////////////////////////////


