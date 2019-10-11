var score=document.getElementById('score');
var getScore=localStorage.getItem('score');
var highscore=localStorage.getItem('hscore');
if(parseInt(getScore)>parseInt(highscore)){
localStorage.setItem('hscore',getScore);
}
var c;
c=0;
setInterval(()=>{
c++;
    if(c<=getScore){
        score.innerHTML=c;
    }
},50)

document.getElementById("play").onclick=()=>{
    location.href="index.html";
}