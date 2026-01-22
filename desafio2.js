let nome = "Capitão Caverna";
let vitorias = calcVitorias();
let derrotas = calcDerrotas();
let saldoVitorias;
let nivel;

calcRank(vitorias, derrotas);

function calcVitorias() {
    return Math.floor(Math.random() * 201);
}

function calcDerrotas() {
    return Math.floor(Math.random() * 201);
}

function calcRank (vitorias, derrotas) {
    nivel = Math.max(0, vitorias - derrotas);
}

console.log(vitorias);
console.log(derrotas);
console.log(nivel);

switch (true) {
    case nivel < 11 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Ferro");
        break;

    case nivel < 21 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Bronze");
        break;

    case nivel < 51 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Prata");
        break;

    case nivel < 81 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Ouro");
        break;

    case nivel < 91 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Diamante");
        break;

    case nivel < 101 :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Lendário");
        break;

    default :
        console.log("O Herói tem saldo de " + nivel + " vitórias e está no nível Imortal");
        break;
}