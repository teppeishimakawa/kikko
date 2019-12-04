
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require('fs');

http.createServer(function(req, res)
{



var url = req.url;
  console.log(url);
  console.log(req.method)


  /*
    if ("/" == url)
  {
    fs.readFile("./index.html", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  } else if ("/kikko.js" == url)
  {
    fs.readFile("./kikko.js", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.write(data);
      res.end();
    });
  }
  */

  if ("./index2.html" == url)
  {
    fs.readFile("./index2.html", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
    });
  }

  if(req.method === 'POST')
    {
   var form = new multiparty.Form();

    form.parse(req, function(err, fields, files) {

          if (err) {
        res.end("invalid request " + err.message, 400)
        return
    }

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.end(util.inspect({fields: fields, files: files}));
        console.log(fields);
        console.log(fields["num1"]);
        res.end()
    });

       };

   }).listen(8080);


