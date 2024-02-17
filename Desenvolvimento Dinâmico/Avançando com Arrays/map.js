var numeros = [1,2,3,4,5,6,7,8,9,10];

//essa functinos multiplica cada valor do numeros por 2
var num = numeros.map(function(valor){
	return valor*2; 
});
console.log(num)

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

nomes = produtos.map(produto => produto.produto);
console.log(nomes);