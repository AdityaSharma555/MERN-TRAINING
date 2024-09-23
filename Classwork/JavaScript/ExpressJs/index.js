const express = require('express')

const app = express()

const userRouter = require('./routes/user')

app.set('view engine', 'ejs')

app.use(logger)

app.use("/users", userRouter)



app.get('/', (req, res)=>{
    console.log("here");
    // res.status(500).json({message: "Error"});
    // res.download('server.js')


    res.render('index', { text : "status"})
})




function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}



app.listen(3000)