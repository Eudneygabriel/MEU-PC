function toggleText() {
    var texto = document.getElementById("texto");

    // Alterna a visibilidade do texto
    if (texto.style.display === "none") {
        texto.style.display = "block";
    } else {
        texto.style.display = "none";
    }
}

var botao = document.getElementById("mudarCorBotao");

botao.addEventListener("click", function() {

    if (botao.classList.contains("button-blue")) {
        botao.classList.remove("button-blue");
        botao.classList.add("button-red");
    } else {
        botao.classList.remove("button-red");
        botao.classList.add("button-blue");
    }
})