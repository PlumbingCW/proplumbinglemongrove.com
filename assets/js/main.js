(function(){
"use strict";
var root=document.documentElement;
root.classList.remove("no-js");
var tog=document.getElementById("navToggle"),dr=document.getElementById("mobDrawer"),ov=document.getElementById("mobOverlay"),cl=document.getElementById("mobClose");
function setMenu(open){
if(!tog||!dr||!ov){return;}
dr.classList.toggle("open",open);ov.classList.toggle("show",open);
tog.setAttribute("aria-expanded",open?"true":"false");
dr.setAttribute("aria-hidden",open?"false":"true");
root.style.overflow=open?"hidden":"";
if(open&&cl){cl.focus();}else if(!open){tog.focus({preventScroll:true});}
}
if(tog){tog.addEventListener("click",function(){setMenu(!dr.classList.contains("open"));});}
if(ov){ov.addEventListener("click",function(){setMenu(false);});}
if(cl){cl.addEventListener("click",function(){setMenu(false);});}
document.addEventListener("keydown",function(e){
if(e.key==="Escape"){
if(dr&&dr.classList.contains("open")){setMenu(false);}
var o=document.querySelectorAll(".has-drop.open");
for(var i=0;i<o.length;i++){o[i].classList.remove("open");o[i].querySelector(".navbtn").setAttribute("aria-expanded","false");}
}});
var mq=window.matchMedia("(min-width:901px)");
function onMq(){if(mq.matches){setMenu(false);}}
if(mq.addEventListener){mq.addEventListener("change",onMq);}else if(mq.addListener){mq.addListener(onMq);}
var dd=document.querySelectorAll(".has-drop>.navbtn");
for(var d=0;d<dd.length;d++){
dd[d].addEventListener("click",function(){
var li=this.parentNode,on=li.classList.toggle("open");
this.setAttribute("aria-expanded",on?"true":"false");
});}
document.addEventListener("click",function(e){
var o=document.querySelectorAll(".has-drop.open");
for(var i=0;i<o.length;i++){if(!o[i].contains(e.target)){o[i].classList.remove("open");o[i].querySelector(".navbtn").setAttribute("aria-expanded","false");}}
});
var qs=document.querySelectorAll(".faq-q");
for(var q=0;q<qs.length;q++){
qs[q].addEventListener("click",function(){
var item=this.parentNode,ans=item.querySelector(".faq-answer"),open=item.classList.toggle("open");
this.setAttribute("aria-expanded",open?"true":"false");
ans.style.maxHeight=open?ans.scrollHeight+"px":"0px";
});}
window.addEventListener("resize",function(){
var os=document.querySelectorAll(".faq-item.open .faq-answer");
for(var i=0;i<os.length;i++){os[i].style.maxHeight=os[i].scrollHeight+"px";}
});
})();
