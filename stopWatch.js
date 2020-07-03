 window.onload = function()
{
    //Initial sec, msec 
var milSeconds=00;


var appendSeconds=document.getElementById("seconds");
var appendMilseconds=document.getElementById("mSeconds");

var buttonStart = document.getElementById("btnStart");
var buttonStop = document.getElementById("btnStop");
var buttonReset= document.getElementById("btnReset");
var sessionData = document.getElementById("lastsession");
var lapsTime= document.getElementById("btnlaps");
var Interval;


buttonStart.onclick=function()
{
    
    Interval=setInterval(startTimer, 10);
}
// Function to start the timer
 function startTimer()
{
    milSeconds++;

    if(milSeconds<9)
    {
        appendMilseconds.innerHTML="0"+milSeconds;
    }
   
    if(milSeconds>9)
    {
        appendMilseconds.innerHTML=milSeconds;
    }
    
     if(milSeconds>99)
    {
        seconds++;
        appendSeconds.innerHTML="0"+ seconds;
        milSeconds = 0;
        appendMilseconds.innerHTML=0+ milSeconds;
    }
    if(seconds > 9)
    {
        appendSeconds.innerHTML=seconds;                                  
    }
    
}
//Stop Function

buttonStop.onclick=function()
{
    clearInterval(Interval);  
}
//Rest Function
buttonReset.onclick=function()
{
    clearInterval(Interval);
    seconds="00";
    milSeconds="00";
    appendSeconds.innerHTML=seconds;
    appendMilseconds.innerHTML=milSeconds;
    
}
//Function to calculate laps time

lapsTime.onclick=function()
{
    sessionData.innerHTML+= "<li>" + seconds +":"+ milSeconds + "</li>";

}

}