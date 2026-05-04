let nomeJogador = "João";
let xpJogador = 1001;
let nivelJogador = "";

if (xpJogador <= 1000) {
    nivelJogador = "Ferro";
} else if (xpJogador > 1000 && xpJogador <= 2000) {
    nivelJogador = "Bronze";
} else if (xpJogador > 2000 && xpJogador <= 5000) {
    nivelJogador = "Prata";
} else if (xpJogador > 5000 && xpJogador <= 7000) {
    nivelJogador = "Ouro";
} else if (xpJogador > 7000 && xpJogador <= 8000) {
    nivelJogador = "Platina";
} else if (xpJogador > 8000 && xpJogador <= 9000) {
    nivelJogador = "Ascendente";
} else if (xpJogador > 9000 && xpJogador <= 10000) {
    nivelJogador = "Imortal";
} else {
    nivelJogador = "Radiante";
}

console.log(`O jogador ${nomeJogador} está no nível ${nivelJogador} com ${xpJogador} pontos de experiência!`);