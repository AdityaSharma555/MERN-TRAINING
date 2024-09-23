const mongoose = require('mongoose')

async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost/testdb");
        console.log("Connected to mongodb at mongodb://localhost/testdb");
    } catch(err) {
        console.log("Error connecting to mongodb : " + err);
    }
}

module.exports = connectDB;