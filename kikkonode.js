
var multiparty = require('multiparty');
var http = require('http');
var util = require('util');
var fs = require('fs');
var term1;
var term2;
var term3;



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


  
  if(req.method === 'POST')
    {
   var form = new multiparty.Form();

    form.parse(req, function (err, fields, files) 
    {

          if (err) {
        res.end("invalid request " + err.message, 400)
        return
    }

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.end(util.inspect({fields: fields, files: files}));
        console.log(fields);
 
      term1=Object.assign(fields["btnn1"]);
      term2=Object.assign(fields["num1"]);
      term3=Object.assign(fields["num2"]);
      
      console.log(term1);
      console.log(term2);
      console.log(term3);


    });
      
       };
  
  
   if (req.method === 'GET')
  {
    fs.readFile("./index2.html", "utf-8", function (err, data)
    {
      res.writeHead(200, {"Content-Type": "text/html"});

      res.end
      (data + 
       "<script>" + 
       "if(" + term1 + "!== undefined){document.getElementById('line1').value=" +
       term1 + "}else{document.getElementById('line1').value=''}"+
        "if(" + term2 + "!== undefined){document.getElementById('line2').value=" +
       term2 + "}else{document.getElementById('line2').value=''}"+
      "if(" + term3 + "!== undefined){document.getElementById('line3').value=" +
       term3 + "}else{document.getElementById('line3').value=''}"+
       "</script>"
      );
      
    });
  } 
  
  

   }).listen(8080);


