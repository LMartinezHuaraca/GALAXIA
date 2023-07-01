jupiter = document.getElementById("jupiter")

console.log(jupiter.style)
document.getElementById("jupiter").addEventListener("click",cambiar)
var i=1;
function cambiar(){
    
   if(i==1){
    jupiter.style.scale="0";
    jupiter.style.transition="3s"
    i = i+1;
   }else{
    jupiter.style.scale="0";
    i=i-1
   }}

   tierra = document.getElementById("tierra")

console.log(tierra.style)
document.getElementById("tierra").addEventListener("click",destruirTierra)

function destruirTierra(){
    tierra.style.scale="2"
    tierra.style.opacity="0"
    tierra.style.transition="5s"
    tierra.style.backgroundColor="red"
}


var venus =document.getElementById("venus")
function destruirVenus(){
    venus.style.left="-180px";
    venus.style.borderStyle="solid";
    venus.style.filter="blur(6px)"
    venus.style.borderColor="orange"
    venus.style.borderLeftWidth="150px"
    venus.style.transition="10s"
}
venus.addEventListener("click",destruirVenus)


var saturno = document.getElementById("saturno")

function destruirSaturno(){
   
    saturno.style.width="0px"
    saturno.style.transition="5s"
    
}
document.getElementById("saturno").addEventListener("click",destruirSaturno)