const cima = function() {
  if (snake.directX == direction.down.x && snake.controlLock) return
  snake.directX = direction.up.x;
  snake.directY = direction.up.y;
}
const baixo = function() {
  if (snake.directX == direction.up.x && snake.controlLock) return
  snake.directX = direction.down.x;
  snake.directY = direction.down.y
}
const esquerda = function() {
  if (snake.directY == direction.left.y && snake.controlLock) return
  snake.directX = direction.left.x;
  snake.directY = direction.left.y;
}
const direita = function() {
  if (snake.directY == direction.right.y && snake.controlLock) return
  snake.directX = direction.right.x;
  snake.directY = direction.right.y;
}

function setMobileControls() {
  const btn_cima = document.getElementById("cima");
  const btn_baixo = document.getElementById("baixo");
  const btn_esquerda = document.getElementById("esquerda");
  const btn_direita = document.getElementById("direita");
  btn_cima.addEventListener("click", cima);
  btn_baixo.addEventListener("click", baixo);
  btn_esquerda.addEventListener("click", esquerda);
  btn_direita.addEventListener("click", direita);
}

function setControls() {
  document.addEventListener('keydown', function(e) {
    if (e.which === 37) {
      /*left/esquerda*/
      esquerda()
    }
    if (e.which === 38) {
      /*up/cima*/
      cima()
    }
    if (e.which === 39) {
      /*right/direita*/
      direita()
    }
    if (e.which === 40) {
      /*down/baixo*/
      baixo()
    }
  });
}

function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false;
  }
}
