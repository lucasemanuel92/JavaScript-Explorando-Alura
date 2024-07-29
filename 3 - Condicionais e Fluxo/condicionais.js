// Código copiado de 2 - listas
console.log(`Trabalhando com Condicionais`);

// Forma com array
const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log(listaDeDestinos);

const idadeComprador = 19;

if(idadeComprador >=18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1); 
    console.log(listaDeDestinos);
} else {
    console.log("Comprador não é maior de idade, por isso não pode comrpar");
}

// Operadores lógicos
console.log(idadeComprador > 18) // Maior
console.log(idadeComprador < 18) // Menor
console.log(idadeComprador >= 18) // Maior ou igual
console.log(idadeComprador <= 18) // Menor ou igual
console.log(idadeComprador == 18) // Igual





