document.addEventListener("DOMContentLoaded", function(){

const imagens = [
"img/Elise_cap.png",
"img/helena_maravilha.png",
"img/gabriel_super.png",
"img/Capitao_américa_1.png",
"img/dr_1.png",
"img/Drax_1.png",
"img/groot.png",
"img/homen_aranha_1.png",
"img/homen_de_ferro_1.png",
"img/Loky_1.png",
"img/nebulosa_1.png",
"img/rocket.png",
"img/thor.png"
];

const board = document.getElementById("gameBoard");

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;
let pares = 0;

function embaralhar(array){
return array.sort(() => 0.5 - Math.random());
}

function criarTabuleiro(){

board.innerHTML = "";
pares = 0;

let cartas = embaralhar([...imagens, ...imagens]);

cartas.forEach(img => {

let card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<div class="card-inner">
<div class="card-front">
<img src="${img}">
</div>
<div class="card-back">
<img src="img/Avengers.png">
</div>
</div>
`;

card.addEventListener("click", function(){
virarCarta(card, img);
});

board.appendChild(card);

});
}

function virarCarta(card, img){

if(bloqueado) return;
if(card.classList.contains("flip")) return;

card.classList.add("flip");

if(!primeiraCarta){
primeiraCarta = {card, img};
} else {
segundaCarta = {card, img};
verificarPar();
}
}

function verificarPar(){

bloqueado = true;

if(primeiraCarta.img === segundaCarta.img){

pares++;
resetar();

if(pares === imagens.length){
document.getElementById("telaVitoria").classList.add("active");
}

} else {

setTimeout(() => {
primeiraCarta.card.classList.remove("flip");
segundaCarta.card.classList.remove("flip");
resetar();
}, 1000);

}
}

function resetar(){
primeiraCarta = null;
segundaCarta = null;
bloqueado = false;
}

window.reiniciar = function(){
document.getElementById("telaVitoria").classList.remove("active");
criarTabuleiro();
}

criarTabuleiro();

});