function setMobileControls(){
  const cima = document.getElementById("cima");
const baixo = document.getElementById("baixo");

const esquerda = document.getElementById("esquerda");
const direita = document.getElementById("direita");


cima.addEventListener("click",function() {
    snake.directX = direction.up.x;
    snake.directY = direction.up.y;

});

baixo.addEventListener("click",function(){
    snake.directX = direction.down.x;
    snake.directY = direction.down.y
});

esquerda.addEventListener("click",function() {
 
    snake.directX = direction.left.x;
    snake.directY = direction.left.y;

});

direita.addEventListener("click",function() {
    snake.directX = direction.right.x;
    snake.directY = direction.right.y;
});
}

function setControls(){
  
  document.addEventListener('keydown', function(e) {
    if (e.which === 37 && snake.directX === 0) {
      /*left/direita*/
      snake.directX = direction.left.x;
      snake.directY = direction.left.y;
      
    }
    
   if (e.which === 38 && snake.directY === 0){
     /*up/cima*/
     snake.directX = direction.up.x;
     snake.directY = direction.up.y;
  } 
  
  if (e.which === 39 && snake.directX === 0){
    /*right/direita*/
    snake.directX = direction.right.x;
    snake.directY = direction.right.y;
    }
    
 if (e.which === 40 && snake.directY === 0) {
   /*down/baixo*/
    snake.directX = direction.down.x;
    snake.directY = direction.down.y;
 }

  
}); 
  
}
