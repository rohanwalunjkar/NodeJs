var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var m1 = require("./module");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(function (req, resp, next) {
  console.log(req.url + "------------>" + req.method);
  console.log(req.body);
  next();
});

app.get("/form", function (req, resp) {
  resp.sendFile("./form.html",{root:__dirname});
   
});

app.post("/submit-data",function(req,resp){
    var uname=req.body.uname;
    var pass=req.body.pass;
    var answer=(m1.validateData(uname,pass));
    if(answer!=null){
        resp.send("<h1>Login Successful!!</h1>");
    }

    else{
        resp.send("<h1>Login failed!!!</h1>")
    }

})

app.listen(3001,function(){
    console.log("Server is running at port 3001");
})
