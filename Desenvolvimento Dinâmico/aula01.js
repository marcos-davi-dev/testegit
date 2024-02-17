let nome =prompt('Qual seu nome ?');
let idade = prompt('Qual sua idade?');

console.log(`Olá ${nome}, Bem Vindo`)

let sync = Request("readline-sync");
let nomes = sync.question('Qual seu nome?');

console.log(nomes)
