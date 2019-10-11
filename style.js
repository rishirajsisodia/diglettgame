var score = document.getElementById('score');
var highscore = document.getElementById('h_score');
var diglett=document.getElementsByClassName("diglett");
var addscore=document.getElementById("addscore");
var plus=document.getElementsByClassName("plus");
var holes=document.getElementsByClassName("holes");
var c;
// SCORE COUNTER FOR EVERY CLICK;
c=0;
for(let i=0;i<diglett.length;i++){

diglett[i].addEventListener('click',function(){
c++;
if(c<10){
score.innerHTML="Score: "+"00"+c;
}
else if(c<100){
score.innerHTML="Score: "+"0"+c;        
}
else{
score.innerHTML="Score: "+c;        
}
this.style.display="none";
console.log("value: "+ i);
localStorage.setItem('score',c);

// PLUS FADEOUT MODULE
plus[i].style.display="block";
setTimeout(()=>{
plus[i].style.display="none";
},300);
});

//DIGLETT VANISH ON CLICK
setInterval(function(){
for(var k=0;k<diglett.length;k++){
diglett[k].style.display="none";
}
var show=Math.floor(Math.random() * diglett.length);
diglett[show].style.display="block";
},1000);
    
}

// SCORE COUNTER ENDS;

var gethigh=localStorage.getItem('hscore');
if(gethigh<10){
h_score.innerHTML="HighScore: "+"00"+gethigh;
}
else if(c<100){
h_score.innerHTML="HighScore: "+"0"+gethigh;        
}
else{
h_score.innerHTML="HighScore: "+gethigh;        
}










////EXPERIMENTAL ZONE BELOW ============================================================================
//var mod1=document.createElement('div');
//mod1.id="plus";
//var text=document.createElement('p');
//var ptext=document.createTextNode("+1");
//text.appendChild(ptext);
//mod1.appendChild(text);
//this.appendChild(mod1);
//======================================================================================================

var time=document.getElementById('time');
var count=30;
setInterval(()=>{
    count--;
    if(count>=0){
        if(count<10){
    time.innerHTML="Remaining: 00:"+"0"+count;
        }
        else{
    time.innerHTML="Remaining: 00:"+count;
        }
    }
    else{
    window.location.href = "score.html";
    }
},1000);




