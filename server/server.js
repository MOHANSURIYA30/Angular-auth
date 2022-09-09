const { application } = require('express')
const express = require('express')
const mongoose = require('mongoose');
const cors =require('cors');
const PORT = 3000

const api = require('./routes/api');



const app = express()

app.use(cors()
)
mongoose.connect("mongodb://localhost:27017/auth", err =>{
    if(err)
    {
        console.log("Cannot connect to db!!!!!");
    }
    else
    {
        console.log("Connected to DB");
    }
});




app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({extended: true} ));

// ALTERNATE USER CORS
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
  
//     next();
    
//   });
app.use("/api",api);

app.get('/',(req,res,next)=>{
    res.send("HELLO FROM SERVER");
})

app.listen(PORT,()=>{
    console.log("Server running on loaclhost:"+PORT);
}) 