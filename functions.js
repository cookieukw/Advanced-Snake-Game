if(!canvasSupport()){
  alert("Seu navegador não suporta o Canvas!")
  clearScreen()
  window.stop()
}


const canvas = document.getElementById('game');
const cookie = canvas.getContext('2d');
const block = 16;
const scoreConfig = {
drawInCanvas: true,
textColor: "white",
font: "4vh Arial",
text: "Score: "
}

var direction = {
  up: {
    x: 0,
    y: -block
  },
  down: {
    x: 0,
    y: block 
  },
  left:{
    x: -block,
    y: 0
  },
  right: {
    x: block,
    y: 0
  }
}

const array_y = montarCanvas(canvas.height);
var array_x = montarCanvas(canvas.width);

const randomDirection = getRandomDirection();


var snake = {
  
  directX: randomDirection.x,
  directY: randomDirection.y,
  cells: [],
  cellsSize: 1,
  posX: array_x[Math.floor(Math.random()*array_x.length)],
  
  posY: array_y[Math.floor(Math.random()*array_y.length)],
  velocity: 20
}


var apple = {
  
  posY: array_y[Math.floor(Math.random()*array_y.length)],
  
  posX: array_x[Math.floor(Math.random()*array_x.length)],
  
  color: 'white'
  
}

var env_apple = {
  posY: array_y[Math.floor(Math.random()*array_y.length)],
  
  posX: array_x[Math.floor(Math.random()*array_x.length)],
  color: 'red'
}

var fps = 0;
const fpsMax = 10;
var check_velocity = 0;


  function getRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

 function getPercentFromValue(init, end) { return (100 * init) / end;
} 

function getValueFromPercent(value, perc){
  return value * (perc/100)
}

function isOdd(numero){
  return (numero % 2);
}


function montarCanvas(csize){
  var number = Math.floor(csize/16);

var value = 0;
var array = []

for(var i = 0; i < number; i++){
	if(i == 0){
	array.push(0)
	} else { 
	value += 16
	array.push(value)
	}
	
	}
return array;
}

function getRandom(value) {
  var n = Math.floor(Math.random()*value);
  return n;
}

function log(m){
  console.log(m)
}


function drawSnake(){
  
  if (++fps < fpsMax) {
    return;
  }
  
  fps = 0;
  
cookie.clearRect(0,0,canvas.width,canvas.height);

drawScore(scoreConfig.drawInCanvas)
drawTextScore()

  snake.posX += snake.directX 
  snake.posY += snake.directY;
  
 const lastX = array_x[array_x.length-1];
 const lastY = array_y[array_x.length-1];
 
  if (snake.posX <= -block) {
    
    
snake.posX = lastX
  } 
  else if (snake.posX >= lastX+block) {
    snake.posX = -block;
  }
  
  
  if (snake.posY <= -block) {
    snake.posY = lastY;
    
  }
  else if (snake.posY >= lastY+block) {
    snake.posY = -block;
  }
  
  snake.cells.unshift({ posX: snake.posX, posY: snake.posY });

  if (snake.cells.length > snake.cellsSize) {
    snake.cells.pop();
    
  }
 cookie.strokeStyle = '#f5a442';
 cookie.lineWidth = 2;
 
 cookie.strokeRect(snake.posX, snake.posY, block, block)

    
  drawApple()
  drawEnvApple()
  //snake.cells.forEach(function(cell, index) {
for(var lop = 0; lop < snake.cells.length; lop++){
  
  var cell = snake.cells[lop]

if(lop == 0){
    cookie.fillStyle = '#f5a442'

} else {
  cookie.strokeStyle = 'black'
    
    
  if(isOdd(lop)){
  cookie.strokeStyle = '#bd0e02';
  } else {
  cookie.strokeStyle = "white"
  }

}   
 cookie.strokeRect(cell.posX, cell.posY, block, block);
    
    if (cell.posX === apple.posX && cell.posY === apple.posY) {
      
      
      snake.cellsSize++;
      drawRandomApple();
    }
    
    if (cell.posX == env_apple.posX && cell.posY == env_apple.posY) {
      
      drawRandomEnvApple();
      
      if(snake.velocity != 20){
        velocity++
        velocity++
      }
      if(snake.cells.length !=1){
       snake.cells.pop();
       snake.cellsSize -= 1
    }

    }
  }//);
  }


function drawRandomApple(){
  
  apple.posX = array_x[Math.floor(Math.random()*array_x.length)]
  
  apple.posY = array_y[Math.floor(Math.random()*array_y.length)]
  
 cookie.fillStyle= apple.color;
 
 cookie.fillRect(apple.posX, apple.posY, block, block);

}

function drawApple() {
  
cookie.fillStyle = apple.color;

cookie.fillRect(apple.posX, apple.posY, block, block);
}

function drawEnvApple() {
  
cookie.fillStyle = env_apple.color;
cookie.fillRect(env_apple.posX, env_apple.posY, block,block)
}

function drawRandomEnvApple(){
  
  env_apple.posX = array_x[Math.floor(Math.random()*array_x.length)]
  
  env_apple.posY = array_y[Math.floor(Math.random()*array_y.length)]
  

 cookie.fillStyle= env_apple.color;
 cookie.fillRect(env_apple.posX, env_apple.posY, block, block);
}

function drawScore(isDrawScore){
  if(!isDrawScore) return;
  
  cookie.fillStyle = scoreConfig.textColor;
  
  cookie.font = scoreConfig.font
  cookie.fillText(scoreConfig.text+ (snake.cellsSize - 1), array_x[2], array_y[3]);
  drawSnake()
}

function drawTextScore(){
  
  document.getElementById("score").innerHTML = scoreConfig.text+(snake.cellsSize-1)
}


function getRandomDirection() {
  const keys = Object.keys(direction)
  return direction[keys[Math.floor(Math.random()*keys.length)]]
}

function canvasSupport(){
  var c = document.createElement('canvas');
  return (c.getContext && c.getContext('2d'));
  
}

function clearScreen(){
  const el = document.getElementById("score");
  
  while (el.firstChild) {
    el.removeChild(el.lastChild);
    
  }
  var paragrafo = document.createElement("p");
  
  var texto = document.createTextNode(" Seu navegador não suporta o Canvas :(");
  paragrafo.appendChild(texto);
  paragrafo.setAttribute('id','txt');
  document.body.appendChild(paragrafo);
}

function isMobile(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
return true
} else {
return false;
}
}
