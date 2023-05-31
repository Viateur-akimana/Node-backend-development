let express = require('express');
let app = express();
let dontev = require("dotenv").config();
const bodyParser = require("body-parser")
        // #4
app.use(bodyParser.urlencoded({extended:false}));
 app.use(express.static("/public"));
// #8
app.use((req, res, next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});


     // #3
 app.get("/",(req,res)=>{
 res.sendFile(__dirname + '/views/index.html');
 })
      // #5
 app.use("/public", express.static(__dirname + "/public"));
//#6
// app.get("/json",(req,res)=>{
//   res.json({"message" : "Hello json"});
// })

//#7
// app.get("/json",(req,res)=>{
//   if(process.env.MESSAGE_STYLE == "uppercase"){
//    res.json({"message" : "HELLO JSON"}); 
//   }
//  res.json({"message" : "Hello json"});
//  })

//#8
// app.get("/now",(req,res,next)=>{
//   req.time=new Date().toString();
//   next();
// },(req,res)=>{
//   res.json({"time":req.time});
// })
app.get("/:word/echo",(req,res)=>{
  res.json({echo:req.params.word})
})
app.get("/name",(req,res)=>{
  res.json({name:req.query.first + " "+ req.query.last});
})
//#12
app.post("/name",(req,res)=>{
  res.json({name:req.body.first+ " "+req.body.last});
})






























 module.exports = app;
