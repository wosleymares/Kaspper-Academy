//Declaração
function ola () {
    //console.log("Utilizando função")
}

//Chamando a função
ola()

//Segunda forma de expressão
const olaExpressao = function(){
   // console.log("Função com function expression")
}
olaExpressao()

//Terceira forma Arrow Function
const numAleatorio = () => Math.random()

//Utilizando parâmetros primeira forma
function digaOla(nome){
    return `Olá ${nome}`
}
//Utilizando parâmetro terceira forma
const digaOlaAF = (nome) => `Olá ${nome}`
    console.log(digaOlaAF("Wosley"))
