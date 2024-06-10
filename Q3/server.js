// const { hostname } = require("os");
// var c1 = require("./circle");
// var r1 = require("./rectangle");
// var t1 = require("./triangle");
// var http = require("http");
// var url = require("url");

// var area = c1.calArea(7);

// var server = http.createServer(function (req, resp) {
//   console.log(req.url + "-------------->" + req.method);
//   resp.writeHeader(200, { "content-type": "text/html" });

//   var q = url.parse(req.url);

//   document.write("Circle: ")
//   resp.write(`<h1>${c1.calArea(7)}</h1>`);
//   resp.write(`<h1>${c1.calCir(7)}</h1>`);
// });

// server.listen(3003, function () {
//   console.log("Server is running on port 3003");
// });

const express = require("express");
const app = express();
const bodyparser = require("body-parser");

var c1 = require("./circle");
var r1 = require("./rectangle");
var t1 = require("./triangle");

app.use(bodyparser.urlencoded({ extended: false }));

app.get("/form", function (req, resp) {
  resp.sendFile("/form.html", { root: __dirname });
});

app.get("/index", function (req, resp) {
  var arr = req.query.ra;
  console.log(arr);

  // var type = arr.value;

  switch (arr) {
    case "circle":
      circle = `<div style=margin-left:500px>Area of circle : ${c1.calArea(
        4
      )} <br> Circumference of circle : ${c1.calCir(
        4
      )} <br> Diameter of circle : ${c1.calDia(4)}</div>`;
      resp.send("<div>" + circle + "</div>");
      break;

    case "rectangle":
      rectangle = `<div>Area of rectangle : ${r1.calArea(
        4,
        6
      )} <br> Perimeter of rectangle : ${r1.calPeri(4, 6)}</div>`;
      resp.send("<div>" + rectangle + "</div>");
      break;

    case "triangle":
      triangle = `<div>Equilateral : ${t1.isEqui(
        6,
        6,
        6
      )} <br> Perimeter of triangle : ${t1.calPeri(4, 4, 5)}</div>`;
      resp.send("<div>" + triangle + "</div>");
      break;
  }
});

app.listen(3005, function () {
  console.log("Server is running at port 3004");
});
