/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
im=document.getElementById("im");
let color="white";
document.addEventListener("click",function (e){
    if(e.target.tagName!=="INPUT") return ;
    color=e.target.dataset.color;
},false);
im.addEventListener("mousedown",function (e){
    e.preventDefault();
    im.onmousemove=draw;
},false);
document.addEventListener("mouseup",function (e){
    e.preventDefault();
    im.onmousemove=null;
},false);



function draw(e) {
    e.preventDefault();
    a=document.createElement("pre");
    a.innerHTML="   ";
    a.style.backgroundColor=color;
    a.style.position="absolute";
    a.style.borderRadius="10px";
    a.style.zIndex="1000px";
    a.style.top=e.clientY-15+"px";
    a.style.left=e.clientX-10+"px";
    document.body.appendChild(a);
}

//var set=setInterval(()=>document.dispatchEvent(event),10);