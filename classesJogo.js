class classesJogo {
    constructor(nomes, idade, classe) {
        this.nomes = nomes;
        this.idade = idade;
        this.classe = classe;
    }
    atacar() {
        let ataque = "";
        if (this.classe === "Guerreiro") {
            ataque = "Ataque com espada!";
        } else if (this.classe === "Mago") {
            ataque = "Ataque com magia!";
        } else if (this.classe === "Arqueiro") {
            ataque = "Ataque com arco e flecha!";
        } else {
            ataque = "Classe desconhecida!";            
        }
        console.log(`${this.nomes} atacou com ${ataque}`);
    }
    
}

let jogador1 = new classesJogo("Arthur", 30, "Guerreiro");
let jogador2 = new classesJogo("Merlin", 150, "Mago");
let jogador3 = new classesJogo("Robin", 25, "Arqueiro");

jogador1.atacar();
jogador2.atacar();
jogador3.atacar();