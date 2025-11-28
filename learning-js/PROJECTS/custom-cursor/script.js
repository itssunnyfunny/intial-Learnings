var main = document.querySelector('#main')
var crsr = document.querySelector('.cursor')

main.addEventListener("mousemove",function(a){
  crsr.style.left  = a.x+"px"
  crsr.style.top  = a.y+"px"
})




