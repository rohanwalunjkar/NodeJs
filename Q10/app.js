const express = require("express");
var app = express();
var fs = require("fs");
const http = require("http");
var m1 = require("./module");
url = require("url");

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/index", function (req, resp) {
  resp.sendFile("/index.html", { root: __dirname });
});

app.get("/display", function (req, resp) {
  // resp.send("<h1>Result</h1>");
  //   console.log(req);
  var a = parseInt(req.query.num);
  console.log(a);
  var str = m1.Prime(a);
  console.log(str);
  resp.send(str);
  //   resp.send(`<p> Result: ${str}</p>`)
});

app.listen(3002, function () {
  console.log("Server is running at port 3000");
});
