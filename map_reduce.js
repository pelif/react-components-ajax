const precos = [
    "Crédito", 
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus Dados"
]; 

//filter
const precosFiltro = precos.filter(preco => preco.includes("R$"));     

//map 
const precoNumeros = precosFiltro.map(preco => Number(preco.replace("R$ ", "")));

//reduce
const total = precoNumeros.reduce((acumulador, item) => acumulador + item);

console.log(total); 