const carros = [

  { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 45000, dataCriacao: "01/01/2022" },

  { id: 2, modelo: "Punta", marca: "Fiat", preco: 35000, dataCriacao: "01/02/2022" },

  { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 40000, dataCriacao: "01/03/2022" }

];

let totalPrecos = 0;

for (let i = 0; i < carros.length; i) {

  const carro = carros[i];

  totalPrecos += carro.preco;

}

console.log("Total dos preços dos carros:", totalPrecos);

//Neste exemplo, temos um array de carros representado pela variável carros.
// Utilizamos um loop “for” para percorrer cada elemento do array e acessar a
// propriedade preco de cada carro. A cada iteração, somamos o preço ao valor
// da variável totalPrecos. No final, exibimos o total dos preços dos carros no console.

//Exemplo 2: Iteração usando “forin” e “forof”

const carros = ["Corsa", "Punta", "Gol"];

console.log("Iteração usando forin:");

for (let indice in carros) {

  console.log("Índice:", indice, "Valor:", carros[indice]);

}

console.log("Iteração usando forof:");

for (let carro of carros) {

  console.log("Valor:", carro);

}

//Neste exemplo, utilizamos o loop “forin” para percorrer os índices do array 
//carros e exibir tanto o índice quanto o valor correspondente. Em seguida, usamos
 ////o loop “forof” para iterar diretamente sobre os valores do array, sem a necessidade de acessá-los pelos índices.

////Esses são apenas alguns exemplos de como utilizar as instruções “for” em
 ////JavaScript. Lembre-se de praticar e experimentar por conta própria para
 //// aprimorar suas habilidades nessa estrutura de controle.

////Mão na massa usando FOR

////Mergulharemos no uso do “for” em JavaScript e colocaremos a mão na massa
//// para compreender seu funcionamento na prática. O “for” é uma ferramenta
////  poderosa que nos permite percorrer e manipular elementos em um array de
////   maneira eficiente. Através de exemplos e exercícios, você poderá experimentar
////    o uso do “for” em situações reais e aprimorar suas habilidades de programação.

////Parte 1: Iteração com “forin”:
////
//Vamos começar explorando o “forin”, uma forma de iteração que nos permite acessar os atributos de um objeto. Veja o exemplo abaixo:

const carro = {

  modelo: 'Audi A3',

  marca: 'Audi',

  ano: 2020

};

for (let caracteristica in carro) {console.log(caracteristica + ': ’ + carro[caracteristica]);}