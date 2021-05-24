let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //renderiza o desenho dentro do canvas
let box = 32; //32px cada quadrado
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen"; //cor do contrxto
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

criarBG();
criarCobrinha();