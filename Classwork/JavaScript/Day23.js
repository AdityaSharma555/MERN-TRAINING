const { log } = require("console");
// const { EventEmitter } = require("stream");
// const fs = require("fs");
// const os = require("os");
// const path = require("path");
// const http = require("http");

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

// console.log(path.dirname("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));
// console.log(path.extname("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));
// console.log(path.basename("C:/Users/Aditya/Desktop/Workspace/Full Stack Training/Classwork/JavaScript/Day13_DOM.js"));

// const fullPath = path.join("user", "local", "bin", "script")
// console.log((fullPath));

// const absPath = path.resolve("user", "local", "bin", "script");
// console.log(absPath);

// ____________________________________


// http module

// const server = http.createServer((req, res)=>{
//   console.log(req.url);

//   if(req.url == "/") {
//     res.end("Welcome to Home route");
//   } else if (req.url == "/contact") {
//     res.end("Welcome to contact route");
//   }
// })

// // ip of our localhost is 127.0.0.1

// server.listen(3000, "127.0.0.1", ()=>{
//     console.log("Server is running on port 3000");
// })


// ______________________________

// const EventEmitter = require("events")

// const event = new EventEmitter();

// event.on("myName", (name, age)=>{
//   console.log(`First Event : Hello my name is ${name} and age is ${age}`);
// });

// event.on("myName", (name, age)=>{
//   console.log(`Second Event : Hello my name is ${name} and age is ${age}`);
// });

// event.emit("myName", "shubham", 23);

// ____________________________

// const http = require("http");
// const EventEmitter = require("events")

// const event = new EventEmitter();

// const server = http.createServer((req, res)=>{
//   if(req.url === "/") {
//     res.end("Home Page");
//     event.on("homePageAccessed", ()=>{
//       console.log("Home api called");
//     });
//   }
//   else if (req.url == "/about"){
//     res.end("About Page");
//     event.on("AboutPageAccessed", ()=>{
//       console.log("about api called");
//     })
//   }
// })


// server.on("request", (req, res)=>{
//   console.log("Request called. URL : " + );
// })

// server.listen(3000, "127.0.0.1", ()=>{
//     console.log("Server is running on port 3000");
// })

// ___________________________________

const http = require("http");
const EventEmitter = require("events");

const  event = new EventEmitter();

const server = http.createServer((req, res) => {
  if(req.method === "POST") {
    let body = "";
    req.on("data",  (chunk)=>{
      body += chunk.toString();
    });

    req.on("end", ()=>{
      storedData = JSON.parse(body);
      res.end("Post req clicked");
    })
  }
})

server.listen(3000, "127.0.0.1", ()=>{
    console.log("Server is running on port 3000");
})