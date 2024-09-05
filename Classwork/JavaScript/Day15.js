


// let user = {
//     username : "shubham",
//     age : "40",
//     getUserDetails : function() {
//         console.log(`${this.username}`);
//         console.log(this);
//     }
// }

// user.getUserDetails();


// ______________________________________


// Constructor function in js

// function Person(name, age) {
//     const personObj = {
//         name : name,
//         age : age,
//         greet : function() {
//             console.log(`name is ${this.name} age is ${this.age}`);
//         }
//     }

//     return personObj;
// }


// let person1 = Person("adi", 21);
// console.log(person1);
// person1.greet();



///////////////////////////////////////////////////


// function Person(name, age) {
//     this.name = name;
//     this.age - age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${name} and age is ${age}`);
//     }
// }

// let p1 = new Person("aditya", 21);
// let p2 = new Person("adi", 20);
// console.log(p1);
// console.log(p2);


//////////////////////

// Adding a function to prototype will let it occupy common memory for all instances (objects)


// Person.prototype.intro = function() {
//     console.log(`I am ${name}. My age is ${age}`);
// }

///////////////////////


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hello i am ${this.name}`);
    }
}


class Inherited extends Person {
    greet() {
        console.log(`I am inherited and name is ${this.name}`);
    }
}

///////////////////////////////////////


class BankAccount{
    #balance = 0


    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`${this.owner} deposited ${amount}, current Balance : ${this.#balance}`);
    }
}



