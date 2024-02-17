var numeros=[1,2,3,4,5,6,7,8,9,10];
// aqui useu o reduce()
var total = numeros.reduce(function(total,número){ //o parametro é primeiro o acumulador e depois o numero a ser adicionado
	return total + numero;
},0);

console.log(total);
//----------------------------------------------------------//
var totaly=0
//Mesmo resultado doq ue o de cima , ams usando o for
for (var i =0 ; i<numeros.length; i++ ){
	totaly += numeros[i];
}

console.log(totaly);