var express = require("express");
var bodyparser = require("body-parser");
var m1 = require("./module");
var app = express();
var path = require("path");
app.use(bodyparser.urlencoded({ extended: false }));

app.use(function (req, resp, next) {
  console.log(req.url + "-------->" + req.method);
  console.log(req.body);
  next();
});

app.get("/form", function (req, resp) {
  // const options = {
  //   root: path.join(__dirname),
  // };

  // const fileName = "E:\\WPT\\NodeJs\\Q8\\form.html";
  // resp.sendFile(fileName);

  resp.sendFile("./form.html", { root: __dirname });
});

app.post("/display", function (req, resp) {
  var rad = parseInt(req.body.Radius);
  var str = m1.calculation(rad);
  resp.send(str);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
