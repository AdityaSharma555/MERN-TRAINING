const mongoose = require('mongoose');
const User = require("./User");
const connectDB = require('./config')

connectDB();

async function addUsers(name, age, email, createdAt, updatedAt, bestFriend=null, hobbies, address) {
    try {
        const user1 = await User.create({
                name: name,
                age: age, 
                email: email, 
                createdAt: createdAt, 
                updatedAt: updatedAt, 
                bestFriend: bestFriend, 
                hobbies: hobbies, 
                address: address
            });
        console.log("added: " + user1);
    }
    catch(err){
        console.log("Error when createing user1 : " + err);
    }   
}

addUsers("Aditya", 21, "aditya@gmail.com", 15-9-24, 16-9-24, null, ["chess", "dancing"], {street:"123, Main Street", city:"udaipur"});