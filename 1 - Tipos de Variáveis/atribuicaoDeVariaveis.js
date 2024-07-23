console.log("Trabalhando com atribuição de variáveis");

// const não pode ser mudado, já o let é declarado com variável, o melhor é sempre usar const quando possível
const idade = 32;
let nome = "Lucas";
const sobrenome = "Carvalho"

console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);

// Para usa um texto sem concatenar é possíve usar crases e ${variavel}
console.log(`Meu nome é ${nome} ${sobrenome}`);

// É boa pratica fazer tudo antes de declarar
const nomeCompleto = nome + sobrenome;
console.log(`Meu nome é ${nomeCompleto}`);