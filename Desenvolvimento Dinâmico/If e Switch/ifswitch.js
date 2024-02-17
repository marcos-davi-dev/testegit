var pais = "Brasil";

if (pais === "Brasil"){
	console.log('Tu é Br')
} else {
	console.log('tu é Gringo')
}

let totalCompra = 150;
let desconto = "";

if (totalCompra > 200){
	desconto ="20%";
}else if (totalCompra > 100){
	desconto = "10";
}else if (totalCompra >50){
	desconto = "5%";
}else{
	desconto ="sem desconto"
}

console.log(desconto);