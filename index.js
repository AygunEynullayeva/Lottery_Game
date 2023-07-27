var baslat=document.querySelector('.start')
var dayan=document.querySelector('.stop')
var lottery=document.querySelector('.lottery')
var arr=[]
baslat.onclick=function(){
var x=setInterval(function(){
 var reqem=Math.floor(Math.random()*(100-1)+1)
 if(arr.includes(reqem)==false){
  arr.push(reqem)
  var dash=document.createElement('div')
  dash.classList.add('yumru')
  dash.innerText=reqem
  lottery.append(dash)


 }
}, 1000)
dayan.onclick=function(){
 clearInterval(x)
}
}
