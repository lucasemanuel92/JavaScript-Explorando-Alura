console.log(`Trabalhando com Listas`);

// Essa não é uma boa forma
const salvador = `Salvador`;
const rio = `Rio de Janeiro`;
const sampa = `São Paulo`;

console.log(salvador, rio, sampa);

// Forma com array
const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "São Paulo",
    "Maringá",
    "Curitiba",
);
console.log(listaDeDestinos);

listaDeDestinos.push("Porto Alegre"); // ".push()" adiciona um novo elemento a lista
console.log(listaDeDestinos);
