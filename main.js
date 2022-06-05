

if(isMobile()){
  setMobileControls()

  canvas.style.width = '300px'
  canvas.style.height = '300px'
} else {
document.getElementById('controls').remove()
  setControls()
  canvas.style.width = '85vh'
  canvas.style.height = '80vh'
}

function game(){
  
requestAnimationFrame(game)

drawSnake()

}

requestAnimationFrame(game)
