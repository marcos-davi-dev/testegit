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

var eletronico = produtos.filter(function(prod){ //o filter varre o array e verifica um por um, definindo uma variável
		return prod.categori === "moveis"; //faço uma comparação para ver se a categori === ao "eletronico".
	});

console.log(eletronico);