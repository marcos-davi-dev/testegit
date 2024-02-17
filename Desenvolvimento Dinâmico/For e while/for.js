const numeros = [1,2,3,4,5,6,7,8,9,10];

for(var i=0; i < numeros.length ; i++){ //(inicial; condição de execução; após o loop)
  console.log(numeros[i]);
}

var produtos = [
  {id:1, produto:"celular", categori:"eletronico" },
  {id:2, produto:"carro", categori:"moveis" },
  {id:3, produto:"tablet", categori:"eletronico" },
  {id:4, produto:"geladeira", categori:"eletrodomestico" },
  {id:5, produto:"biscicleta", categori:"veiculo" },
  {id:6, produto:"microondas", categori:"eletrodomestico" },
  {id:7, produto:"fogão eletrico", categori:"eletronico" },
  {id:8, produto:"filtro", categori:"indefinido" },
  {id:9, produto:"mesa", categori:"moveis" },
  {id:10, produto:"cama", categori:"moveis" },
]

var prod = [{id:10, produto:"cama", categori:"moveis" }]

for (let produto in produtos){ //o item representa o item de repetição;
  console.log(produtos[produto]);
}


