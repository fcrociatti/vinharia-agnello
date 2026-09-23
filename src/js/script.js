alert("Bem-vindo ao sistema de Gestão de vinhos da Vinheria Agnello!");

var nomeVinho = prompt("Digite o nome do vinho:");
var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
var safra = prompt("Digite a safra do vinho (ano):");
var quantidade = prompt("Digite a quantidade em estoque:");

// Cálculos 
var anoAtual = 2026;
var idadeVinho = anoAtual - safra;
var estoqueMinimo = quantidade <= 10;

alert("Cadastro realizado! Veja os detalhes a seguir, ou no console.");
alert(
    "RESUMO DO CADASTRO\n\n" +
    "Nome: " + nomeVinho + "\n" +
    "Tipo: " + tipoVinho + "\n" +
    "Safra: " + safra + "\n" +
    "Quantidade em estoque: " + quantidade + "\n" 
);


// Inicio dos consoles
console.log("===== VINHERIA AGNELLO - CADASTRO =====");
console.log("Nome do vinho: " + nomeVinho);
console.log("Tipo: " + tipoVinho);
console.log("Safra: " + safra);
console.log("Quantidade em estoque: " + quantidade);

alert("A seguir, veja a análise do vinho no console.");

console.log("===== ANÁLISE =====");
console.log("Idade do vinho: " + idadeVinho + " ano(s)");
console.log(`O estoque ( ${quantidade} ) está no limite de estoque mínimo? ` + estoqueMinimo);