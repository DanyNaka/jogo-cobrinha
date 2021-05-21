let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");  //renderiza o desenho dentro do canvas
let box = 32; //32px cada quadrado

function criarBG(){
    context.fillStyle = "lightgreen"; //cor do contrxto
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();