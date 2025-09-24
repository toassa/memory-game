const gamer1 = localStorage.getItem("gamer1") || "Jogador 1";
const gamer2 = localStorage.getItem("gamer2") || "Jogador 2";

const cards = document.querySelectorAll(".game-card");
const mensagemJogador = document.getElementById("gamer-turn");

let jogadorAtual = gamer1;
let simboloAtual = "X";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

mensagemJogador.textContent = `Vez de: ${jogadorAtual}`;
atualizarMensagem("Vez de:", simboloAtual);

const combinacoesVencedoras = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function checarVitoria(simbolo) {
    return combinacoesVencedoras.some(combinacao =>
    combinacao.every(index => tabuleiro[index] === simbolo)
    );
}

function clicarCard(event) {
    const botao = event.target;
    const index = [...cards].indexOf(botao);

    if (tabuleiro[index] !== "") return;

    botao.textContent = simboloAtual;
    botao.classList.add(simboloAtual.toLowerCase());
    tabuleiro[index] = simboloAtual;

    if (checarVitoria(simboloAtual)) {
        atualizarMensagem("Vencedor:", simboloAtual);
        cards.forEach(c => c.disabled = true);
        document.getElementById("new-game").style.display = "block";
        return;
    }

    if (tabuleiro.every(c => c !== "")) {
    mensagemJogador.textContent = "Deu velha...";
    return;
    }

    if (jogadorAtual === gamer1) {
        jogadorAtual = gamer2;
        simboloAtual = "O";
    } else {
        jogadorAtual = gamer1;
        simboloAtual = "X";
    }

    atualizarMensagem("Vez de:", simboloAtual);

}

cards.forEach(card => {
    card.addEventListener("click", clicarCard);
});

function atualizarMensagem(texto, simbolo) {
  mensagemJogador.innerHTML = `${texto} <span class="${simbolo.toLowerCase()}">${jogadorAtual}</span>`;
}
