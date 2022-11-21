let lazy=document.getElementById("photo")
var left=0
var topPx=0
let bottomPx=0
document.body.onkeydown=(e)=>{
    if (e.keyCode === 37) {
     
        left += 5;
        console.log(left);
        lazy.style.left = `${left}%`;   
     }
        if (e.keyCode === 40) {
          
            topPx += 5;
            console.log(topPx);
    
            lazy.style.top = `${topPx}%`;  
          }
          if (e.keyCode === 39) {
     
            left += 5;
            console.log(left);
            lazy.style.left = `${left}%`;   
         }
            if (e.keyCode === 39) {
              
               right += 5;
               
        
                lazy.style.right = `${right}%`;  
              }
              if (e.keyCode === 38) {
              
                bottomPx += 5;
                
         
                 lazy.style.bottomPx = `${bottomPx}%`;  
               }
}
console.log("hellou")