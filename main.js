

if(isMobile()){
  setMobileControls()

  canvas.style.width = '400px'
  canvas.style.height = '400px'
} else {
document.getElementById('controls').remove()
  setControls()
  canvas.style.width = '85vh'
  canvas.style.height = '85vh'
}

function game(){
  
requestAnimationFrame(game)

drawSnake()

}

requestAnimationFrame(game)
