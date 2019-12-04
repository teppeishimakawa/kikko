
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require('fs');

http.createServer(function(req, res)
{

var url = req.url;
  console.log(url);
  console.log(req.method)


    fs.readFile("./index2.html", "UTF-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end(html);
    });


   if(req.method === 'POST')
    {

      var form = new multiparty.Form();

      form.parse(req, function(err, fields, files)
      {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.write(fields[0]);

      console.log(fields[0]);
      //console.log(files.name);
      //  "tmp/" + day + ".jpg"

      res.end(util.inspect({fields: fields, files: files}));
      })
    };
   }).listen(8080);