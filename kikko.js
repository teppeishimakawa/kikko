var flg;
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


var flgg2=0;

var socket = io.connect();
setInterval(function()
{
socket.emit("client_to_server", "poling");
socket.on("server_to_client", function(data)
  {
    console.log("rxdata:" + data)
    console.log(status);
  //data:トリガ信号,flgg:再生ステータス1がstp
    if(data == "1" && flgg2 == 0)
    {
    first();
    flgg=1;
    //location.reload();
    }
  });

},10000);

