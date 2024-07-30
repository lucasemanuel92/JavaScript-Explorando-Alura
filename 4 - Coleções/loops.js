// Código vindo de 3 - operadoresLogicosMultiplos
console.log("Trabalhando com Loops")

const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log("Lista de Destinos:")
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Maringá";

const podeConprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = 0;
while (contador < 5) {
    destinoExiste = false;
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino encontrado");
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino encontrado: ", destinoExiste)



