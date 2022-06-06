var canvas
var ctx

window.onload = function(){
    canvas = document.querySelector("#gameArea")
    ctx = canvas.getContext("2d")
    document.addEventListener("keydown", keyPush)

    setInterval(game, 1000/10)


}


// velocidade
var xvel = 0
var yvel = 0

// posição inicial
var xpos = 10
var ypos = 10

// tamanho de cada quadrado
var gridSize = 20

//total de quadrados
var totalGrid = 20

//posição inicial maçã
var xApple = 15
var yApple = 15

//caminho percorrido
var trail = []

//tamanho inicial da cobra
var tail = 5

//pontos
var pt = 0
var rec = pt


function game(){

    xpos += xvel
    ypos += yvel

    if(xpos < 0){
        xpos = totalGrid -1
    }
    if(xpos > totalGrid -1){
        xpos = 0
    }
    if(ypos < 0){
        ypos = totalGrid -1
    }
    if(ypos > totalGrid -1){
        ypos = 0
    }

    ctx.fillStyle="black"
    ctx.fillRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = "lime"
    for( var i = 0; i < trail.length; i++ ){
        ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize -2, gridSize -2)
        
if(trail[i].x == xpos && trail[i].y == ypos){
      
   tail=5
   pt=0
   document.getElementById("pt").innerText=pt
 }
}

    trail.push({x: xpos, y: ypos})
    while(trail.length > tail){
        trail.shift()
    }

    if(xApple == xpos && yApple == ypos){
        tail++
    pt++
    document.getElementById("pt").innerText="Pts = "+pt

    if( pt >= 0 && pt > rec ){
    rec = pt
    document.getElementById("rec").innerText="Record = "+rec
    }

        xApple= Math.floor(Math.random()*totalGrid) 
        yApple= Math.floor(Math.random()*totalGrid)
    
    }

    ctx.fillStyle = "red"
    ctx.fillRect(xApple * gridSize, yApple * gridSize, gridSize-2, gridSize-2)

}

function keyPush(){
    switch (event.keyCode) {
        //esquerda
        case 37:
            xvel = -1
            yvel = 0
            break;
    
        //cima
        case 38:
            xvel = 0
            yvel = -1
            break;
        //direita
        case 39:
            xvel = 1
            yvel = 0
            break;
        //baixo
        case 40:
            xvel = 0
            yvel = 1
            break;
    
    }
}

function esquerda(){
     xvel = -1
     yvel = 0
}

function cima(){
     xvel = 0
     yvel = -1
}

function direita(){
     xvel = 1
     yvel = 0
}

function baixo(){
     xvel = 0
     yvel = 1
}