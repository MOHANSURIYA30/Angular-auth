const userModel = require('../models/user');
const jwt = require('jsonwebtoken')

exports.registerUser = (req,res,next)=>{
    let userData = req.body;
    let user = new userModel(userData)
    user.save((err,user_res)=>{
        if(err)
        {
            console.log(error);
        }
        else
        {
            let payload = { subject:user_res._id }
            let token = jwt.sign(payload,'secretKey')
            console.log(token);
            res.status(200).send({token});
        }
    })
} 

exports.loginUser = (req,res,next)=>{
    let userData =req.body;

    userModel.findOne({email:userData.email},(err,user_res)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if(!user_res)
            {
                res.status(401).send("Invalid Email");
            }
            else{
                if(user_res.password !== userData.password)
                {
                    res.status(401).send("INVALID PASSWORD");
                }
                else
                {
                    let payload = { subject:user_res._id }
                    let token = jwt.sign(payload,'secretKey')
                    console.log(token);
                    res.status(200).send({token});
                }
            }
        }
    })
}

exports.eventData = (req,res,next)=>{
  let event_data = [
    {
        _id:'1',
        name:'auto Expo',
        description:'Loerfj fjlfj',
        date:"25 AUG 2022"
    },
    {
        _id:'2',
        name:'auto Expo',
        description:'Loerfj fjlfj',
        date:"25 AUG 2022"
    },
    {
        _id:'3',
        name:'auto Expo',
        description:'Loerfj fjlfj',
        date:"25 AUG 2022"
    },
    {
        _id:'4',
        name:'auto Expo',
        description:'Loerfj fjlfj',
        date:"25 AUG 2022"
    },
    {
        _id:'5',
        name:'auto Expo',
        description:'Loerfj fjlfj',
        date:"25 AUG 2022"
    }
  ]
    res.send(event_data)
}

exports.specialData = (req,res,next)=>{
    let spcl_data = [
      {
          _id:'1',
          name:'auto Expo',
          description:'Loerfj fjlfj',
          date:"25 AUG 2022"
      },
      {
          _id:'2',
          name:'auto Expo',
          description:'Loerfj fjlfj',
          date:"25 AUG 2022"
      },
      {
          _id:'3',
          name:'auto Expo',
          description:'Loerfj fjlfj',
          date:"25 AUG 2022"
      },
      {
          _id:'4',
          name:'auto Expo',
          description:'Loerfj fjlfj',
          date:"25 AUG 2022"
      },
      {
          _id:'5',
          name:'auto Expo',
          description:'Loerfj fjlfj',
          date:"25 AUG 2022"
      }
    ]
      res.send(spcl_data)
  }