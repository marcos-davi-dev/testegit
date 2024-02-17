var numero  = [2,4,7,10,23,3,45,5, 30, 31];
//console.log(numero.sort());
//condição 1
//passo 1 = percorrer o array e testar se a condição é verdadeira;
let condicaoDivisivelPorDois = false;
let condicaoDivisivelPorTrezeCinco = false;

for (i =  0 ; numero.length > i ; i++) {

    //condição 1;

    if (((numero[i] % 2 ) == 0) && ((numero[i] > 0))) {
        condicaoDivisivelPorDois = true;
    }; 

    //condição 2;

    if ( ((numero[i] % 3) == 0) && ((numero[i] % 5 ) == 0)) {
        condicaoDivisivelPorTrezeCinco = true;
    } else {
        condicaoDivisivelPorTrezeCinco = false;
    };
};
//console.log(condicaoDivisivelPorDois);
//Cndição 2 Divisivel por 3 e 5 ao mesmo tempo
//for ( i=0; numero.length > i; i++ ) {}

console.log(`Algum número é divisível por 2 ou maior que zero? ${condicaoDivisivelPorDois}`);
console.log(`Todo os números são divisiveis por 3 ou 5 ao mesmo tempo? ${condicaoDivisivelPorTrezeCinco}`);