var multiparty = require("multiparty");
var http = require("http");
var util = require("util");
var fs = require("fs");
var term1;
var term2;
var term3;
var flg;



var server=http.createServer(function(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.setHeader('Access-Control-Allow-Headers', '*')
  

    var url = req.url;
    console.log(url);
    console.log(req.method);
    console.log(req.headers['content-type']);

   /*
    var target = '';

  switch (url) {
    case '/':
      target = './index2.html';
      break;
    case '/index.html':
      target = './index.html';
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('bad request');
      return;
  }*/



      //html
      if("/index.html" == url)
      {
          fs.readFile("./index.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      }else if("/img/KLK_01.png" == url)
      { 
          fs.readFile("./img/KLK_01.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/next.png" == url)
      { 
          fs.readFile("./img/next.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }






   //html2
    if ("/" == url && req.method === "GET")
    {
      fs.readFile("./index2.html", "utf-8", function(err, data)
      {
        if (err) {
          res.end("invalid request " + err.message, 400);
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });

        res.write(
         data.replace(
            "<script></script>",
            "<script>" +
              "if(" +
              "'" +
              term1 +
              "'" +
              " !== undefined){document.getElementById('line1').value=" +
              "'" +
              term1 +
              "'" +
              "}else{document.getElementById('line1').value='noOrder'};" +
              "if(" +
              "'" +
              term2 +
              "'" +
              " !== undefined){document.getElementById('line2').value=" +
              "'" +
              term2 +
              "'" +
              "}else{document.getElementById('line2').value=''};" +
              "if(" +
              "'" +
              term3 +
              "'" +
              " !== undefined){document.getElementById('line3').value=" +
              "'" +
              term3 +
              "'" +
              "}else{document.getElementById('line3').value=''};" +
              "</script>"
          )
        );
        res.end();
      });
      //html2
    }




     //html_page2.html
      if("/index_page2.html" == url)
      {
          fs.readFile("./index_page2.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);

      res.end();
         });
      }
      //html






     //html_page2_bunsyo.html
      if("/index_page2_bunsyo.html" == url)
      {
          fs.readFile("./index_page2_bunsyo.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      //html
      }else if("/img/KLK_02.png" == url)
      {
          fs.readFile("./img/KLK_02.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         });
      }else if("/img/return.png" == url)
      { 
          fs.readFile("./img/return.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }








     //html_page2.html
      if("/index3.html" == url)
      {
          fs.readFile("./index3.html", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
         });
      //html
      }else if("/kikko.js" == url)
      {
          fs.readFile("./kikko.js", "UTF-8", function (err, data)
         {
      res.writeHead(200, {"Content-Type": "text/plain"});
      if(flg == 1){res.write(data.replace("var flg;","first()"));}else
       {
      res.write(data);
       }
      res.end();
         });
      }else if("/img/syoyu2.png" == url)
      {
          fs.readFile("./img/syoyu2.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         });
      }else if("/img/syoyu1.png" == url)
      { 
          fs.readFile("./img/syoyu1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/KLK_03.png" == url)
      { 
          fs.readFile("./img/KLK_03.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/buy1.png" == url)
      { 
          fs.readFile("./img/buy1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/buy2.png" == url)
      { 
          fs.readFile("./img/buy2.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }else if("/img/sina1.png" == url)
      { 
          fs.readFile("./img/sina1.png", function (err, data)
         {
          res.writeHead(200, {"Content-Type": "image/png"});
          res.end(data);
         }); 
      }
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

  //clientからのデータ受信
    if (req.method === "POST") {
      var form = new multiparty.Form();

      form.parse(req, function(err, fields, files) {
        if (err) {
          res.end("invalid request " + err.message, 400);
          return;
        }

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.end(util.inspect({fields: fields, files: files}));
        //console.log(fields);

        term1 = Object.assign(fields["btnn1"]);
        term2 = Object.assign(fields["num1"]);
        term3 = Object.assign(fields["num2"]);

        console.log(term1);
        console.log(term2);
        console.log(term3);
      });
    }
     

  
  //制御pcからのstart信号
      if (req.headers["content-type"] == "application/json") 
    {
          req.setEncoding("utf-8");
    req.on("data", function(chunk)
        {
        var data = JSON.parse(chunk);
        console.log(data.flg);
        flg = Object.assign(data.flg);
        });     
    }  
  
  
  /*
        fs.readFile("./index2.html", "utf-8", function(err, data) 
        {
        if (err) 
        　{
          res.end("invalid request " + err.message, 400);
          return;
        　}
        res.end("./index2.html",data.replace("<script></script>","<p>aaaaaaa</p>"));             
        });
  */
  
  })
  .listen(8080);



//poling
//clientに向けてstart:flg 1,stop:flg 0送信
var socketio = require('socket.io');
var io = socketio.listen(server);
io.sockets.on('connection', function(socket)
{
    socket.on('client_to_server', function(data) {
      //on:受信、emit:送信
      //サーバログに受信データ表示
        console.log("rxdata" + data);
        io.sockets.emit('server_to_client',flg);
    });
});
