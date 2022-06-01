

if(isMobile()){
  setMobileControls()
} else {
document.getElementById('controls').remove()
  setControls()
}

function game(){
  
requestAnimationFrame(game)

drawSnake()

}

requestAnimationFrame(game)
