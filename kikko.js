//first();
//if(flg == 1)
function first()
{
  setTimeout(function()
  {
  document.getElementById("fall").style.WebkitAnimationPlayState="running";
  document.getElementById("fall").style.animationPlayState="running";
  }
,3000);

  setTimeout(function()
  {
  document.getElementById("mini").style.WebkitAnimationPlayState="running";
  document.getElementById("mini").style.animationPlayState="running";
  document.getElementById("fall2").style.WebkitAnimationPlayState="running";
  document.getElementById("fall2").style.animationPlayState="running";
  }
,9000);

    setTimeout(function()
  {
  document.getElementById("mini2").style.WebkitAnimationPlayState="running";
  document.getElementById("mini2").style.animationPlayState="running";
  document.getElementById("slide").style.WebkitAnimationPlayState="running";
  document.getElementById("slide").style.animationPlayState="running";
  }
,15000);
}



var socket = io.connect();
setInterval(function()
{
socket.emit("client_to_server", "poling");
socket.on("server_to_client", function(data){console.log(data)});
},5000);


/*
var connection = new WebSocket('ws://teppeishimakawa-kikko.glitch.me');
connection.send('サンプルデータ');



//通信が接続された場合
connection.onopen = function(e) { };
 
//エラーが発生した場合
connection.onerror = function(error) { };
 
//メッセージを受け取った場合
connection.onmessage = function(e) {console.log(e.data);};
  
//通信が切断された場合
connection.onclose = function() { };
*/

/*
        var sock = new WebSocket('ws://teppeishimakawa-kikko.glitch.me');

        // 接続
        sock.addEventListener('open',function(e){
            console.log('Socket 接続成功');
        });

        // サーバーからデータを受け取る
        sock.addEventListener('message',function(e){
            console.log(e.data);
        });
*/

