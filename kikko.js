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




