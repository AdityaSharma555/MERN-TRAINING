const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
    res.send("User List");
})

router.get("/new", (req, res)=>{
    res.send("User New Form");
})

router
  .route("/:id")
  .get((req, res)=>{
    res.send(`Get User with ID ${req.params.id}`)
  })
  .post((req, res)=>{
    res.send(`Post User with ID ${req.params.id}`)
  })
  .delete((req, res)=>{
    res.send(`Delete user with ID ${req.params.id}`)
  })


module.exports = router



