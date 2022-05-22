let myClock= document.querySelector("#myClock")
var today = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day=days[today.getDay()];
var time =day +"," +today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
myClock.innerHTML=time