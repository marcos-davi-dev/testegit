var valor ='chá';// Aqui é a entrada do usuário

var produtos = [
	{produto:"café", preco:4.50},
	{produto:"chá", preco:3.00},	
	{produto:"leite", preco:2.50}
	]

switch (valor){
	case "café":
		console.log(`Café é uma ótima escolha para começar o dia, o preço é R$ ${produtos[0].preco.toFixed(2)}`);
		break;
	
	case "chá":
		console.log(`Chá é bom para acalamr os ânimos, o preço é R$ ${produtos[1].preco.toFixed(2)}`);
		break;

	case "leite":
		console.log(`Leite é uma fonte de cálcio importante, o preço é R$ ${produtos[2].preco.toFixed(2)}`);
		break;

	default:
		console.log("opção inválida, escolha entre Café, Leite ou Chá");
}