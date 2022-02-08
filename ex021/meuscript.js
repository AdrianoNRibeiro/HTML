function mudaCor(cor) {
    var elemento = document.getElementById("texto01");
    elemento.style.color = cor;
}

function mudaFundo(cor) {
    var elemento = document.getElementById("texto02");
    elemento.style.backgroundColor = cor;
}

function enviarNome() {
    var elemento = document.getElementById("texto03");
    alert(`${elemento.value} seu nome foi salvo!`);
}

function limparNome() {
    var elemento = document.getElementById("texto03");
    elemento.value = "";
}