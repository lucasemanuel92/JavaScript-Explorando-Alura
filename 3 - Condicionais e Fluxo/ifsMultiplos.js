// Código copiado de 2 - listas
console.log(`Trabalhando com Multiplas Condicionais`);

// Forma com array
const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log(listaDeDestinos);

const idadeComprador = 17;
estaAcompanhada = true; // Operador booleano, é definido como "true" (verdadeiro) ou "false" (falso)

if(idadeComprador >=18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2, 1); 
    console.log(listaDeDestinos);
} else {
    // Já está condicionada que ela é menor de idade e por isso não pode comprar
    if(estaAcompanhada) { // Nesse caso não é necessário declarar o (estaAcompanhada == true)
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(2, 1); 
        console.log(listaDeDestinos);
    } else {
        console.log("A pessoa é menor de idade e não está acompanhada.")
    }
}






