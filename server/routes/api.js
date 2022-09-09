const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const userController = require("../controllers/user");

verifyToken = (req,res,next)=>
{

  if(!req.headers.authorization)
  {
    console.log("unauth 1 executed");
    return res.status(401).send("Unauthorised Requuest")
  }
  let token = req.headers.authorization.split(' ')[1]
  console.log("front token is "+token);
  if(token === 'null')
  {
    console.log("unauth 2 executed");
    return res.status(401).send("Unauthorised Requuest") 
  }
  let payload = jwt.verify(token,'secretKey')
  if(!payload)
  {
    console.log("unauth 3 executed");
    return res.status(401).send("Unauthorised Requuest")   
  }
  req.userId = payload.subject
  next()
}

router.get('/',(req,res,next)=>{
    res.send("From API Routes")
})

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.get('/event',userController.eventData);
router.get('/special',verifyToken,userController.specialData);

module.exports = router