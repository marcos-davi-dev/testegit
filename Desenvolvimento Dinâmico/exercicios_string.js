var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
var nomesBrutos = url.slice(url.indexOf("Lucas"));
var nomesSeparados = nomesBrutos.split(",");

console.log(nomesSeparados);
sdafas