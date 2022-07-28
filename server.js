//for http module and file system module
// var http = require("http");
// var fs = require("fs");

// http
//   .createServer((req, res) => {
//     fs.readFile("text.tst", (err, data) => {
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(4000);

// for URL module
// var url = require("url");

// var address = "http://localhost:4000/home.html?year=2000&month=feb";

// var q = url.parse(address, true);

// console.log(q.pathname);

// console.log(q.search) // used to know  which params we are send

// nodejs npms

var http = require("http");

var uc = require("upper-case");

http
  .createServer((req, res) => {
    res.write(uc.upperCase("hello indhu"));
    res.end();
  })
  .listen(4000);
