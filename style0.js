var play=document.getElementById('play');
var resetscore=document.getElementById('play1');
play.onclick=()=>{
location.href="play.html";
}

resetscore.onclick=()=>{
localStorage.setItem('hscore',0);
alert("HighScore has been Reset!");
}