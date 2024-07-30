console.log("Trabalhando com operadores lógicos multiplos")

idadeComprador = 17;
estaAcompanhada = false;
temPassagem = true;

const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log(listaDeDestinos);

// Essa é uma forma de limpar o código ainda mais e é uma boa prática
if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2, 1);
    console.log(listaDeDestinos);
} else {
    console.log("A pessoa é menor de idade e não está acompanhada.");
}

console.log("\n\nEmbarque: ") // O comando "\n" pula uma linha
if(idadeComprador >= 18 && temPassagem == true) {
    console.log("Boa Viagem");
} else {
    console.log("Não pode embarcar");
}

// Operadores Lógicos são usados para condicionar as necessidades
// Para usar o OU se usa "||" e para usar o E se usa "&&" 