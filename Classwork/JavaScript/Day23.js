const { log } = require("console");
const fs = require("fs");
const os = require("os");
const path = require("path");

// console.log(process);

// let file = "readMe.txt"

// fs.writeFileSync(file, "Welcome to node.js");

// let data = fs.readFileSync(file)
// console.log(data);
// console.log(data.toString());

// fs.appendFileSync(file, "\nLets start with learning fs, stands for file stream/system");
// data = fs.readFileSync(file);
// console.log(data.toString());

// let newFile = "ReadMe.txt"
// fs.renameSync(file, newFile);

// ______________

// Event Loop and Async

// fs.writeFile(newFile, "This job is done in new thread", (err)=>{
//     if(err) {
//         console.log(err);
//     }

//     console.log("File Created");
// });

// console.log("After write file");


// ___________________________________

// fs.readFile("ReadMe.txt", "UTF-8", (err, data)=>{
//     console.log(data);
// })

// ___________________________________



// fs.mkdir("myFolder", (err)=>{
//     if(err) {
//         console.log(err);
//     }

//     console.log("folder created");

//     fs.writeFile("./myFolder/myFile.txt", "This is inside myFolder", (err)=>{
//         if(err) {
//             console.log(err);
//         }

//         console.log("file created inside myFolder");
//     });
// })


// _______________________


// fs.unlink("./myFolder/myFile.txt", (err)=>{
//     if(err) {
//         console.log(err);
//     } 
//     else 
//         console.log("File is deleted");
// })


// fs.rmdir("./myFolder", (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("Folder has been deleted");
// })


// _________________________________

// OS module

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);


// _________________________________

// Path module

console.log(path.dirname("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));
console.log(path.extname("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));
console.log(path.basename("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));

const fullPath = path.join("user", "local", "bin", "script")
console.log((fullPath));

const absPath = path.resolve("user", "local", "bin", "script");
console.log(absPath);