// Código vindo de 3 - operadoresLogicosMultiplos
console.log("Trabalhando com Loops: FOR")

const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log("Lista de Destinos:")
console.log(listaDeDestinos);

const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Maringá";
destinoExiste = false;

const podeConprar = (idadeComprador >= 18 || estaAcompanhada == true);

for (let i = 0 ; i < 5; i ++) { //  O formato do for é for(variável; condição; comando pós loop)
    if (listaDeDestinos[i] == destino) {
        console.log("Destino encontrado");
        destinoExiste = true;
        break;
    } 
}
console.log("Destino encontrado: ", destinoExiste)

if(podeConprar && destinoExiste) {
    console.log("Boa Viagem!!");
} else {
    console.log("Desculpe, um erro aconteceu!");
}

