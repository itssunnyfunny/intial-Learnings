var elem = document.querySelectorAll('.elem')

elem.forEach( function(val){
   val.addEventListener("mouseenter",function(){
       val.childNodes[3].style.opacity = 1
   })

   val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity = 0
})

val.addEventListener("mousemove",function(a){
   val.childNodes[3].style.left = a.x+"px"
//    val.childNodes[3].style.top = a.y+"px"
})
})




























//  var elem1= document.querySelector('#elem1')
//  var elemImage = document.querySelector('#elem1 img')

//  elem1.addEventListener("mousemove",function(a){
//    elemImage.style.left = a.x+"px"
//    elemImage.style.top = a.y+"px"


//  })
//  elem1.addEventListener("mouseenter",function(a){
//     elemImage.style.opacity = 1
 
    
//   })
//   elem1.addEventListener("mouseleave",function(a){
//     elemImage.style.opacity = 0
 
    
//   })