var arr = [
    {
        dp:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",

        story:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww"
    },

    {
        dp:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",

        story:"https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",

        story:"https://images.unsplash.com/photo-1617253121679-fe010ebe7324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1614426007375-904fd4934df9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",

        story:"https://images.unsplash.com/photo-1621784564114-6eea05b89863?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        dp:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",

        story:"https://images.unsplash.com/photo-1628336358375-1a026860ccc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
       
    }
]

   var clutter = ""
   arr.forEach(function(elem,idx){
     clutter +=` <div class="story">
     <img id="${idx}" src="${elem.dp}" alt="">
</div>`
   })
   
   var storiyan= document.querySelector("#storiyan")

   storiyan.innerHTML = clutter;

   storiyan.addEventListener("click",function(dets){
      document.querySelector("#full-screen").style.display = "block"
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

      setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
      },2000)
   });