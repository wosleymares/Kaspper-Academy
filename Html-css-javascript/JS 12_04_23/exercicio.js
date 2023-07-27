//Função que mostra a mensagem "Abril de 2023 é top!!!"
const abril = function(){
    console.log("Abril de 2023 é top!!!")
}
abril()

//Função que calcula a área de um retângulo(Expression Function)
const calculaArea = function (){
    const calculaArea = (base, altura) => base * altura;
    const base = 20;
    const altura = 12;
    const area = calculaArea(base, altura)
    console.log(`A área do retangulo é: ${area}`);
    return area;
}
calculaArea()

//Função que calcula a área de um circúlo(Usando Arrow Function, Math.PI)
const calculaCirculo = (raio) => {
    const area = Math.PI * (raio ** 2)
    return area.toFixed(2)
}
const raio = 7
const area = calculaCirculo(raio)
console.log(`A área do círculo é: ${area}`)
