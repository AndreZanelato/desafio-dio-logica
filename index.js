let nome = "Capitão Caverna";
let xp = 150;
let aleatorizador = 0;

for (let i = 0; i < 5; i++){
    aleatorizador = Math.floor(Math.random()*2);
    if (aleatorizador < .15) xp -= xp * .05;
    else xp += xp * 3;

    if (xp < 0) xp = 0;

    xpResult = xp.toFixed(0);
    console.log(xpResult);
}

switch (true) {
    case xp < 1000 :
        console.log("O Herói " + nome + " está no nível Ferro");
        break;

    case xp < 2000 :
        console.log("O Herói " + nome + "está no nível Bronze");
        break;

    case xp < 5000 :
        console.log("O Herói " + nome + "está no nível Prata");
        break;

    case xp < 7000 :
        console.log("O Herói " + nome + "está no nível Ouro");
        break;

    case xp < 8000 :
        console.log("O Herói " + nome + "está no nível Platina");
        break;

    case xp < 9000 :
        console.log("O Herói " + nome + "está no nível Ascendente");
        break;

    case xp < 10000 :
        console.log("O Herói " + nome + "está no nível Imortal");
        break;

    default :
        console.log("O Herói " + nome + "está no nível Radiante");
        break;
}