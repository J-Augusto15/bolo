/* 
const imagens = [
    "imagens/bolo1.jpg",
    "imagens/bolo2.jpg",
    "imagens/bolo3.jpg",
    "imagens/bolo4.jpg",
    "imagens/bolo5.jpg"
];

let indice = 0;

function mostrarImagem() {
    document.getElementById("slide").src = imagens[indice];
}

function avancar() {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    mostrarImagem();
}

function voltar() {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    mostrarImagem();
}