//Declarando objeto
let produto = {
    nome: "Playstation 3",
    valor: 4700,
    calculaDesconto: function(){
        return this.valor * 0.05;
    },
};
console.log(produto.calculaDesconto());

let produto2 = {
    nome: "Super Nintendo",
    valor: 2500,
    calculaDesconto: function(){
        return this.valor * 0.05;
    },
};
console.log(produto2.calculaDesconto())

//Função que retorna um produto
function criarProduto(parametroNome, parametroPreco){
    return {
        nome: parametroNome,
        preco: parametroPreco,
        calculaDesconto: function(){
            return this.preco * 0.05;
        },
    };
}
let produto3 = criarProduto("Super Nintendo", 1000);
let produto4 = criarProduto("Mega Drive", 800);
console.log(produto3.calculaDesconto());
console.log(produto4.calculaDesconto());