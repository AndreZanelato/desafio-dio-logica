class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'não realizou nenhum ataque';
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
    new Heroi('Gandalf', 68, 'mago'),
    new Heroi('Arthur', 29, 'guerreiro'),
    new Heroi('Wong', 54, 'monge'),
    new Heroi('Kakashi', 30, 'ninja')
];

for (const heroi of herois) {
    heroi.atacar();
}